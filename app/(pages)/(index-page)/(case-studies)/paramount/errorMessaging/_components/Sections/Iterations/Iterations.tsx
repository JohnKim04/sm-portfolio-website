import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../page';
import Image from 'next/image';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import { getImageUrl } from '@/app/_lib/getImageUrl';

export default function Iterations(content: contentProps) {
  return (
    <section className="flex flex-col gap-20" id="Iterations">
      <RevealWrapper>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h4>{content.h4?.at(0)}</h4>
            <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />
          </div>

          <div className="flex w-full items-center gap-8">
            <div className="flex flex-col items-center gap-2 flex-grow w-[47%] self-end">
              <ImageWithModal
                src={getImageUrl(content.images, 'centerAlignTV.svg')}
                alt="Center Aligned TV"
                width={1000}
                height={1000}
                className="w-full"
              />
              <h4>{content.h4?.at(1)}</h4>
            </div>
            <Image
              src="/hackdavis/Arrow.svg"
              alt="arrow"
              width={1000}
              height={1000}
              className="w-10"
            />
            <div className="flex flex-col items-center gap-2 flex-grow w-[53%] self-end">
              <ImageWithModal
                src={getImageUrl(content.images, 'leftAlignTV.svg')}
                alt="Left Aligned TV"
                width={1000}
                height={1000}
                className="w-full"
              />
              <h4>{content.h4?.at(2)}</h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <HeadingBody h={content.h3?.at(1)} p={content.body?.at(1)} />

          <div className="flex w-full gap-8">
            <div className="flex flex-col items-center gap-2 self-end flex-grow w-[47%]">
              <ImageWithModal
                src={getImageUrl(content.images, 'leftAlignTV.svg')}
                alt="Left Aligned TV"
                width={1000}
                height={1000}
                className="w-full"
              />
              <h4>{content.h4?.at(3)}</h4>
            </div>
            <Image
              src="/hackdavis/Arrow.svg"
              alt="arrow"
              width={1000}
              height={1000}
              className="w-10"
            />
            <div className="flex flex-col items-center gap-2 flex-grow w-[53%] self-end">
              <ImageWithModal
                src={getImageUrl(content.images, 'leftAlignTVBlack.svg')}
                alt="Left Aligned TV Black"
                width={1000}
                height={1000}
                className="w-full"
              />
              <h4>{content.h4?.at(4)}</h4>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <HeadingBody h={content.h3?.at(2)} p={content.body?.at(2)} />

          <div className="flex w-full gap-8">
            <div className="flex flex-col items-center gap-2 flex-grow w-[47%] self-end">
              <ImageWithModal
                src={getImageUrl(content.images, 'leftAlignTVBlack.svg')}
                alt="Left Aligned TV Black"
                width={1000}
                height={1000}
                className="w-full"
              />
              <h4>{content.h4?.at(5)}</h4>
            </div>
            <Image
              src="/hackdavis/Arrow.svg"
              alt="arrow"
              width={1000}
              height={1000}
              className="w-10"
            />
            <div className="flex flex-col items-center gap-2 flex-grow w-[53%] self-end">
              <ImageWithModal
                src={getImageUrl(content.images, 'tvFinalGen.svg')}
                alt="TV Final Generation"
                width={1000}
                height={1000}
                className="w-full"
              />
              <h4>{content.h4?.at(6)}</h4>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
