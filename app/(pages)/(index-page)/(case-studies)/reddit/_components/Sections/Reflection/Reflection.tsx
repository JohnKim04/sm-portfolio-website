import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../_components/HeadingBody/HeadingBody';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Reflection() {
  return (
    <section>
      <RevealWrapper>
        <div className="flex flex-col gap-8">
          <HeadingBody h="Reflection: Lessons Learned" p="" />
          <div>
            <HeadingBody
              h="Possess a strong understanding of technical constraints"
              p="Understanding technical constraints off the bat (no pun intended) creates more efficient workflows and reduces bottlenecks. In the early stages of the design process, I proactively sought to understand the feasibility of ideas."
            />
          </div>
          <div>
            <HeadingBody
              h="Sometimes getting unblocked is a team sport"
              p="There were times during the development process when engineers were blocked due to limitations in Devvit's styling capabilities. Working together to ideate and review alternative approaches ensured that designs were implemented as close to the handoff files as possible."
            />
          </div>
          <div className="grid grid-cols-3 gap-8 pt-10">
            <div className="flex flex-col items-center gap-2">
              <ImageWithModal
                src="/reddit/giantsGame.webp"
                alt="@ the Giants game!"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <p className="text-gray-500 text-center">@ the Giants game!</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ImageWithModal
                src="/reddit/productShowcase.webp"
                alt="Product showcase"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <p className="text-gray-500 text-center">Product showcase</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ImageWithModal
                src="/reddit/banquet.webp"
                alt="Team swag"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <p className="text-gray-500 text-center">Team swag</p>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
