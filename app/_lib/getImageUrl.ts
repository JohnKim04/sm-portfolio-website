export const getImageUrl = (
  images: ({ key: string; url: string } | undefined)[] | undefined,
  filename: string
): string => {
  if (!images || images.length === 0) {
    console.warn(`[getImageUrl] No images provided for filename: ${filename}`);
    return '';
  }

  // First try exact match (case-insensitive)
  let image = images.find((img) => {
    const key = img?.key || '';
    const lowerKey = key.toLowerCase();
    const lowerFilename = filename.toLowerCase();
    return lowerKey.includes(lowerFilename);
  });

  // If exact match fails, try partial match (filename without extension)
  if (!image) {
    const filenameWithoutExt = filename.replace(/\.[^/.]+$/, '');
    const lowerFilenameBase = filenameWithoutExt.toLowerCase();
    image = images.find((img) => {
      const key = img?.key || '';
      const lowerKey = key.toLowerCase();
      return lowerKey.includes(lowerFilenameBase);
    });
  }
  
  if (!image || !image.url) {
    console.warn(`[getImageUrl] Image not found: ${filename}`);
    const availableKeys = images.filter(Boolean).map(img => img?.key);
    console.log(`[getImageUrl] Available keys (${availableKeys.length} total):`, availableKeys);
    
    // Suggest similar matches
    const lowerFilename = filename.toLowerCase();
    const suggestions = availableKeys.filter(key => 
      key?.toLowerCase().includes(lowerFilename.substring(0, 3))
    );
    if (suggestions.length > 0) {
      console.log(`[getImageUrl] Similar keys found:`, suggestions);
    }
    
    return '';
  }

  console.log(`[getImageUrl] ✅ Found image: ${filename} -> ${image.key}`);
  return image.url;
};
