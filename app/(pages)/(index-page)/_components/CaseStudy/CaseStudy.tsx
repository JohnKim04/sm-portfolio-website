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
    <div className="flex flex-col items-start w-full">
      <Link
        href={linkurl}
        className="flex flex-col relative px-[5%] items-center bg-[#F9F9FB] w-full rounded-xl group"
      >
        {/* Images */}
        <div className={`w-full aspect-[8/7] relative ${linkurl === '/hackdavis' || linkurl === '/reddit' ? 'overflow-hidden' : ''}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className={`${linkurl === '/hackdavis' ? 'object-cover object-top translate-y-32' : linkurl === '/reddit' ? 'object-contain object-center scale-90' : linkurl === '/coinbase' ? 'object-contain object-center' : linkurl === '/paramount/errorMessaging' ? 'object-contain translate-x-4' : linkurl === '/paramount/EPG' ? 'object-contain translate-y-4' : 'object-contain'} hover:cursor-pointer z-10 ${linkurl === '/reddit' ? 'group-hover:scale-95' : 'group-hover:scale-105'} duration-500 origin-bottom`}
            style={linkurl === '/hackdavis' ? { 
              transform: 'translateY(128px) scale(1.2)',
              transition: 'transform 0.5s ease'
            } : {}}
            unoptimized
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
