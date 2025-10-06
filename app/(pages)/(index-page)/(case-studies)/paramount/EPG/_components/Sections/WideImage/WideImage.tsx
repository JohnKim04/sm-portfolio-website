import { contentProps } from '../../../../errorMessaging/page';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import { getImageUrl } from '@/app/_lib/getImageUrl';

export default function WideImage(content: contentProps) {
  return (
    <section
      className="flex flex-col items-center gap-10 pt-[130px] -mx-[40%]"
      style={{
        backgroundImage:
          'radial-gradient(67.21% 51.52% at 67.71% 57.25%, #0064FF 0%, #000 73.44%)',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex justify-center">
               <ImageWithModal
                 src={getImageUrl(content.images, 'mobile1.webp')}
                 alt="Wide Image 1"
                 width={1000}
                 height={1000}
                 className="w-[363px] h-[600px]"
               />
               <ImageWithModal
                 src={getImageUrl(content.images, 'mobile2.webp')}
                 alt="Wide Image 2"
                 width={1000}
                 height={1000}
                 className="w-[363px] h-[600px]"
               />
               <ImageWithModal
                 src={getImageUrl(content.images, 'mobile3.webp')}
                 alt="Wide Image 3"
                 width={1000}
                 height={1000}
                 className="w-[363px] h-[600px]"
               />
      </div>
    </section>
  );
}
