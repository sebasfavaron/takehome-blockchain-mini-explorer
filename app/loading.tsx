export default function Loading() {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-8 text-slate-700'>
      {/* Header Skeleton */}
      <div className='text-center mb-12'>
        <div className='h-12 bg-gray-200 rounded w-96 mx-auto mb-4 animate-pulse' />
        <div className='h-6 bg-gray-200 rounded w-64 mx-auto animate-pulse' />
      </div>

      {/* Featured Cryptocurrencies Section */}
      <div className='mb-8'>
        <div className='h-8 bg-gray-200 rounded w-72 mb-6 animate-pulse' />

        {/* Coins Grid Skeleton */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className='bg-white rounded-xl shadow-lg p-6'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-12 h-12 bg-gray-200 rounded-full animate-pulse' />
                <div>
                  <div className='h-5 bg-gray-200 rounded w-24 mb-2 animate-pulse' />
                  <div className='h-4 bg-gray-200 rounded w-16 animate-pulse' />
                </div>
              </div>
              <div className='space-y-3'>
                <div className='flex justify-between items-center'>
                  <div className='h-4 bg-gray-200 rounded w-16 animate-pulse' />
                  <div className='h-6 bg-gray-200 rounded w-20 animate-pulse' />
                </div>
                <div className='flex justify-between items-center'>
                  <div className='h-4 bg-gray-200 rounded w-20 animate-pulse' />
                  <div className='h-5 bg-gray-200 rounded w-16 animate-pulse' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Market Summary Skeleton */}
      <div className='bg-white rounded-xl shadow-lg p-6'>
        <div className='h-6 bg-gray-200 rounded w-40 mb-6 animate-pulse' />
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {[1, 2, 3].map((i) => (
            <div key={i} className='text-center p-4 bg-gray-50 rounded-lg'>
              <div className='h-4 bg-gray-200 rounded w-20 mb-2 mx-auto animate-pulse' />
              <div className='h-8 bg-gray-200 rounded w-8 mx-auto animate-pulse' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
