import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function UserFeedback() {
  return (
    <section>
      <RevealWrapper>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-2xl">01</p>
            <p>Allow users to undo poll votes</p>
            <ImageWithModal
              src="/reddit/redditComment1.webp"
              alt="Reddit comment about undoing poll votes"
              width={600}
              height={400}
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-2xl">02</p>
            <p>Replace strikeouts with batters faced</p>
            <ImageWithModal
              src="/reddit/redditComment2.webp"
              alt="Reddit comment about replacing strikeouts"
              width={600}
              height={400}
            />
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
