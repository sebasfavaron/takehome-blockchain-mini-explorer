import Link from 'next/link';
import { SupportedCoin } from '../../constants';
import { getChangeColor, formatPercentageChange } from '../../lib/utils';

interface CoinCardProps {
  id: SupportedCoin;
  price: number;
  change24h: number;
}

export function CoinCard({ id, price, change24h }: CoinCardProps) {
  const changeColor = getChangeColor(change24h);

  return (
    <Link href={`/${id}`} className='block group'>
      <div className='bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 border border-gray-100 group-hover:border-blue-200'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='text-xl font-bold text-gray-800 capitalize group-hover:text-blue-600 transition-colors'>
              {id}
            </h3>
            <p className='text-sm text-gray-500 uppercase mt-1'>
              {id.slice(0, 3)}
            </p>
          </div>
          <div className='text-right'>
            <p className='text-2xl font-bold text-gray-800'>
              ${price.toFixed(2)}
            </p>
            <p className={`text-lg font-semibold ${changeColor}`}>
              {formatPercentageChange(change24h)}
            </p>
          </div>
        </div>

        <div className='mt-4 pt-4 border-t border-gray-100'>
          <div className='flex items-center justify-between text-sm'>
            <span className='text-gray-600'>24h Change</span>
            <span className={`font-medium ${changeColor}`}>
              {change24h >= 0 ? '+' : ''}$
              {((price * change24h) / 100).toFixed(4)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
