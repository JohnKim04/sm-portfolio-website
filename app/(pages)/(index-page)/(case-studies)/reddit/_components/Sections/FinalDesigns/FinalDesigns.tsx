import { RevealWrapper } from '@/app/(pages)/(index-page)/_components/Reveal/RevealWrapper';

export default function FinalDesigns() {
  return (
    <section className="bg-gray-100 py-20 px-case-study">
      <RevealWrapper>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-4xl font-bold">Final Designs</h2>
          <a
            href="https://www.reddit.com/r/tampabayrays/comments/1m3we6c/mlb_game_scorecard_july_19th_2025_orioles_rays/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-[#FF4500] border border-[#FF4500] px-6 py-2 rounded-lg font-bold hover:bg-[#fff5f2] transition-colors">
              Launch reddit.com
            </button>
          </a>
        </div>
        <div className="flex flex-col gap-12 mt-12 items-center">
          <div className="flex flex-col gap-4 w-full max-w-5xl">
            <p className="text-gray-500">Desktop</p>
            <h3>Live Scoreboard</h3>
            <div className="w-full">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/8pPxVQRPqqs"
                title="Desktop Final Design"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-5xl">
            <p className="text-gray-500">Mobile</p>
            <h3>Live Scoreboard</h3>
            <div className="w-full">
              <iframe
                className="w-full aspect-video rounded-lg"
                src="https://www.youtube.com/embed/8pPxVQRPqqs"
                title="Mobile Final Design"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </RevealWrapper>
    </section>
  );
}
