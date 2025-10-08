'use client';
import Loader from '@/app/(pages)/_components/Loader/Loader';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import CaseStudy, { CaseStudyProps } from './CaseStudy';

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
      <h3 className="pb-20 w-[350px] text-center">{desc}</h3>
      <div className="w-full h-[250px] relative overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover hover:cursor-pointer z-10 group-hover:scale-105 duration-500 origin-bottom"
          unoptimized
        />
      </div>
    </Link>
  );
}
