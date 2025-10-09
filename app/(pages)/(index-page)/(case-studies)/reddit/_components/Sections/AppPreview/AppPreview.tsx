import Link from 'next/link';

export default function AppPreview() {
  return (
    <section className="flex flex-col items-center gap-10">
      <h3 className="text-center">App Preview</h3>
      <div className="flex gap-4">
        <Link href="#final-designs">
          <button className="bg-[#FF4500] text-white px-6 py-2 rounded-lg hover:bg-[#ff5a1f] transition-colors">
            Jump to final designs
          </button>
        </Link>
        <a
          href="https://www.reddit.com/r/tampabayrays/comments/1m3we6c/mlb_game_scorecard_july_19th_2025_orioles_rays/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex items-center gap-2 bg-white text-[#FF4500] border border-[#FF4500] px-6 py-2 rounded-lg hover:bg-[#fff5f2] transition-colors">
            Launch reddit.com
            <img
              src="/reddit/linkArrow.svg"
              alt="link arrow"
              width={1000}
              height={1000}
              className="w-3"
            />
          </button>
        </a>
      </div>
      <div className="w-full max-w-4xl">
        <iframe
          className="w-full aspect-video rounded-lg"
          src="https://www.youtube.com/embed/8pPxVQRPqqs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
