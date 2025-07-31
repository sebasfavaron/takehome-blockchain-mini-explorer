export function formatNumber(num: number): string {
  if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`;
  if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
  if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
  if (num >= 1e3) return `$${(num / 1e3).toFixed(2)}K`;
  return `$${num.toFixed(2)}`;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getChangeColor(
  value: number,
  positiveColor = 'text-green-600',
  negativeColor = 'text-red-600'
): string {
  return value >= 0 ? positiveColor : negativeColor;
}

export function formatPercentageChange(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}

export function formatPriceChange(value: number): string {
  return `(${value >= 0 ? '+' : ''}$${value.toFixed(2)})`;
}
