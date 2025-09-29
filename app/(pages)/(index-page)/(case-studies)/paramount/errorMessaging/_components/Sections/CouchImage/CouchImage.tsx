import { contentProps } from '../../../page';
import Image from 'next/image';
import { getImageUrl } from '@/app/_lib/getImageUrl';

export default function CouchImage(content: contentProps) {
  return (
    <section className="-mx-[40%]">
      <Image
        src={getImageUrl(content.images, 'couchErrorMessage.svg')}
        alt="Couch Error Message"
        width={1000}
        height={1000}
        className="w-full"
        priority={true}
      />
    </section>
  );
}
