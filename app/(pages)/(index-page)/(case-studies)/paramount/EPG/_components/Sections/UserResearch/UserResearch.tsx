import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../../_components/HeadingBody/HeadingBody';
import { contentProps } from '../../../../errorMessaging/page';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import { getImageUrl } from '@/app/_lib/getImageUrl';

export default function UserResearch(content: contentProps) {
  return (
    <section className="flex flex-col gap-20" id="Research">
      <RevealWrapper>
        <HeadingBody h={content.h3?.at(0)} p={content.body?.at(0)} />

        <ImageWithModal
          src={getImageUrl(content.images, 'stickyNotes.svg')}
          alt="Sticky Notes Overview"
          width={1000}
          height={1000}
          className="w-full"
        />
        <div className="flex flex-col gap-8">
          <h3 className="text-center">{content.h3?.at(1)}</h3>
          <div className="flex gap-8">
            <ImageWithModal
              src={getImageUrl(content.images, 'note1.svg')}
              alt="Note 1"
              width={1000}
              height={1000}
              className="w-full"
            />
            <ImageWithModal
              src={getImageUrl(content.images, 'note2.svg')}
              alt="Note 2"
              width={1000}
              height={1000}
              className="w-full"
            />
            <ImageWithModal
              src={getImageUrl(content.images, 'note3.svg')}
              alt="Note 3"
              width={1000}
              height={1000}
              className="w-full"
            />
            <ImageWithModal
              src={getImageUrl(content.images, 'note4.svg')}
              alt="Note 4"
              width={1000}
              height={1000}
              className="w-full"
            />
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
