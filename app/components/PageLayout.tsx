import Link from 'next/link';
import Image from 'next/image';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='h-[100vh] flex flex-col'>
      <nav className='flex justify-between items-center h-20 min-h-20 px-4'>
        <Link href='/'>
          <Image src='/logo.png' alt='logo' width={100} height={100} />
        </Link>
      </nav>
      <main className='flex-1 flex flex-col items-center justify-start overflow-auto'>
        {children}
      </main>
      <footer className='h-12 min-h-12 px-4 flex items-center'>
        <p className='text-sm text-gray-500'>
          &copy; {new Date().getFullYear()} Coin Tracker. Made by{' '}
          <a href='https://github.com/sebasfavaron' className='text-blue-500'>
            sebasfavaron
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
