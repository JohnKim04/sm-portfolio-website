import LoadingImage from '@/app/(pages)/_components/LoadingImage/LoadingImage';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';
import ScrollArrow, {
  ScrollArrowProps,
} from '@/app/(pages)/(index-page)/_components/Landing/ScrollArrow';

export default function Landing() {
  const scrollArrowProps: ScrollArrowProps = {
    sectionId: 'Overview',
  };

  return (
    <section
      className="h-[100vh] overflow-clip text-white flex flex-col justify-start items-center gap-6 -mx-[40%] -mt-[80px] pt-[calc(80px+2.5rem)]"
      style={{
            backgroundImage: 'url(/reddit/heroImage.webp)',
        backgroundSize: '100% auto',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
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
      <div className="w-[1120px] -mb-[100px] border border-white/10 rounded-[16px] overflow-hidden">
        <LoadingImage
          src="/reddit/finalDesigns/desktop1.webp"
          width={1000}
          height={1000}
          alt="Reddit Desktop Mockup"
          className="w-full h-auto"
          style={{
            transform: 'scale(1.015)',
            transformOrigin: 'left center',
            marginLeft: '-1.5px',
            marginTop: '-1.5px',
            marginBottom: '-1.5px',
            marginRight: '-1.5px'
          }}
        />
      </div>n
      <div className="absolute top-[85vh] z-50">
        <ScrollArrow {...scrollArrowProps} />
      </div>
    </section>
  );
}
