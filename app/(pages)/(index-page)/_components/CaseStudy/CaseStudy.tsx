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

  const isErrorMessaging = linkurl === '/paramount/errorMessaging';

  return (
    <Link
      href={linkurl}
      className={`flex flex-col relative items-center bg-[#EBEBEB] w-full rounded-3xl group ${isErrorMessaging ? 'pl-4 pr-6' : 'px-[10%]'}`}
    >
      <div className="flex gap-2 pt-12 pb-2 z-10">
        <h4 className="font-spaceGrotesk text-black">{org}</h4>
        <h4 className="font-spaceGrotesk">{purpose}</h4>
      </div>
      <h3 className="pb-20 w-[350px] text-center">{desc}</h3>
      {/* Images */}
      <div className="w-full h-[250px] relative">
        {isErrorMessaging ? (
          <Image
            src={src}
            alt={alt}
            width={200}
            height={150}
            className="object-contain hover:cursor-pointer z-10 group-hover:scale-105 duration-500 origin-bottom"
            unoptimized
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain hover:cursor-pointer z-10 group-hover:scale-105 duration-500 origin-bottom"
            unoptimized
          />
        )}
      </div>
    </Link>
  );
}
