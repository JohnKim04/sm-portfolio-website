import LoadingImage from '@/app/(pages)/_components/LoadingImage/LoadingImage';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import Image from 'next/image';
import ScrollArrow, {
  ScrollArrowProps,
} from '@/app/(pages)/(index-page)/_components/Landing/ScrollArrow';

export default function Landing() {
  const scrollArrowProps: ScrollArrowProps = {
    sectionId: 'Overview',
  };

  return (
    <section
      className="flex flex-col h-[100vh] items-center justify-start gap-5 relative mx-[-40%] -mt-[80px] pt-[calc(80px+2.5rem)] overflow-hidden"
      style={{
        backgroundColor: '#0052FF',
      }}
    >
      <ImageWithModal
        src="/coinbase/coinbaseLogo.webp"
        alt="Coinbase Logo"
        width={100}
        height={100}
        className="h-[30px] w-auto z-10"
      />
      <h2 className="text-center text-white w-[1000px]">
        Crafting unified and efficient design systems
      </h2>
      <h4 className="text-white text-center">3 min read</h4>
      <LoadingImage
        src="/coinbase/landingHeroImage.webp"
        width={1000}
        height={1000}
        alt="Coinbase Desktop Mockup"
        className="w-[1120px] -mb-[100px]"
      />
      <div className="absolute top-[85vh] z-50">
        <ScrollArrow {...scrollArrowProps} />
      </div>
    </section>
  );
}