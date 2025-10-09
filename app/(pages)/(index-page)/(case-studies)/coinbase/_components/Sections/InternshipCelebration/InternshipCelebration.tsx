import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';
import { ImageWithModal } from '@/app/(pages)/_components/ImageModal/ImageModal';

export default function InternshipCelebration() {
  return (
    <section className="flex flex-col items-center gap-4">
      <RevealWrapper>
        <ImageWithModal
          src="/coinbase/internshipCelebration.webp"
          alt="Internship celebration"
          width={1000}
          height={600}
          className="rounded-lg"
        />
        <h4 className="text-center text-gray-500 mt-2 font-normal">
          Internship celebration with the team and intern friends :D
        </h4>
      </RevealWrapper>
    </section>
  );
}
