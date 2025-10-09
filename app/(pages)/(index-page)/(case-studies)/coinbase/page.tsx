import Landing from './_components/Sections/Landing/Landing';
import Confidentiality from './_components/Sections/Confidentiality/Confidentiality';
import Summary from './_components/Sections/Summary/Summary';
import TheWork from './_components/Sections/TheWork/TheWork';
import Impact from './_components/Sections/Impact/Impact';
import InternshipCelebration from './_components/Sections/InternshipCelebration/InternshipCelebration';
import Reflection from './_components/Sections/Reflection/Reflection';
import PhotoCarousel from './_components/Sections/PhotoCarousel/PhotoCarousel';
import DividerLine from '../_components/DividerLine/DividerLine';
import NextCaseStudies from './_components/Sections/NextCaseStudies/NextCaseStudies';

export default function CoinbaseCaseStudy() {
  return (
    <div>
      <Landing />
      <main className="px-case-study py-20 flex flex-col gap-20">
        <Confidentiality />
        <Summary />
        <TheWork />
      </main>
      <Impact />
      <main className="px-case-study py-20 flex flex-col gap-20">
        <InternshipCelebration />
        <Reflection />
      </main>
      <PhotoCarousel />
      <main className="px-case-study py-20 flex flex-col gap-20">
        <DividerLine />
        <NextCaseStudies />
      </main>
    </div>
  );
}
