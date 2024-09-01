import Image from 'next/image';
import Link from 'next/link';
export default function Logo({isScrolling}:any) {
  return (
    <div className="flex items-center flex-shrink-0 mr-10 text-center sm:mb-0">
      <Link href="/" className='logo_section relative overflow-hidden h-full transition-all'>
        <Image src='../logo.svg' className='absolute z-10 top-0 bottom-0 my-auto logo' width={'150'} height={'50'} alt='Logo'></Image>
        <Image src='../logo_sm.svg' className='absolute z-10 top-0 bottom-0 my-auto logo_sm' width={'40'} height={'50'} alt='Logo'></Image>
      </Link>
    </div>
  );
}