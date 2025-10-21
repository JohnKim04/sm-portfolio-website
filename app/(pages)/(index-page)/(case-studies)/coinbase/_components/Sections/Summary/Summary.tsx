import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../_components/HeadingBody/HeadingBody';
import Image from 'next/image';

export default function Summary() {
  const responsibilities = [
    'Market research',
    'Visual Design',
    'Usability testing',
    'Developer handoff',
    'Specs & documentation',
  ].join('\n');

  const partners = [
    'Accessibility',
    'Content',
    'Motion',
    'Engineering',
    'UX Research',
  ].join('\n');

  return (
    <section className="flex flex-col gap-10">
      <RevealWrapper>
        <div className="grid grid-cols-3 grid-rows-2 gap-10">
          <HeadingBody h="My Role" p="Product Design Intern" />
          <HeadingBody h="Timeline" p="June - September 2025, 12 weeks" />
          <HeadingBody h="Team" p="Design Systems" />
          <div>
            <HeadingBody h="Tools" p="Figma, Figjam, Storybook" />
            <Image
              src="/coinbase/tools.webp"
              alt="Tools Used"
              width={200}
              height={40}
              className="mt-2 h-[40px] w-auto"
            />
          </div>
          <HeadingBody h="Responsibilities" p={responsibilities} />
          <HeadingBody h="Partners" p={partners} />
        </div>
        <div className="mt-20">
          <HeadingBody
            h="Context"
            p={`Coinbase is the largest cryptocurrency exchange serving over 100 million retail and institutional investors, businesses, and developers. Across Coinbase's suite of products, users can buy, sell, transfer, and store cryptocurrency.\n\nCoinbase Design System (CDS) is a cross-platform component library that has high adoption in every Coinbase product.`}
          />
        </div>
        <div className="mt-20">
          <HeadingBody
            h="Where I come in"
            p={`During the summer of 2025, I had the opportunity to intern on CDS. It was my first time doing systems design work, and I was able to become a more wholistic product designer with an expand skillset and a systems thinking approach. I collaborated with several XFN partners on three projects over the course of 12-weeks, two of which were shipped during my internship, and one which is on the roadmap to be shipped during Q4.`}
          />
        </div>
      </RevealWrapper>
    </section>
  );
}
