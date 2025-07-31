import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  const baseStyles = 'bg-white rounded-xl shadow-lg p-6';

  return <div className={`${baseStyles} ${className}`}>{children}</div>;
}

interface CardHeaderProps {
  title: string;
  className?: string;
}

export function CardHeader({ title, className = '' }: CardHeaderProps) {
  return (
    <h2 className={`text-xl font-bold mb-6 text-gray-800 ${className}`}>
      {title}
    </h2>
  );
}
