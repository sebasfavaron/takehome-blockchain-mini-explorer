export function HomeHeader() {
  return (
    <div className='mb-8'>
      <div className='text-center mb-6'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
          Crypto Mini Explorer
        </h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Track the latest cryptocurrency prices and 24-hour changes for the top
          digital assets
        </p>
      </div>

      <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6'>
        <div className='text-center'>
          <p className='text-sm text-gray-600 mb-2'>Live Market Data</p>
          <p className='text-2xl font-bold text-gray-800'>5 Cryptocurrencies</p>
          <p className='text-sm text-gray-500 mt-1'>Updated every minute</p>
        </div>
      </div>
    </div>
  );
}
