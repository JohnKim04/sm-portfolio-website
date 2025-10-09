import LoadingImage from '@/app/(pages)/_components/LoadingImage/LoadingImage';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import Image from 'next/image';
import ScrollArrow, {
  ScrollArrowProps,
} from '@/app/(pages)/(index-page)/_components/Landing/ScrollArrow';

export default function Landing() {
  const scrollArrowProps: ScrollArrowProps = {
    sectionId: 'Context',
  };

  return (
    <section
      className="flex flex-col h-[100vh] items-center justify-start pt-40 gap-5 relative"
      style={{
        backgroundImage: 'url(/coinbase/heroImage.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ImageWithModal
        src="/coinbase/coinbaseLogo.webp"
        alt="Coinbase Logo"
        width={100}
        height={100}
        className="h-[30px] w-auto z-10 mt-[-2.5rem]"
      />
      <h2 className="text-center text-white w-[1000px]">
        Creating world class app experiences through high craft, unified, and
        efficient design systems
      </h2>
      <h4 className="text-white text-center">7 min read</h4>

      <div className="absolute top-[85vh] z-50">
        <ScrollArrow {...scrollArrowProps} />
      </div>
    </section>
  );
}