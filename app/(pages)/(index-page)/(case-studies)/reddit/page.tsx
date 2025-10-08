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

export default function RedditCaseStudy() {
  return (
    <div>
      <Landing />
      <main className="flex flex-col gap-20 px-case-study overflow-clip pt-20">
        <Summary />
        <AppPreview />
      </main>
      <div className="py-20">
        <Banner />
      </div>
      <main className="flex flex-col gap-20 px-case-study overflow-clip">
        <TargetAudience />
        <StrategyKpis />
        <DividerLine />
        <ContentConsumption />
        <Iterations />
        <Visibility />
        <DividerLine />
        <BetaTesting />
        <DividerLine />
        <NextSteps />
        <UserFeedback />
        <DividerLine />
      </main>
      <FinalDesigns />
      <main className="flex flex-col gap-20 px-case-study overflow-clip py-20">
        <DividerLine />
        <Reflection />
        <DividerLine />
        <NextCaseStudies />
      </main>
    </div>
  );
}
