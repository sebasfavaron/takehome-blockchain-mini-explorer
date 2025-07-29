import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center min-h-[40vh]'>
      <p className='text-center text-2xl'>
        Oh no! That coin is not supported yet. Go back to the{' '}
        <Link href='/' className='text-blue-600 underline'>
          home page
        </Link>
        .
      </p>
    </div>
  );
}
