import { VALID_COIN_IDS } from './types';
import { notFound } from 'next/navigation';
import { getCoin } from '../service';
import Link from 'next/link';
import {
  CoinHeader,
  PriceDataSection,
  MarketDataSection,
  SupplyInfoSection,
  PerformanceSummarySection,
} from '../components/coin';

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
    <div className='w-full max-w-7xl mx-auto px-4 py-8'>
      <CoinHeader coin={coin} />

      {/* Main Content Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-1'>
          <PriceDataSection coin={coin} />
        </div>
        <div className='lg:col-span-1'>
          <MarketDataSection coin={coin} />
        </div>
        <div className='lg:col-span-1'>
          <SupplyInfoSection coin={coin} />
        </div>
      </div>

      {/* Performance Summary Section */}
      <div className='mt-8'>
        <PerformanceSummarySection coin={coin} />
      </div>

      {/* Back to Home Button */}
      <div className='mt-8 text-center'>
        <Link
          href='/'
          className='inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200'
        >
          ← Back to Explorer
        </Link>
      </div>
    </div>
  );
}
