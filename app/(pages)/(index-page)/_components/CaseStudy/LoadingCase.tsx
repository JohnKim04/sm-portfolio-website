'use client';
import Loader from '@/app/(pages)/_components/Loader/Loader';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export type CaseStudyProps = {
  org: string;
  purpose: string;
  desc: string;
  src: string;
  srcMobile?: string;
  alt: string;
  linkurl: string;
};

export default function LoadingCaseStudy(props: CaseStudyProps) {
  const { org, purpose, desc, src, srcMobile, alt, linkurl } = props;
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Link
      href={linkurl}
      className="flex flex-col relative px-[10%] items-center bg-[#EBEBEB] w-full rounded-3xl group"
    >
      {isLoading && <Loader />}
      <div className="flex gap-2 pt-12 pb-2 z-10">
        <h4 className="font-spaceGrotesk text-black">{org}</h4>
        <h4 className="font-spaceGrotesk">{purpose}</h4>
      </div>
      <h3 className="pb-20  w-[350px] text-center">{desc}</h3>
      {srcMobile ? (
        <div className="relative w-full pb-10">
          <Image
            src={src}
            alt={alt}
            height={1000}
            width={1000}
            className="w-full h-auto hover:cursor-pointer z-0 group-hover:scale-105 duration-500 origin-bottom"
            onLoad={() => setIsLoading(false)}
            loading="eager"
            unoptimized
          />
          <Image
            src={srcMobile}
            alt={`${alt} mobile`}
            height={1000}
            width={1000}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-1/3 min-w-[180px] h-auto hover:cursor-pointer z-10 group-hover:scale-105 duration-500 origin-bottom"
            onLoad={() => setIsLoading(false)}
            loading="eager"
            unoptimized
          />
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          height={1000}
          width={1000}
          className="w-full h-auto hover:cursor-pointer z-10 group-hover:scale-105 duration-500 origin-bottom"
          onLoad={() => setIsLoading(false)}
          loading="eager"
          unoptimized
        />
      )}
    </Link>
  );
}
