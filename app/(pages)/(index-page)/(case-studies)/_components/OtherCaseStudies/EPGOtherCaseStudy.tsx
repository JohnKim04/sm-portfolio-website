import Link from 'next/link';
import Image from 'next/image';

export default function EPGCaseStudyThumbnail() {
  const org = 'Paramount+';
  const purpose = 'Internship';
  const desc = 'Reimagining live sports streaming';
  const desktopImage = '/landing/caseStudies/desktopEPG.webp';
  const phoneImage = '/landing/caseStudies/mobileEPG.webp';

  const alt = 'Paramount Logo';
  const linkurl = '/paramount/EPG';

  return (
    <Link
      href={linkurl}
      className="flex flex-col w-[488px] h-[529px] py-12 mb-20 p-10 bg-[#F9F9FB] rounded-3xl overflow-clip relative group hover:shadow-perimeter duration-500"
    >
      <div className="flex gap-2 w-full">
        <h4 className="font-spaceGrotesk text-black">{org}</h4>
        <h4 className="font-spaceGrotesk">{purpose}</h4>
      </div>
      <h3 className="pt-2 pb-20">{desc}</h3>

      <div className="flex">
        <Image
          src={phoneImage}
          alt={alt}
          height={1000}
          width={1000}
          className={`w-auto h-[274px] absolute bottom-0 left-[10px] group-hover:scale-105 duration-500 origin-bottom z-10`}
          unoptimized
        ></Image>
        <Image
          src={desktopImage}
          alt={alt}
          height={1000}
          width={1000}
          className={`w-[130%] h-[320px] absolute bottom-0 right-0 translate-x-16 group-hover:scale-105 duration-500 origin-bottom z-0`}
          unoptimized
        ></Image>
      </div>
    </Link>
  );
}
