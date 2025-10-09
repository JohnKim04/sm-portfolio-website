import TextCard, {
  TextCardProps,
} from '@/app/(pages)/_components/TextCard/TextCard';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../_components/HeadingBody/HeadingBody';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function StrategyKpis() {
  const textCardElements: TextCardProps[] = [
    {
      number: '01',
      header: 'Community',
      body: 'Provide sports fans with ways to connect with fellow community members.',
    },
    {
      number: '02',
      header: 'Monetization',
      body: 'Leverage partnerships with Major League Sports to enable advertisers to align with fans.',
    },
    {
      number: '03',
      header: 'Innovation',
      body: 'Integrate media including highlights, player AMAs, and behind-the-scenes videos.',
    },
  ];

  return (
    <section>
      <RevealWrapper>
        <HeadingBody h="Strategy + KPIs" p="" />
        <div className="flex gap-8 pt-4">
          {textCardElements.map((card, index) => (
            <TextCard {...card} key={index} />
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 mt-10">
          <ImageWithModal
            src="/reddit/techStack.webp"
            alt="Tech Stack"
            width={800}
            height={400}
          />
          <h4 className="text-gray-500 font-normal">Tech stack and tools</h4>
        </div>
        <div className="mt-20">
          <HeadingBody
            h="Understanding tech stack & constraints"
            p="The stats that we could display in the app had to be available through the SportRadar API. To build the app, our team used Devvit, Reddit's developer platform which comes with its own set of unique constraints:"
          />
          <ul className="list-disc list-inside mt-4">
            <li>Limited interactions including no scrolling, pinching, zooming or dragging</li>
            <li>Content must fit in the fixed height of 312px or 512px</li>
          </ul>
        </div>
      </RevealWrapper>
    </section>
  );
}
