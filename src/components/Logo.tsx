import Image from 'next/image';
import Link from 'next/link';
export default function Logo() {
  return (
    <div className="flex items-center flex-shrink-0 mr-10 text-center sm:mb-0">
      <Link href="/">
        <Image src={'../logo.svg'} width={'150'} height={'50'} alt='Logo'></Image>
      </Link>
    </div>
  );
}