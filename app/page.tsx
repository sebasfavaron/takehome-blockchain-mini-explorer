import PageLayout from './components/PageLayout';
import { getCoins } from './service';
import Link from 'next/link';

export default async function Home() {
  const coins = await getCoins();

  return (
    <PageLayout>
      <h1>Mini Explorer</h1>
      <ul className='flex flex-col gap-2'>
        {Object.entries(coins).map(([id, coin]) => (
          <li key={id} className='flex items-center gap-2'>
            <Link
              href={`/${id}`}
              className='text-blue-600 underline capitalize'
            >
              {id}
            </Link>
            {coin.usd_24h_change > 0 ? '+' : '-'}
            {coin.usd_24h_change.toFixed(2)}%
            <span className='text-gray-500'>{coin.usd.toFixed(2)} USD</span>
          </li>
        ))}
      </ul>
    </PageLayout>
  );
}
