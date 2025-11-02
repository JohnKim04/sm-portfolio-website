import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
  },
});

export default async function getImageData(folderName: string) {
  console.log(`[getImageData] Starting fetch for folder: ${folderName}`);
  
  // Check if required environment variables are set
  if (!process.env.AWS_REGION || !process.env.S3_BUCKET_NAME) {
    console.error(`[getImageData] Missing required environment variables`);
    console.error(`[getImageData] AWS_REGION: ${process.env.AWS_REGION ? 'set' : 'MISSING'}`);
    console.error(`[getImageData] S3_BUCKET_NAME: ${process.env.S3_BUCKET_NAME ? 'set' : 'MISSING'}`);
    console.error(`[getImageData] AWS_ACCESS_KEY_ID: ${process.env.AWS_ACCESS_KEY_ID ? 'set' : 'MISSING'}`);
    throw new Error('Missing required AWS environment variables');
  }
  
  console.log(`[getImageData] S3 Config - Region: ${process.env.AWS_REGION}, Bucket: ${process.env.S3_BUCKET_NAME}`);
  
  const listCommand = new ListObjectsV2Command({
    Bucket: process.env.S3_BUCKET_NAME,
    Prefix: folderName.endsWith('/') ? folderName : `${folderName}/`, // Ensure folder ends with a "/"
  });

  console.log(`[getImageData] Sending S3 ListObjects command...`);
  const { Contents } = await s3Client.send(listCommand);
  console.log(`[getImageData] S3 ListObjects completed. Found ${Contents?.length || 0} items`);

  if (!Contents || Contents.length === 0) {
    console.log(`[getImageData] ERROR: No contents found in ${folderName}`);
    throw new Error(`Failed to fetch images in ${folderName}`);
  }

  console.log(`[getImageData] Processing ${Contents.length} items (no sorting needed with filename mapping)...`);

  console.log(`[getImageData] Starting to process items and generate presigned URLs...`);
  
  console.log(`[getImageData] Processing ALL ${Contents.length} items (including large videos for debugging)...`);

  const imageUrls = await Promise.all(
    Contents.map(async (item, index) => {
      if (item.Key) {
        const fileSize = Math.round((item.Size || 0) / 1024 / 1024);
        console.log(`[getImageData] Generating URL ${index + 1}/${Contents.length} for: ${item.Key} (${fileSize}MB)`);
        
        const getCommand = new GetObjectCommand({
          Bucket: process.env.S3_BUCKET_NAME,
          Key: item.Key,
        });

        // Longer expiry for videos, shorter for images
        const isVideo = item.Key.endsWith('.mp4');
        console.log(`[getImageData] Item ${item.Key} is ${isVideo ? 'video' : 'image'} (${fileSize}MB), setting expiry...`);
        
        try {
          const url = await getSignedUrl(s3Client, getCommand, {
            // TEMP: Increase TTL to 24h to avoid stale URLs in production while caching is fixed
            expiresIn: 60 * 60 * 24, // 24 hours for both videos and images
          });
          console.log(`[getImageData] ✅ Generated URL for: ${item.Key}`);
          return { key: item.Key, url };
        } catch (error) {
          console.error(`[getImageData] ❌ Failed to generate URL for ${item.Key}:`, error);
          return undefined;
        }
      }
      return undefined;
    })
  );
  console.log(`[getImageData] ✅ Successfully processed ${imageUrls.filter(Boolean).length}/${imageUrls.length} items for ${folderName}`);
  return imageUrls;
}
