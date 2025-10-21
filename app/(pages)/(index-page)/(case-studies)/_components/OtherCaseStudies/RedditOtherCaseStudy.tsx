import Link from 'next/link';
import Image from 'next/image';

export default function RedditCaseStudyThumbnail() {
  const org = 'Reddit';
  const purpose = 'Contract Work';
  const desc = 'Driving conversation amongst baseball fans';
  const src = '/reddit/redditTile.webp';
  const alt = 'Reddit Project';
  const linkurl = '/reddit';

  return (
    <Link
      href={linkurl}
      className="flex flex-col w-[488px] h-[529px] py-12 mb-20 p-12 bg-[#F9F9FB] rounded-3xl overflow-clip relative group hover:shadow-perimeter duration-500"
    >
      <div className="flex gap-2 w-full">
        <h4 className="font-spaceGrotesk text-black">{org}</h4>
        <h4 className="font-spaceGrotesk">{purpose}</h4>
      </div>
      <h3 className="pt-2 pb-20">{desc}</h3>
      <div className="absolute bottom-0 left-0 right-0 p-12 translate-y-16">
        <Image
          src={src}
          alt={alt}
          height={1000}
          width={1000}
          className={`w-full h-auto group-hover:scale-105 duration-500 origin-bottom`}
          unoptimized
        ></Image>
      </div>
    </Link>
  );
}
