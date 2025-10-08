// import { contentProps } from '../../../../errorMessaging/page';
import LoadingImage from '@/app/(pages)/_components/LoadingImage/LoadingImage';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import Image from 'next/image';
import ScrollArrow, {
  ScrollArrowProps,
} from '@/app/(pages)/(index-page)/_components/Landing/ScrollArrow';
// import { getImageUrl } from '@/app/_lib/getImageUrl';

export default function Landing() {
  const scrollArrowProps: ScrollArrowProps = {
    sectionId: 'Context',
  };

  return (
    <section
      className="flex flex-col h-[100vh] items-center justify-start pt-40 gap-6 relative"
      style={{
        backgroundImage: 'url(/reddit/heroImage.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ImageWithModal
        src="/reddit/redditLogo.webp"
        alt="Reddit Logo"
        width={100}
        height={100}
        className="h-[40px] w-auto z-10"
      />
      <h2 className="text-center text-white w-[800px]">
        Driving conversation and engagement amongst Major League Baseball fans
      </h2>
      <h4 className="text-white text-center">7 min read</h4>

      <div className="absolute top-[85vh] z-50">
        <ScrollArrow {...scrollArrowProps} />
      </div>
    </section>
  );
}
