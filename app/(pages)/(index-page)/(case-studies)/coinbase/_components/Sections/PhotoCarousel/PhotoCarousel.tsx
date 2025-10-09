'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';

export default function PhotoCarousel() {
  const [emblaRef, _] = useEmblaCarousel({ loop: true }, [
    AutoScroll({
      playOnInit: true,
      speed: 2,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      startDelay: 0,
    }),
  ]);

  const carouselPhotos = [
    {
      imgUrl: '/coinbase/1carousel.webp',
      imgCaption: 'First day of work!',
    },
    {
      imgUrl: '/coinbase/2carousel.webp',
      imgCaption: 'Hiking at Lands End Trail',
    },
    {
      imgUrl: '/coinbase/3carousel.webp',
      imgCaption: '@ Salesforce Tower',
    },
    {
      imgUrl: '/coinbase/4carousel.webp',
      imgCaption: 'Lit intern cruise!',
    },
    {
      imgUrl: '/coinbase/5carousel.webp',
      imgCaption: 'Dim sum with Design + Research team',
    },
    {
      imgUrl: '/coinbase/6carousel.webp',
      imgCaption: 'Giants game',
    },
  ];

  const duplicatedPhotos = [...carouselPhotos, ...carouselPhotos];

  return (
    <section>
      <RevealWrapper>
        <div className="flex flex-col items-center gap-10 pt-10">
          <div className="overflow-hidden w-[100vw]" ref={emblaRef}>
            <div className="flex">
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
      </RevealWrapper>
    </section>
  );
}

type CarouselSlideProps = {
  imgUrl: string;
  imgCaption: string;
};

function CarouselSlide({ imgUrl, imgCaption }: CarouselSlideProps) {
  return (
    <div className="ml-10 flex-none group relative">
      <Image
        src={imgUrl}
        alt="photography image"
        width={1000}
        height={1000}
        className="w-auto h-[360px] z-20 relative"
      />
      <h4 className="text-center text-wrap font-spaceGrotesk pt-2 transition-all opacity-0 -translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 z-10 relative">
        {imgCaption}
      </h4>
    </div>
  );
}
