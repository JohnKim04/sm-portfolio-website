import Link from 'next/link';
import Image from 'next/image';

export default function HackDavisCaseStudyThumbnail() {
  const org = 'HackDavis 2024';
  const purpose = 'Contract Work';
  const desc = 'Empowering students to create for social good';
  const src = '/landing/caseStudies/hackdavis.webp';
  const alt = 'Hackdavis Image';
  const linkurl = '/hackdavis';

  return (
    <Link
      href={linkurl}
      className="flex flex-col w-[488px] h-[529px] mb-20 px-10 pt-10 bg-[#F9F9FB] rounded-3xl overflow-clip relative group hover:shadow-perimeter duration-500"
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
        className={`w-full h-auto absolute bottom-0 right-0 translate-y-64 scale-110 group-hover:scale-115 duration-500 origin-bottom`}
      ></Image>
    </Link>
  );
}
