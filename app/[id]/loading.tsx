export default function Loading() {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 py-8 text-slate-700'>
      {/* Header Skeleton */}
      <div className='mb-8'>
        <div className='flex flex-col sm:flex-row sm:items-center gap-4 mb-6'>
          <div className='flex items-center gap-3'>
            <div className='w-16 h-16 bg-gray-200 rounded-full animate-pulse' />
            <div>
              <div className='h-8 bg-gray-200 rounded w-48 mb-2 animate-pulse' />
              <div className='h-5 bg-gray-200 rounded w-16 animate-pulse' />
            </div>
          </div>
          <div className='sm:ml-auto'>
            <div className='text-right'>
              <div className='h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse' />
              <div className='h-6 bg-gray-200 rounded w-12 animate-pulse' />
            </div>
          </div>
        </div>

        {/* Price Section Skeleton */}
        <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8'>
          <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4'>
            <div>
              <div className='h-4 bg-gray-200 rounded w-24 mb-2 animate-pulse' />
              <div className='h-12 bg-gray-200 rounded w-48 animate-pulse' />
            </div>
            <div className='flex flex-col sm:items-end'>
              <div className='h-4 bg-gray-200 rounded w-20 mb-2 animate-pulse' />
              <div className='flex items-center gap-2'>
                <div className='h-6 bg-gray-200 rounded w-16 animate-pulse' />
                <div className='h-6 bg-gray-200 rounded w-20 animate-pulse' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid Skeleton */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {[1, 2, 3].map((i) => (
          <div key={i} className='bg-white rounded-xl shadow-lg p-6'>
            <div className='h-6 bg-gray-200 rounded w-32 mb-6 animate-pulse' />
            <div className='space-y-4'>
              {[1, 2, 3, 4].map((j) => (
                <div key={j} className='flex justify-between items-center'>
                  <div className='h-4 bg-gray-200 rounded w-24 animate-pulse' />
                  <div className='h-4 bg-gray-200 rounded w-16 animate-pulse' />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Performance Summary Skeleton */}
      <div className='mt-8'>
        <div className='bg-white rounded-xl shadow-lg p-6'>
          <div className='h-6 bg-gray-200 rounded w-40 mb-6 animate-pulse' />
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className='text-center p-4 bg-gray-50 rounded-lg'>
                <div className='h-4 bg-gray-200 rounded w-16 mb-2 mx-auto animate-pulse' />
                <div className='h-6 bg-gray-200 rounded w-12 mx-auto animate-pulse' />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back Button Skeleton */}
      <div className='mt-8 text-center'>
        <div className='h-12 bg-gray-200 rounded-lg w-48 mx-auto animate-pulse' />
      </div>
    </div>
  );
}
