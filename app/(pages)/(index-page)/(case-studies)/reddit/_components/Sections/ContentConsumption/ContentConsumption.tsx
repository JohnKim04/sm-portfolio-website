import TextCard, {
  TextCardProps,
} from '@/app/(pages)/_components/TextCard/TextCard';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../_components/HeadingBody/HeadingBody';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function ContentConsumption() {
  const textCardElements: TextCardProps[] = [
    {
      number: '01',
      header: 'Pre-game',
      body: 'Generating excitement through game predictions and voting, lineups, team season stats',
    },
    {
      number: '02',
      header: 'Live game',
      body: 'Providing users with real-time updates including key plays and live score by inning',
    },
    {
      number: '03',
      header: 'Post-game',
      body: 'Encouraging discussion about final game scores, player performance, and highlights',
    },
  ];

  return (
    <section>
      <RevealWrapper>
        <HeadingBody h="Mapping content consumption for each game phase" p="" />
        <div className="flex gap-8 pt-4">
          {textCardElements.map((card, index) => (
            <TextCard {...card} key={index} />
          ))}
        </div>
        <div className="flex flex-col items-center gap-4 mt-10">
          <ImageWithModal
            src="/reddit/informationArchitecure.webp"
            alt="Information Architecture"
            width={800}
            height={400}
          />
          <p className="text-gray-500">
            Information architecture for game phases
          </p>
        </div>
      </RevealWrapper>
    </section>
  );
}
