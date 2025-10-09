import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../_components/HeadingBody/HeadingBody';

export default function Reflection() {
  const lessons = [
    {
      heading: 'Become a master of your tools',
      body: 'I leveled up my Figma game and learned about the ins and outs of building components from staging branches to nested props to string components. I collaborated with my teammates to audit and maintain lean component builds within our libraries. I explored new Al features and how I could leverage them to make my work processes more efficient.',
    },
    {
      heading: 'Think like a systems designer',
      body: 'I learned to think about how components scale across multiple experiences and products. Designing components for multiple teams with different needs encouraged me to consider use cases and unique edge cases. I balanced designing for the end user of a consumer facing product and the product designers building those experiences.',
    },
    {
      heading: 'Adapt and ship quickly',
      body: 'In the beginning stages of my first project, the timeline was expedited significantly, and I made adjustments to my initial project brief in order to quickly adapt. I shipped my projects incrementally and communicated frequently with engineering to meet new deadlines. This was my first time working in such a fast-paced environment, and I enjoyed the excitement of it!',
    },
  ];

  return (
    <section>
      <RevealWrapper>
        <h4 className="text-gray-500 font-normal">
          Reflection: Lessons Learned
        </h4>
        <div className="flex flex-col gap-10 mt-4">
          {lessons.map((lesson, index) => (
            <HeadingBody h={lesson.heading} p={lesson.body} key={index} />
          ))}
        </div>
      </RevealWrapper>
    </section>
  );
}
