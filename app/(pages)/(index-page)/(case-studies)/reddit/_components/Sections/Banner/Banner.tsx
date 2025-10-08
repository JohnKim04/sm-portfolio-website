import Image from 'next/image';

export default function Banner() {
  return (
    <section>
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
