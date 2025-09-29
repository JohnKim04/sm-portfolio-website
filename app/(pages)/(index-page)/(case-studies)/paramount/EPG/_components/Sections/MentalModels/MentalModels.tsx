import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../../errorMessaging/page';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import Image from 'next/image';
import { getImageUrl } from '@/app/_lib/getImageUrl';

export default function MentalModels(content: contentProps) {
  return (
    <section className="flex flex-col gap-20" id="Iterations">
      <RevealWrapper>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h4>{content.h4?.at(0)}</h4>
            <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />
          </div>

          <div className="flex justify-between gap-8">
            <div className="flex flex-col items-center gap-2">
              <ImageWithModal
                src={getImageUrl(content.images, 'tubiGuide.svg')}
                alt="Tubi TV Guide"
                width={1000}
                height={1000}
                className="w-full h-[618px]"
              />
              <h4>{content.h4?.at(1)}</h4>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ImageWithModal
                src={getImageUrl(content.images, 'pluteGuide.svg')}
                alt="Pluto TV Guide"
                width={1000}
                height={1000}
                className="w-full h-[618px]"
              />
              <h4>{content.h4?.at(2)}</h4>
            </div>
            <div className="flex flex-col items-center gap-2">
              <ImageWithModal
                src={getImageUrl(content.images, 'huluGuide.svg')}
                alt="Hulu TV Guide"
                width={1000}
                height={1000}
                className="w-full h-[618px]"
              />
              <h4>{content.h4?.at(3)}</h4>
            </div>
          </div>
        </div>
        <HeadingBody h={content.h3?.at(1)} p={content.body?.at(1)} />

        <HeadingBody h={content.h3?.at(2)} p={content.body?.at(2)} />

        <HeadingBody h={content.h3?.at(3)} p={content.body?.at(3)} />

        <div className="flex w-full gap-8 items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-8 w-full">
              <ImageWithModal
                src={getImageUrl(content.images, 'sports1.svg')}
                alt="Sports Design 1"
                width={1000}
                height={1000}
                className="w-[260px]"
              />
              <ImageWithModal
                src={getImageUrl(content.images, 'sports2.svg')}
                alt="Sports Design 2"
                width={1000}
                height={1000}
                className="w-[260px]"
              />
            </div>
            <h4>{content.h4?.at(4)}</h4>
          </div>
          <Image
            src="/hackdavis/Arrow.svg"
            alt="arrow"
            width={1000}
            height={1000}
            className="w-12"
          />
          <div className="flex flex-col items-center gap-2">
            <ImageWithModal
              src={getImageUrl(content.images, 'sportsFinal.svg')}
              alt="Sports Final Design"
              width={1000}
              height={1000}
              className="w-[337px]"
            />
            <h4>{content.h4?.at(5)}</h4>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
