import Image from 'next/image';

export default function Banner() {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      <Image
        src="/reddit/banner.webp"
        alt="Reddit Banner"
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
    </section>
  );
}
