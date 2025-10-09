import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../_components/HeadingBody/HeadingBody';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function Summary() {
  const responsibilities = [
    'User & market research',
    'Visual design',
    'Prototyping',
    'Developer handoff',
  ].join('\n');

  const stakeholders = [
    { title: 'Sr. Media Business Dev. Manager', name: 'Mindy Brack' },
    {
      title: 'Head of Sports Content Partnerships',
      name: 'Christine Wixted',
    },
  ];

  return (
    <section className="flex flex-col gap-10" id="Context">
      <RevealWrapper>
        <div className="grid grid-cols-3 grid-rows-2 gap-10">
          <HeadingBody h="My Role" p="Contract Product Designer" />
          <HeadingBody h="Timeline" p="April - June 2025, 10 weeks" />
          <HeadingBody
            h="Team"
            p={`1 project manager, 5 engineers,
2 designers (incl. me)`}
          />
          <div>
            <HeadingBody h="Tools" p="Figma, Figjam, Notion, Devvit" />
            <ImageWithModal
              src="/reddit/tools.webp"
              alt="Tools Used"
              width={200}
              height={40}
              className="mt-2 h-[40px] w-auto"
            />
          </div>
          <HeadingBody h="Responsibilities" p={responsibilities} />
          <div className="flex flex-col gap-2">
            <h3>Stakeholders</h3>
            <div>
              {stakeholders.map((s, i) => (
                <p className="max-w-[80ch] mb-2" key={i}>
                  <span className="text-gray-500">{s.title}</span>
                  <br />
                  {s.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-20">
          <HeadingBody
            h="Context"
            p="Reddit is a social network where millions of users gather to connect in shared interest communities AKA subreddits."
          />
          <div className="grid grid-cols-3 gap-10 mt-10">
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold mb-2">1K+</span>
              <p className="text-center">Active Communities in Sports Category</p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold mb-2">249M+</span>
              <p className="text-center">
                Monthly Posts, Votes & Comments in Sports Communities
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold mb-2">+26%</span>
              <p className="text-center">YoY Growth of Sports Interest Groups</p>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <HeadingBody
            h="The Opportunity"
            p="Sports are one of Reddit's most popular and fastest growing interest groups. How might we increase conversation and engagement amongst Major League Baseball fans?"
          />
        </div>
        <div className="mt-20">
          <HeadingBody
            h="The Solution"
            p="A live scoreboard that provides real-time updates and important stats for Major League Baseball's biggest fans. Users can stay in the loop without navigating away from community discussions."
          />
        </div>
      </RevealWrapper>
    </section>
  );
}
