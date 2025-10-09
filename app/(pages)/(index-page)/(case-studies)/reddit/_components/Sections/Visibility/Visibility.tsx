import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Visibility() {
  return (
    <section>
      <RevealWrapper>
        <div className="flex flex-col gap-2">
          <h3>Visually displaying balls, strikes & outs</h3>
          <p>
            <strong>Constraint:</strong> Content must fit in the fixed height of
            312px or 512px.
          </p>
          <p className="mt-4">
            <strong>Solution:</strong> At a glance, users are most interested in
            the number of outs. Final designs omit balls and strikes which can
            be found in the box score tab instead, reducing cognitive load.
          </p>
        </div>
        <div className="flex items-center gap-8 mt-10">
          <div className="flex flex-col items-center gap-2 flex-1">
            <ImageWithModal
              src="/reddit/summaryExplorations.webp"
              alt="Summary Page Explorations"
              width={1000}
              height={2000}
              className="w-full h-auto"
            />
            <h4 className="text-gray-500 font-normal">
              Summary Page Iterations
            </h4>
          </div>
          <ImageWithModal
            src="/hackdavis/Arrow.svg"
            alt="arrow"
            width={50}
            height={50}
          />
          <div className="flex flex-col items-center gap-2 flex-1">
              <ImageWithModal
                src="/reddit/summaryFinal.webp"
                alt="Summary Page Final Design"
                width={1000}
                height={2000}
                className="w-3/4 h-auto"
              />
            <h4 className="text-gray-500 font-normal">Final Design on Mobile</h4>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
