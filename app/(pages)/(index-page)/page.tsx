export const revalidate = 0;
export const dynamic = 'force-dynamic';
import getImageData from '@/app/_lib/getImageData';
import CaseStudy, { CaseStudyProps } from './_components/CaseStudy/CaseStudy';
import Landing from './_components/Landing/Landing';
import LoadingCaseStudy from './_components/CaseStudy/LoadingCase';
import PlaceholderTile from './_components/CaseStudy/PlaceholderTile';
import { getImageUrl } from '@/app/_lib/getImageUrl';

export default async function Home() {
  let images: ({ key: string; url: string } | undefined)[] | undefined;
  
  try {
    images = await getImageData('landingPage/');
  } catch (error) {
    console.error('[Home] Failed to fetch images from S3:', error);
    images = undefined;
  }

  // Get image URLs with fallback and logging
  const epgImageUrl = getImageUrl(images, 'EPGDesktopHQ.png');
  const emImageUrl = getImageUrl(images, 'EMThumbnail2.png');

  // Log warnings if images are missing
  if (!epgImageUrl) {
    console.warn('[Home] EPGDesktopHQ.png not found in S3 images');
    if (images) {
      const availableKeys = images.filter(Boolean).map(img => img?.key);
      console.log('[Home] Available image keys:', availableKeys);
      // Try to find similar filenames
      const epgMatches = availableKeys.filter(key => 
        key?.toLowerCase().includes('epg') && key?.toLowerCase().includes('desktop')
      );
      if (epgMatches.length > 0) {
        console.log('[Home] Found similar EPG files:', epgMatches);
      }
    }
  }
  if (!emImageUrl) {
    console.warn('[Home] EMThumbnail2.png not found in S3 images');
    if (images) {
      const availableKeys = images.filter(Boolean).map(img => img?.key);
      const emMatches = availableKeys.filter(key => 
        key?.toLowerCase().includes('error') || 
        (key?.toLowerCase().includes('em') && key?.toLowerCase().includes('thumbnail'))
      );
      if (emMatches.length > 0) {
        console.log('[Home] Found similar EM files:', emMatches);
      }
    }
  }

  const caseStudyInformation: CaseStudyProps[] = [
    {
      org: 'Reddit',
      purpose: 'Contract Work',
      desc: 'Driving conversation amongst baseball fans',
      src: '/reddit/redditTile.webp',
      alt: 'Reddit Project',
      linkurl: '/reddit',
    },
    {
      org: 'Coinbase',
      purpose: 'Internship',
      desc: 'Crafting unified and efficient design systems',
      src: '/coinbase/coinbaseTile.webp',
      alt: 'Coinbase case study',
      linkurl: '/coinbase',
    },
    {
      org: 'Paramount+',
      purpose: 'Internship',
      desc: 'Reimagining live sports streaming',
      src: epgImageUrl || '/paramount/logo.svg', // Fallback to logo if S3 image not found
      alt: 'Paramount Logo',
      linkurl: '/paramount/EPG',
    },
    {
      org: 'Paramount+',
      purpose: 'Internship',
      desc: 'Guiding users during video playback error',
      src: emImageUrl || '/paramount/logo.svg', // Fallback to logo if S3 image not found
      alt: 'Paramount Logo',
      linkurl: '/paramount/errorMessaging',
    },
    {
      org: 'HackDavis 2024',
      purpose: 'Contract Work',
      desc: 'Empowering students to create for social good',
      src: '/landing/caseStudies/hackdavis.webp',
      alt: 'HackDavis Website',
      linkurl: '/hackdavis',
    },
    {
      org: 'Sage',
      purpose: 'Passion Project',
      desc: "Equipping individuals to navigate life's stressors",
      src: '/landing/caseStudies/sage.webp',
      alt: 'Sage App',
      linkurl: '/sage',
    },
  ];

  return (
    <main className="flex flex-col px-[8%] pb-20 overflow-clip relative font-dm-sans gap-12">
      <Landing />

      {/* Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16" id="Case Studies">

        {caseStudyInformation.map((study, index) => {
          if (index === 0) {
            return <LoadingCaseStudy {...study} key={index} />;
          } else {
            return <CaseStudy {...study} key={index} />;
          }
        })}
      </div>
    </main>
  );
}
