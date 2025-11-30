import Link from 'next/link';
import Image from 'next/image';

export default function EMCaseStudyThumbnail() {
  const org = 'Paramount+';
  const purpose = 'Internship';
  const desc = 'Guiding users during video playback error';
  const src = '/landing/caseStudies/errorMessaging.png';
  const alt = 'Paramount Logo';
  const linkurl = '/paramount/errorMessaging';

  return (
    <Link
      href={linkurl}
      className="flex flex-col w-[488px] h-[529px] py-12 mb-20 p-10 bg-[#F9F9FB] rounded-3xl overflow-clip relative group hover:shadow-perimeter duration-500 pl-[5%] pr-0"
    >
      <div className="flex gap-2 w-full">
        <h4 className="font-spaceGrotesk text-black">{org}</h4>
        <h4 className="font-spaceGrotesk">{purpose}</h4>
      </div>
      <h3 className="pt-2 pb-20 relative z-20">{desc}</h3>
      <div className="absolute bottom-0 left-0 right-0 h-[320px] pl-[5%] pr-0 overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain translate-x-4 hover:cursor-pointer z-10 group-hover:scale-105 duration-500 origin-bottom"
          unoptimized
        />
      </div>
    </Link>
  );
}
