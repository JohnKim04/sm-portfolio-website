import Link from 'next/link';
import Image from 'next/image';

export default function CoinbaseCaseStudyThumbnail() {
  const org = 'Coinbase';
  const purpose = 'Internship';
  const desc = 'Crafting unified and efficient design systems';
  const src = '/coinbase/coinbaseTile.webp';
  const alt = 'Coinbase Project';
  const linkurl = '/coinbase';

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
      <Image
        src={src}
        alt={alt}
        height={1000}
        width={1000}
        className={`w-full h-auto absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-y-12 group-hover:scale-105 duration-500 origin-center`}
        unoptimized
      ></Image>
    </Link>
  );
}
