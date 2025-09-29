import FormattedP from '@/app/(pages)/_components/FormattedP/FormattedP';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../page';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import { getImageUrl } from '../../../_utils/getImageUrl';

export default function BreakDown(content: contentProps) {
  return (
    <section className="flex flex-col gap-20" id="Research">
      <RevealWrapper>
        <div className="flex flex-col gap-10">
          <h3>{content.h3?.at(0)}</h3>
          <FormattedP text={content.body?.at(0)} />
          <div className="flex w-full gap-8">
            <div className="flex flex-col items-center gap-2 flex-grow">
              <ImageWithModal
                src={getImageUrl(content.images, 'currWebMessage.svg')}
                alt="Current Web Message"
                width={1000}
                height={1000}
                className="h-full"
              />
              <h4>{content.h4?.at(0)}</h4>
            </div>
            <div className="flex flex-col items-center gap-2 flex-grow">
              <ImageWithModal
                src={getImageUrl(content.images, 'currTVMessage.svg')}
                alt="Current TV Message"
                width={1000}
                height={1000}
                className="h-full"
              />
              <h4>{content.h4?.at(1)}</h4>
            </div>
          </div>
        </div>

        <HeadingBody h={content.h3?.at(1)} p={content.body?.at(1)} />

        <HeadingBody h={content.h3?.at(2)} p={content.body?.at(2)} />

        <div className="flex w-full gap-8">
          <div className="flex flex-col items-center gap-2 flex-grow">
            <ImageWithModal
              src={getImageUrl(content.images, 'peacockMessage.svg')}
              alt="Peacock Error Message"
              width={1000}
              height={1000}
              className="h-full"
            />
            <h4>{content.h4?.at(2)}</h4>
          </div>
          <div className="flex flex-col items-center gap-2 flex-grow">
            <ImageWithModal
              src={getImageUrl(content.images, 'huluMessage.svg')}
              alt="Hulu Error Message"
              width={1000}
              height={1000}
              className="h-full"
            />
            <h4>{content.h4?.at(3)}</h4>
          </div>
          <div className="flex flex-col items-center gap-2 flex-grow">
            <ImageWithModal
              src={getImageUrl(content.images, 'hboMessage.svg')}
              alt="HBO Max Error Message"
              width={1000}
              height={1000}
              className="h-full"
            />
            <h4>{content.h4?.at(4)}</h4>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <HeadingBody h={content.h3?.at(3)} p={content.body?.at(3)} />

          <div className="flex w-full gap-8">
            <div className="flex flex-col items-center gap-2 flex-grow">
              <ImageWithModal
                src={getImageUrl(content.images, 'paramountResponse.svg')}
                alt="Paramount Response"
                width={1000}
                height={1000}
                className="h-full"
              />
              <h4>{content.h4?.at(5)}</h4>
            </div>
            <div className="flex flex-col items-center gap-2 flex-grow">
              <ImageWithModal
                src={getImageUrl(content.images, 'peacockResponse.svg')}
                alt="Peacock Response"
                width={1000}
                height={1000}
                className="h-full"
              />
              <h4>{content.h4?.at(6)}</h4>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
