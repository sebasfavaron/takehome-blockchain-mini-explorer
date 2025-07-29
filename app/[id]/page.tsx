import PageLayout from '@/app/components/PageLayout';
import { VALID_COIN_IDS } from './types';
import { notFound } from 'next/navigation';
import { getCoin } from '../service';
import Image from 'next/image';

type CoinPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CoinPage({ params }: CoinPageProps) {
  const { id } = await params;
  if (!VALID_COIN_IDS.includes(id)) {
    return notFound();
  }

  const coin = await getCoin(id);

  return (
    <PageLayout>
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
      <p className='text-sm text-gray-500'>{coin.current_price}</p>
    </PageLayout>
  );
}
