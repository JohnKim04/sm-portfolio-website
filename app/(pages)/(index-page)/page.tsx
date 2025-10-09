export const revalidate = 0;
export const dynamic = 'force-dynamic';
import getImageData from '@/app/_lib/getImageData';
import CaseStudy, { CaseStudyProps } from './_components/CaseStudy/CaseStudy';
import Landing from './_components/Landing/Landing';
import LoadingCaseStudy from './_components/CaseStudy/LoadingCase';
import PlaceholderTile from './_components/CaseStudy/PlaceholderTile';
import { getImageUrl } from '@/app/_lib/getImageUrl';

export default async function Home() {
  const images = await getImageData('landingPage/');

  const caseStudyInformation: CaseStudyProps[] = [
    {
      org: 'Coinbase',
      purpose: 'Internship',
      desc: 'Creating world class app experiences through high craft design systems',
      src: '/coinbase/landingHeroImage.webp',
      alt: 'Coinbase case study',
      linkurl: '/coinbase',
    },
    {
      org: 'Reddit',
      purpose: 'Contract Work',
      desc: 'Driving conversation and engagement amongst Major League Baseball fans',
      src: '/reddit/finalDesigns/desktop10.webp',
      alt: 'Reddit Project',
      linkurl: '/reddit',
    },
    {
      org: 'Paramount+',
      purpose: 'Internship',
      desc: 'Reimagining the live sports streaming experience',
      src: '/caseStudies/desktopEPG.webp',
      alt: 'Paramount Logo',
      linkurl: '/paramount/EPG',
    },
    {
      org: 'Paramount+',
      purpose: 'Internship',
      desc: 'Guiding users to resolution during video playback error',
      src: getImageUrl(images, 'landingEM.svg'),
      alt: 'Paramount Logo',
      linkurl: '/paramount/errorMessaging',
    },
    {
      org: 'HackDavis 2024',
      purpose: 'Contract Work',
      desc: 'Empowering students to create for social good',
      src: '/caseStudies/hackDavisHeader.webp',
      alt: 'HackDavis Website',
      linkurl: '/hackdavis',
    },
    {
      org: 'Sage',
      purpose: 'Passion Project',
      desc: "Equipping individuals to navigate life's stressors",
      src: '/caseStudies/sage.svg',
      alt: 'Sage App',
      linkurl: '/sage',
    },
  ];

  return (
    <main className="flex flex-col px-[15%] pb-20 overflow-clip relative font-dm-sans gap-20">
      <Landing />

      {/* Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="Case Studies">

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
