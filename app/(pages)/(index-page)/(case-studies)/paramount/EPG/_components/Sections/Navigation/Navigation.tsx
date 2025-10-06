import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../../errorMessaging/page';
import Image from 'next/image';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import { getImageUrl } from '@/app/_lib/getImageUrl';

export default function Navigation(content: contentProps) {
  return (
    <section className="flex flex-col gap-10">
      <RevealWrapper>
        <div className="flex flex-col gap-2">
          <h4>{content.h4?.at(0)}</h4>
          <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />
        </div>

        <div className="flex flex-col lg:flex-row w-full gap-8 items-center justify-center lg:justify-between">
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full justify-center">
              <ImageWithModal
                src={getImageUrl(content.images, 'navIteration1.webp')}
                alt="Navigation Design 1"
                width={1000}
                height={1000}
                className="w-full max-w-[230px] sm:w-[260px]"
              />
              <ImageWithModal
                src={getImageUrl(content.images, 'navIteration2.webp')}
                alt="Navigation Design 2"
                width={1000}
                height={1000}
                className="w-full max-w-[230px] sm:w-[260px]"
              />
            </div>
            <h4 className="text-center">{content.h4?.at(1)}</h4>
          </div>
          <Image
            src="/hackdavis/Arrow.svg"
            alt="arrow"
            width={1000}
            height={1000}
            className="w-8 sm:w-12 rotate-90 lg:rotate-0 my-4 lg:my-0"
          />
          <div className="flex flex-col items-center gap-2">
            <ImageWithModal
              src={getImageUrl(content.images, 'navIteration3.webp')}
              alt="Navigation Final Design"
              width={1000}
              height={1000}
              className="w-full max-w-[300px] sm:w-[300px]"
            />
            <h4 className="text-center">{content.h4?.at(2)}</h4>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
