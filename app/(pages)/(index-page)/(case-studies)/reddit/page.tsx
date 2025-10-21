import Landing from './_components/Sections/Landing/Landing';
import Summary from './_components/Sections/Summary/Summary';
import AppPreview from './_components/Sections/AppPreview/AppPreview';
import DividerLine from '../_components/DividerLine/DividerLine';
import Banner from './_components/Sections/Banner/Banner';
import TargetAudience from './_components/Sections/TargetAudience/TargetAudience';
import StrategyKpis from './_components/Sections/StrategyKpis/StrategyKpis';
import ContentConsumption from './_components/Sections/ContentConsumption/ContentConsumption';
import Iterations from './_components/Sections/Iterations/Iterations';
import Visibility from './_components/Sections/Visibility/Visibility';
import BetaTesting from './_components/Sections/BetaTesting/BetaTesting';
import NextSteps from './_components/Sections/NextSteps/NextSteps';
import UserFeedback from './_components/Sections/UserFeedback/UserFeedback';
import FinalDesigns from './_components/Sections/FinalDesigns/FinalDesigns';
import Reflection from './_components/Sections/Reflection/Reflection';
import NextCaseStudies from './_components/Sections/NextCaseStudies/NextCaseStudies';
import TableOfContents from '../_components/TableOfContents/TableOfContents';

export default function RedditCaseStudy() {
  const pageContents = [
    { sectionName: 'Overview', level: 0 },
    { sectionName: 'App Preview', level: 0 },
    { sectionName: 'Strategy & KPIs', level: 0 },
    { sectionName: 'Iterations', level: 0 },
    { sectionName: 'Next Steps', level: 0 },
    { sectionName: 'Final Designs', level: 0 },
    { sectionName: 'Reflection', level: 0 },
  ];

  return (
    <main className="bg-white text-black flex flex-col px-case-study gap-20 pt-[80px]">
      <TableOfContents sections={pageContents} />
      <Landing />
      <section id="Overview">
        <Summary />
      </section>
      <section id="App Preview">
        <AppPreview />
      </section>
      <div className="py-20">
        <Banner />
      </div>
      <section id="Target Audience">
        <TargetAudience />
      </section>
      <section id="Strategy & KPIs">
        <StrategyKpis />
      </section>
      <DividerLine />
      <section id="Content Consumption">
        <ContentConsumption />
      </section>
      <section id="Iterations">
        <Iterations />
      </section>
      <section id="Visibility">
        <Visibility />
      </section>
      <DividerLine />
      <section id="Beta Testing">
        <BetaTesting />
      </section>
      <DividerLine />
      <section id="Next Steps">
        <NextSteps />
      </section>
      <section id="User Feedback">
        <UserFeedback />
      </section>
      <DividerLine />
      <section id="Final Designs">
        <FinalDesigns />
      </section>
      <DividerLine />
      <section id="Reflection">
        <Reflection />
      </section>
      <DividerLine />
      <NextCaseStudies />
    </main>
  );
}
