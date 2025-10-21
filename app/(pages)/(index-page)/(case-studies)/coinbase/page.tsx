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
import TableOfContents from '../_components/TableOfContents/TableOfContents';

export default function CoinbaseCaseStudy() {
  const pageContents = [
    { sectionName: 'Overview', level: 0 },
    { sectionName: 'The Work', level: 0 },
    { sectionName: 'Impact', level: 0 },
    { sectionName: 'Reflection', level: 0 },
  ];

  return (
    <main className="bg-white text-black flex flex-col px-case-study gap-20 pt-[80px]">
      <TableOfContents sections={pageContents} />
      <Landing />
      <Confidentiality />
      <section id="Overview">
        <Summary />
      </section>
      <section id="The Work">
        <TheWork />
      </section>
      <section id="Impact">
        <Impact />
      </section>
      <section id="Internship Celebration">
        <InternshipCelebration />
      </section>
      <section id="Reflection">
        <Reflection />
      </section>
      <PhotoCarousel />
      <DividerLine />
      <NextCaseStudies />
    </main>
  );
}
