'use client';

import Link from 'next/link';
import { buttonStyles } from '../constants/tailwind-styles';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='flex flex-col items-center justify-center min-h-[40vh] text-2xl mt-4'>
      <p className='text-center'>There was an error fetching the coin data.</p>
      <p className='text-center'>{error.message}</p>
      <button onClick={reset} className={buttonStyles}>
        Try again
      </button>
      <p className='text-center'>
        Go back to the
        <Link href='/' className={buttonStyles}>
          home page
        </Link>
        .
      </p>
    </div>
  );
}
