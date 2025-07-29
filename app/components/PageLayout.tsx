import Link from 'next/link';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=''>
      <nav className='flex justify-between items-center'>
        <Link href='/'>Home</Link>
      </nav>
      <main className='flex flex-col items-center'>{children}</main>
      <footer className=''></footer>
    </div>
  );
}
