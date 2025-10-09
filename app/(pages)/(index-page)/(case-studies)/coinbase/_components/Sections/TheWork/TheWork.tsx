import TextCard, {
  TextCardProps,
} from '@/app/(pages)/_components/TextCard/TextCard';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../_components/HeadingBody/HeadingBody';

export default function TheWork() {
  const textCardElements: TextCardProps[] = [
    {
      number: '01',
      header: 'Select Component',
      body: 'Adding multi select, search, type-ahead, and read-only functionality to new variants.',
    },
    {
      number: '02',
      header: 'Templates & Grids',
      body: 'Creating layout guide styles and page templates in Figma that are 0 → 1 with code.',
    },
    {
      number: '03',
      header: 'Design Tooling',
      body: 'Auditing consumer feedback to improve component builds and create more lean props.',
    },
  ];

  return (
    <section>
      <RevealWrapper>
        <h4 className="text-gray-500 font-normal">The work</h4>
        <div className="flex gap-8 pt-4">
          {textCardElements.map((card, index) => (
            <TextCard {...card} key={index} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
