import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Iterations() {
  return (
    <section>
      <RevealWrapper>
        <div className="flex flex-col gap-2">
          <p className="text-gray-500">Iterations</p>
          <h3>Box score pagination</h3>
          <p>
            <strong>Constraint:</strong> Limited interactions including no
            scrolling, pinching, zooming or dragging.
          </p>
          <p className="mt-4">
            <strong>Solution:</strong> Box scores for baseball show 13 individual
            and team stats, in addition to team totals. In order to display
            this comprehensive game summary within smaller device sizes we
            utilized vertical and horizontal pagination.
          </p>
        </div>
        <div className="flex items-center gap-8 mt-10">
          <div className="flex flex-col items-center gap-2 flex-1">
            <ImageWithModal
              src="/reddit/boxScoreExplorations.webp"
              alt="Box Score Explorations"
              width={1000}
              height={2000}
              className="w-full h-auto"
            />
            <p className="text-gray-500">BoxScore Iterations</p>
          </div>
          <ImageWithModal
            src="/hackdavis/Arrow.svg"
            alt="arrow"
            width={50}
            height={50}
          />
          <div className="flex flex-col items-center gap-2 flex-1">
            <ImageWithModal
              src="/reddit/boxScoreFinal.webp"
              alt="Box Score Final Design"
              width={1000}
              height={2000}
              className="w-full h-auto"
            />
            <p className="text-gray-500">Final Design on Mobile</p>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
