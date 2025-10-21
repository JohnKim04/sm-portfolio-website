import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import EPGCaseStudyThumbnail from '../../../../_components/OtherCaseStudies/EPGOtherCaseStudy';
import CoinbaseCaseStudyThumbnail from '../../../../_components/OtherCaseStudies/CoinbaseOtherCaseStudy';

export default function NextCaseStudies() {
  return (
    <section className="flex flex-col gap-10">
      <RevealWrapper>
        <h2>Discover More</h2>
        <div className="flex justify-around gap-8">
          <CoinbaseCaseStudyThumbnail />
          <EPGCaseStudyThumbnail />
        </div>
      </RevealWrapper>
    </section>
  );
}
