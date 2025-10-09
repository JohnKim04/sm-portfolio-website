import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../_components/HeadingBody/HeadingBody';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function BetaTesting() {
  return (
    <section>
      <RevealWrapper>
        <HeadingBody
          h="Beta Testing in r/MLB"
          p="We worked with several Reddit Moderators to beta test the app in Major League Baseball subreddits including r/MLB, r/AtlantaBraves, and r/tampabayrays."
        />
        <div className="flex flex-col items-center gap-4 mt-10">
          <ImageWithModal
            src="/reddit/redditFeedback.webp"
            alt="Feedback from Reddit beta testing"
            width={1000}
            height={800}
          />
          <h4 className="text-gray-500 font-normal">
            Positive feedback from beta testing!
          </h4>
        </div>
      </RevealWrapper>
    </section>
  );
}
