import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import HeadingBody from '../../../../_components/HeadingBody/HeadingBody';

export default function NextSteps() {
  return (
    <section>
      <RevealWrapper>
        <div>
          <HeadingBody
            h="Next steps"
            p="In addition to fixing some bugs with the lineup display, we identified a few areas of opportunity based on the feedback we received that will be implemented in future development cycles."
          />
          <p className="mt-4">
            The long-term vision is to scale this concept for other major league
            sports across the Reddit platform.
          </p>
        </div>
      </RevealWrapper>
    </section>
  );
}
