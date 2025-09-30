import getImageData from '@/app/_lib/getImageData';
import CaseStudy, { CaseStudyProps } from './_components/CaseStudy/CaseStudy';
import Landing from './_components/Landing/Landing';
import LoadingCaseStudy from './_components/CaseStudy/LoadingCase';
import { getImageUrl } from '@/app/_lib/getImageUrl';

export default async function Home() {
  const images = await getImageData('landingPage/');

  const caseStudyInformation: CaseStudyProps[] = [
    // {
    //   org: 'Coinbase',
    //   purpose: 'Internship',
    //   desc: 'Building a scalable, lean design system',
    //   src: '/caseStudies/coinbase.png',
    //   alt: 'Coinbase Logo',
    //   linkurl: '',
    // },
    {
      org: 'Paramount+',
      purpose: 'Internship',
      desc: 'Reimagining the live television experience',
      src: getImageUrl(images, 'landingEPG.svg'),
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
      purpose: 'Client Project',
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

      <div className="flex flex-col gap-20" id="Case Studies">
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
