import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../_components/HeadingBody/HeadingBody';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Reflection() {
  return (
    <section>
      <RevealWrapper>
        <div className="flex flex-col gap-4">
          <h4 className="text-gray-500 font-normal">
            Reflection: Lessons Learned
          </h4>
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
              <h4 className="text-gray-500 text-center font-normal">
                @ the Giants game!
              </h4>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ImageWithModal
                src="/reddit/productShowcase.webp"
                alt="Product showcase"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <h4 className="text-gray-500 text-center font-normal">
                Product showcase
              </h4>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ImageWithModal
                src="/reddit/banquet.webp"
                alt="Team swag"
                width={400}
                height={400}
                className="w-full h-auto"
              />
              <h4 className="text-gray-500 text-center font-normal">
                Team swag
              </h4>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
