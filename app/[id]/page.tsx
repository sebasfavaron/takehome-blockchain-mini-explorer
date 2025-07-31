import { VALID_COIN_IDS } from './types';
import { notFound } from 'next/navigation';
import { getCoin } from '../service';
import Image from 'next/image';
import Link from 'next/link';

type CoinPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CoinPage({ params }: CoinPageProps) {
  const { id } = await params;
  if (!VALID_COIN_IDS.includes(id)) {
    return notFound();
  }

  const coin = await getCoin(id);

  if (!coin) {
    return (
      <div className='flex flex-col items-center justify-center min-h-[40vh]'>
        <p className='text-center text-2xl'>
          There was an error fetching the coin data. Go back to the{' '}
          <Link href='/' className='text-blue-600 underline'>
            home page
          </Link>
          .
        </p>
      </div>
    );
  }
  return (
    <div>
      <h1 className='text-2xl font-bold'>{coin.name}</h1>
      <div className='flex items-center gap-2'>
        <Image
          src={coin.image}
          alt={coin.name}
          width={100}
          height={100}
          className='w-10 h-10'
        />
        <span className='text-sm text-gray-500'>{coin.name}</span>
      </div>
      <p className='text-sm text-gray-500'>Low 24h: {coin.low_24h}</p>
      <p className='text-sm text-gray-500'>
        Current Price: {coin.current_price}
      </p>
      <p className='text-sm text-gray-500'>High 24h: {coin.high_24h}</p>
    </div>
  );
}
