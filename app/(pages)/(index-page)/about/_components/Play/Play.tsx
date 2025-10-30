import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { RevealWrapper } from '../../../_components/Reveal/RevealWrapper';
import FunText from './FunText';

export default function Play() {
  return (
    <section
      className="flex flex-col pl-[15%] pr-[15%] gap-[192px]"
      id="dark-mode"
    >
      <RevealWrapper>
        <FunText />
        <BookShelf />
        <CameraRoll />
      </RevealWrapper>
    </section>
  );
}

function BookShelf() {
  return (
    <div className="flex flex-col items-center gap-10 w-[70vw]">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl tracking-[0.72px]">On my bookshelf</h3>
        <p>
          Since 2021, I've set a goal to read 52 books a year. Here are some of
          the standouts:
        </p>
      </div>
      <div className="flex relative h-[60vh] justify-center pt-10 group gap-8">
        <Image
          src="/about/books/book1.png"
          alt="book 1"
          width={1000}
          height={1000}
          className="w-auto h-[257px] rounded-lg z-[5] transition-transform duration-500 translate-x-[95%] -rotate-[18deg] group-hover:translate-x-0 group-hover:rotate-0"
        />
        <Image
          src="/about/books/book2.png"
          alt="book 2"
          width={1000}
          height={1000}
          className="w-auto h-[257px] rounded-lg z-[4] transition-transform duration-500 translate-x-[40%] -rotate-[10deg] group-hover:translate-x-0 group-hover:rotate-0"
        />
        <Image
          src="/about/books/book3.png"
          alt="book 3"
          width={1000}
          height={1000}
          className="w-auto h-[257px] rounded-lg z-[3] transition-transform duration-500 -rotate-[2deg] group-hover:translate-x-0 group-hover:rotate-0"
        />
        <Image
          src="/about/books/book4.png"
          alt="book 4"
          width={1000}
          height={1000}
          className="w-auto h-[257px] rounded-lg z-[2] transition-transform duration-500 -translate-x-[50%] rotate-[5deg] group-hover:translate-x-0 group-hover:rotate-0"
        />
        <Image
          src="/about/books/book5.png"
          alt="book 5"
          width={1000}
          height={1000}
          className="w-auto h-[257px] rounded-lg z-[1] transition-transform duration-500 -translate-x-[85%] rotate-[13deg] group-hover:translate-x-0 group-hover:rotate-0"
        />
      </div>
    </div>
  );
}

function CameraRoll() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Define captions for each photo - update this if you add more photos
  const photoCaptions: Record<number, string> = {
    0: 'Half Moon Bay, California',
    1: 'Copenhagen, Denmark',
    2: 'Copenhagen, Denmark',
    3: 'Stockholm, Sweden',
    4: 'Humlebaek, Denmark',
    5: 'Pebble Beach, California',
    6: 'Half Moon Bay, California',
    7: 'Mount Tam, California',
    8: 'Santa Barbara, California',
    9: 'Kamakura, Japan',
    10: 'Hiroshima, Japan',
    11: 'Arashiyama, Japan',
  };

  // Get the total number of photos based on the highest index in photoCaptions
  const totalPhotos = Math.max(...Object.keys(photoCaptions).map(Number)) + 1;

  // Generate carousel photos array in correct numeric order (0, 1, 2, ...)
  const carouselPhotos = Array.from({ length: totalPhotos }, (_, i) => ({
    imgUrl: `/about/photoCarousel/photo${i}.png`,
    imgCaption: photoCaptions[i] || `Photo ${i}`,
  }));

  // Duplicate photos for seamless infinite scrolling
  const duplicatedPhotos = [...carouselPhotos, ...carouselPhotos];

  // Preload all images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = carouselPhotos.map((photo) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Resolve even on error to not block
          img.src = photo.imgUrl;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    preloadImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [emblaRef, _] = useEmblaCarousel(
    { 
      loop: true,
      watchDrag: imagesLoaded,
    },
    [
      AutoScroll({
        playOnInit: imagesLoaded,
        speed: 1.5,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        startDelay: 0,
      }),
    ]
  );

  return (
    <div className="flex flex-col items-center gap-10 pb-[80px] -mt-[220px]">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-4xl tracking-[0.72px]">From my camera roll</h3>
        <p>
          Capturing the beauty of the world through film and practicing the art
          of noticing
        </p>
      </div>

      <div className="overflow-hidden w-[100vw]" ref={emblaRef}>
        <div className="flex gap-0">
          {duplicatedPhotos.map((slide, index) => (
            <CarouselSlide
              key={index}
              imgUrl={slide.imgUrl}
              imgCaption={slide.imgCaption}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type CarouselSlideProps = {
  imgUrl: string;
  imgCaption: string;
};

function CarouselSlide({ imgUrl, imgCaption }: CarouselSlideProps) {
  return (
    <div className="flex-none ml-10 first:ml-0 group relative shrink-0">
      <Image
        src={imgUrl}
        alt="photography image"
        width={1000}
        height={1000}
        className="h-[360px] w-auto rounded-lg z-20 block"
        unoptimized
        loading="eager"
        priority={false}
      />
      <h4 className="text-center font-spaceGrotesk pt-2 transition-all opacity-0 -translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 z-10 relative">
        {imgCaption}
      </h4>
    </div>
  );
}
