import Image from 'next/image';
import Link from 'next/link';

export type CaseStudyProps = {
  org: string;
  purpose: string;
  desc: string;
  /** Desktop image (required) */
  src: string;
  /** Optional mobile image to display to the right */
  srcMobile?: string;
  alt: string;
  linkurl: string;
  flip?: boolean;
};

export default function CaseStudy(props: CaseStudyProps) {
  const { org, purpose, desc, src, srcMobile, alt, linkurl } = props;

  return (
    <Link
      href={linkurl}
      className="flex flex-col relative px-[10%] items-center bg-[#EBEBEB] w-full rounded-3xl group"
    >
      <div className="flex gap-2 pt-12 pb-2 z-10">
        <h4 className="font-spaceGrotesk text-black">{org}</h4>
        <h4 className="font-spaceGrotesk">{purpose}</h4>
      </div>
      <h3 className="pb-20 w-[350px] text-center">{desc}</h3>
      {/* Images */}
      {srcMobile ? (
        <div className="relative w-full pb-10">
          {/* Desktop */}
          <Image
            src={src}
            alt={alt}
            height={1000}
            width={1000}
            className="w-full h-auto hover:cursor-pointer z-0 group-hover:scale-105 duration-500 origin-bottom"
            unoptimized
          />
          {/* Mobile overlay */}
          <Image
            src={srcMobile}
            alt={`${alt} mobile`}
            height={1000}
            width={1000}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-1/3 min-w-[180px] h-auto hover:cursor-pointer z-10 group-hover:scale-105 duration-500 origin-bottom"
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
          unoptimized
        />
      )}
    </Link>
  );
}
