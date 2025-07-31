import { ReactNode } from 'react';

interface StatItemProps {
  label: string;
  value: ReactNode;
  valueClassName?: string;
}

export function StatItem({ label, value, valueClassName = '' }: StatItemProps) {
  return (
    <div className='flex justify-between items-center'>
      <span className='text-gray-600'>{label}</span>
      <span className={`font-semibold ${valueClassName}`}>{value}</span>
    </div>
  );
}

interface StatItemWithSubtextProps {
  label: string;
  value: string;
  subtext: string;
  valueClassName?: string;
  subtextClassName?: string;
}

export function StatItemWithSubtext({
  label,
  value,
  subtext,
  valueClassName = '',
  subtextClassName = 'text-sm text-gray-500',
}: StatItemWithSubtextProps) {
  return (
    <div className='flex justify-between items-center'>
      <span className='text-gray-600'>{label}</span>
      <div className='text-right'>
        <div className={`font-semibold ${valueClassName}`}>{value}</div>
        <div className={subtextClassName}>{subtext}</div>
      </div>
    </div>
  );
}
