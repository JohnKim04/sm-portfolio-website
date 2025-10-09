import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import EPGCaseStudyThumbnail from '../../../../_components/OtherCaseStudies/EPGOtherCaseStudy';
import RedditCaseStudyThumbnail from '../../../../_components/OtherCaseStudies/RedditOtherCaseStudy';

export default function NextCaseStudies() {
  return (
    <section className="flex flex-col gap-10">
      <RevealWrapper>
        <h2>Discover More</h2>
        <div className="flex justify-around gap-8">
          <RedditCaseStudyThumbnail />
          <EPGCaseStudyThumbnail />
        </div>
      </RevealWrapper>
    </section>
  );
}
