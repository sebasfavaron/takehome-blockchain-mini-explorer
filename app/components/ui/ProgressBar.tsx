interface ProgressBarProps {
  percentage: number;
  label: string;
  className?: string;
  barClassName?: string;
}

export function ProgressBar({
  percentage,
  label,
  className = '',
  barClassName = 'bg-blue-600',
}: ProgressBarProps) {
  return (
    <div className={`mt-4 ${className}`}>
      <div className='flex justify-between items-center mb-2'>
        <span className='text-gray-600'>{label}</span>
        <span className='text-sm font-medium'>{percentage.toFixed(1)}%</span>
      </div>
      <div className='w-full bg-gray-200 rounded-full h-2'>
        <div
          className={`h-2 rounded-full transition-all duration-300 ${barClassName}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
