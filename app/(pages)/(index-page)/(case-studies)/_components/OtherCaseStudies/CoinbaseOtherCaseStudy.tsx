import Link from 'next/link';
import Image from 'next/image';

export default function CoinbaseCaseStudyThumbnail() {
  const org = 'Coinbase';
  const purpose = 'Internshipt';
  const desc = 'Driving conversation and engagement amongst MLB fans';
  const src = '/coinbase/landingHeroImage/desktop10.webp';
  const alt = 'Reddit Project';
  const linkurl = '/reddit';

  return (
    <Link
      href={linkurl}
      className="flex flex-col w-[488px] h-[529px] py-12 mb-20 p-10 bg-[#F1F1F1] rounded-3xl border-[#CCC] border overflow-clip relative group hover:shadow-perimeter duration-500"
    >
      <div className="flex gap-2 w-full">
        <h4 className="font-spaceGrotesk text-black">{org}</h4>
        <h4 className="font-spaceGrotesk">{purpose}</h4>
      </div>
      <h3 className="pt-2 pb-20">{desc}</h3>
      <Image
        src={src}
        alt={alt}
        height={1000}
        width={1000}
        className={`w-full h-auto absolute right-0 bottom-0 group-hover:scale-105 duration-500 origin-bottom mt-auto`}
        unoptimized
      ></Image>
    </Link>
  );
}
