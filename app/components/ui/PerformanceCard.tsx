interface PerformanceCardProps {
  label: string;
  value: string;
  valueClassName?: string;
}

export function PerformanceCard({
  label,
  value,
  valueClassName = '',
}: PerformanceCardProps) {
  return (
    <div className='text-center p-4 bg-gray-50 rounded-lg'>
      <p className='text-sm text-gray-600 mb-1'>{label}</p>
      <p className={`text-lg font-bold ${valueClassName}`}>{value}</p>
    </div>
  );
}
