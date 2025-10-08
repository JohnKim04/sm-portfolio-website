import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';

export default function TargetAudience() {
  const bulletPoints = [
    'Needs a way to follow live game updates',
    'Consumes a majority of content on the home page',
    'Will engage in discussion as a means to educate bets or show team spirit',
  ];

  return (
    <section>
      <RevealWrapper>
        <div className="flex gap-10">
          <ImageWithModal
            src="/reddit/redditSnoo.webp"
            alt="Reddit Snoo"
            width={200}
            height={200}
            className="w-1/4 h-auto"
          />
          <div className="flex flex-col gap-4">
            <p className="text-gray-500">Target Audience</p>
            <h3>The baseball enthusiast</h3>
            <p>
              The typical r/MLB redditor is qualified and familiar with baseball
              and its stats.
            </p>
            <ul className="list-disc list-inside">
              {bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
