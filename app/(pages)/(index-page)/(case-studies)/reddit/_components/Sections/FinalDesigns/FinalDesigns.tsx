'use client';

import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ToggleButton } from '@/app/(pages)/(index-page)/(case-studies)/hackdavis/_components/Sections/FinalSolution/FinalSolution';
import { useState } from 'react';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

type ImageProps = {
  src: string;
  caption: string;
};

export default function FinalDesigns() {
  const [isMobile, setIsMobile] = useState(true);

  const toggleButtons = [
    {
      label: 'Mobile',
      isActive: isMobile,
      onClick: () => setIsMobile(true),
    },
    {
      label: 'Desktop',
      isActive: !isMobile,
      onClick: () => setIsMobile(false),
    },
  ];

  const preGameImages: ImageProps[] = [
    { src: '/reddit/finalDesigns/mobile1.webp', caption: 'Summary' },
    { src: '/reddit/finalDesigns/mobile2.webp', caption: 'Lineups' },
  ];

  const desktopPreGameImages: ImageProps[] = [
    { src: '/reddit/finalDesigns/desktop1.webp', caption: 'Summary' },
    { src: '/reddit/finalDesigns/desktop2.webp', caption: 'Lineups' },
  ];

  const liveGameImages: ImageProps[] = [
    { src: '/reddit/finalDesigns/mobile3.webp', caption: 'Summary' },
    { src: '/reddit/finalDesigns/mobile4.webp', caption: 'Play by play' },
    { src: '/reddit/finalDesigns/mobile5.webp', caption: 'Box score' },
    { src: '/reddit/finalDesigns/mobile6.webp', caption: 'Batting stats' },
  ];

  const desktopLiveGameImages: ImageProps[] = [
    { src: '/reddit/finalDesigns/desktop3.webp', caption: 'Summary' },
    { src: '/reddit/finalDesigns/desktop4.webp', caption: 'Play by play' },
    { src: '/reddit/finalDesigns/desktop5.webp', caption: 'Box score' },
    { src: '/reddit/finalDesigns/desktop6.webp', caption: 'Batting stats' },
  ];

  const postGameImages: ImageProps[] = [
    { src: '/reddit/finalDesigns/mobile7.webp', caption: 'Summary' },
    { src: '/reddit/finalDesigns/mobile8.webp', caption: 'Play by play' },
    { src: '/reddit/finalDesigns/mobile9.webp', caption: 'Box score' },
    { src: '/reddit/finalDesigns/mobile10.webp', caption: 'Batting stats' },
  ];

  const desktopPostGameImages: ImageProps[] = [
    { src: '/reddit/finalDesigns/desktop7.webp', caption: 'Summary' },
    { src: '/reddit/finalDesigns/desktop8.webp', caption: 'Play by play' },
    { src: '/reddit/finalDesigns/desktop9.webp', caption: 'Box score' },
    { src: '/reddit/finalDesigns/desktop10.webp', caption: 'Batting stats' },
  ];

  const renderImageGroup = (title: string, images: ImageProps[]) => (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="text-center">
        <h4 className="text-gray-500 font-normal">
          {isMobile ? 'Mobile' : 'Desktop'}
        </h4>
        <h3>{title}</h3>
      </div>
      <div className="flex justify-center gap-4 flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              !isMobile ? 'w-[48%]' : ''
            }`}
          >
            <ImageWithModal
              src={image.src}
              alt={image.caption}
              width={isMobile ? 300 : 1600}
              height={isMobile ? 600 : 900}
              className={!isMobile ? 'w-full h-auto' : ''}
            />
            <h4 className="text-gray-500 font-normal">{image.caption}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-gray-100 py-20 px-case-study">
      <RevealWrapper>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold">Final Designs</h2>
          <div className="flex flex-row items-start gap-2">
            {toggleButtons.map((button, index) => (
              <ToggleButton
                key={index}
                label={button.label}
                onClick={button.onClick}
                isActive={button.isActive}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-24 mt-12 items-center">
          {isMobile ? (
            <>
              {renderImageGroup('Pre-Game', preGameImages)}
              {renderImageGroup('Live Game', liveGameImages)}
              {renderImageGroup('Post-Game', postGameImages)}
            </>
          ) : (
            <>
              {renderImageGroup('Pre-Game', desktopPreGameImages)}
              {renderImageGroup('Live Game', desktopLiveGameImages)}
              {renderImageGroup('Post-Game', desktopPostGameImages)}
            </>
          )}
        </div>
      </RevealWrapper>
    </section>
  );
}
