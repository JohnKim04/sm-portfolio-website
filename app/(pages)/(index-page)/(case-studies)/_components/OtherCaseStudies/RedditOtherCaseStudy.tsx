import Link from 'next/link';
import CaseStudy, {
  CaseStudyProps,
} from '@/app/(pages)/(index-page)/_components/CaseStudy/CaseStudy';

export default function RedditOtherCaseStudy() {
  const caseStudy: CaseStudyProps = {
    org: 'Reddit',
    purpose: 'Client Project',
    desc: 'Driving conversation and engagement amongst MLB fans',
    src: '/reddit/productShowcase.webp',
    alt: 'Reddit Project',
    linkurl: '/reddit',
  };

  return (
    <Link href={caseStudy.linkurl} className="w-1/2">
      <CaseStudy {...caseStudy} />
    </Link>
  );
}
