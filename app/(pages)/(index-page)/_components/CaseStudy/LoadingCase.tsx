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
    <div className="flex flex-col items-start w-full">
      <Link
        href={linkurl}
        className="flex flex-col relative px-[5%] items-center bg-[#F9F9FB] w-full rounded-xl group"
      >
        {isLoading && <Loader />}
        <div className="w-full aspect-[8/7] relative overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain object-bottom translate-y-16 hover:cursor-pointer z-10 group-hover:scale-105 duration-500 origin-bottom"
            unoptimized
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </Link>
      <div className="flex gap-2 pt-4 pb-2 self-start">
        <h4 className="font-spaceGrotesk text-black text-sm">{org}</h4>
        <h4 className="font-spaceGrotesk text-sm">{purpose}</h4>
      </div>
      <h3 className="text-left pb-10 font-medium" style={{ fontSize: '19px' }}>{desc}</h3>
    </div>
  );
}
