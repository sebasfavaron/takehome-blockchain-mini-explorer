import { getCoins } from './service';
import { HomeHeader, CoinCard } from './components/home';

export default async function Home() {
  const coins = await getCoins();

  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-8 text-slate-700'>
      <HomeHeader />

      {/* Coins Grid */}
      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6'>
          Featured Cryptocurrencies
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Object.entries(coins).map(([id, coin]) => (
            <CoinCard
              key={id}
              id={id}
              price={coin.usd}
              change24h={coin.usd_24h_change}
            />
          ))}
        </div>
      </div>

      {/* Market Summary */}
      <div className='bg-white rounded-xl shadow-lg p-6'>
        <h2 className='text-xl font-bold text-gray-800 mb-6'>Market Summary</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='text-center p-4 bg-gray-50 rounded-lg'>
            <p className='text-sm text-gray-600 mb-1'>Total Assets</p>
            <p className='text-2xl font-bold text-gray-800'>
              {Object.keys(coins).length}
            </p>
          </div>
          <div className='text-center p-4 bg-gray-50 rounded-lg'>
            <p className='text-sm text-gray-600 mb-1'>Gainers</p>
            <p className='text-2xl font-bold text-green-600'>
              {
                Object.values(coins).filter((coin) => coin.usd_24h_change > 0)
                  .length
              }
            </p>
          </div>
          <div className='text-center p-4 bg-gray-50 rounded-lg'>
            <p className='text-sm text-gray-600 mb-1'>Losers</p>
            <p className='text-2xl font-bold text-red-600'>
              {
                Object.values(coins).filter((coin) => coin.usd_24h_change < 0)
                  .length
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
