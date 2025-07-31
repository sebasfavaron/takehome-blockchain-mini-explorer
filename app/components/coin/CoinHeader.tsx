import { CoinDetailsResponse } from '../../types';
import Image from 'next/image';
import {
  formatNumber,
  getChangeColor,
  formatPercentageChange,
  formatPriceChange,
} from '../../lib/utils';

interface CoinHeaderProps {
  coin: CoinDetailsResponse;
}

export function CoinHeader({ coin }: CoinHeaderProps) {
  const priceChangeColor = getChangeColor(coin.price_change_percentage_24h);

  return (
    <div className='mb-8'>
      <div className='flex flex-col sm:flex-row sm:items-center gap-4 mb-6'>
        <div className='flex items-center gap-3'>
          <Image
            src={coin.image}
            alt={coin.name}
            width={64}
            height={64}
            className='w-16 h-16'
          />
          <div>
            <h1 className='text-3xl md:text-4xl font-bold'>{coin.name}</h1>
            <p className='text-lg text-gray-600 uppercase'>{coin.symbol}</p>
          </div>
        </div>
        <div className='sm:ml-auto'>
          <div className='text-right'>
            <p className='text-sm text-gray-500'>Market Cap Rank</p>
            <p className='text-2xl font-bold'>#{coin.market_cap_rank}</p>
          </div>
        </div>
      </div>

      {/* Current Price Section */}
      <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8'>
        <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4'>
          <div>
            <p className='text-sm text-gray-600 mb-1'>Current Price</p>
            <p className='text-4xl md:text-5xl font-bold'>
              {formatNumber(coin.current_price)}
            </p>
          </div>
          <div className='flex flex-col sm:items-end'>
            <p className='text-sm text-gray-600 mb-1'>24h Change</p>
            <div className='flex items-center gap-2'>
              <span className={`text-xl font-semibold ${priceChangeColor}`}>
                {formatPercentageChange(coin.price_change_percentage_24h)}
              </span>
              <span className={`text-lg ${priceChangeColor}`}>
                {formatPriceChange(coin.price_change_24h)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
