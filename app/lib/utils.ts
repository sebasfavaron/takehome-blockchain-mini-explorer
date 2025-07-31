import { FORMAT_THRESHOLDS, COLORS } from '../constants';

export function formatNumber(num: number): string {
  if (num >= FORMAT_THRESHOLDS.TRILLION) {
    return `$${(num / FORMAT_THRESHOLDS.TRILLION).toFixed(2)}T`;
  }
  if (num >= FORMAT_THRESHOLDS.BILLION) {
    return `$${(num / FORMAT_THRESHOLDS.BILLION).toFixed(2)}B`;
  }
  if (num >= FORMAT_THRESHOLDS.MILLION) {
    return `$${(num / FORMAT_THRESHOLDS.MILLION).toFixed(2)}M`;
  }
  if (num >= FORMAT_THRESHOLDS.THOUSAND) {
    return `$${(num / FORMAT_THRESHOLDS.THOUSAND).toFixed(2)}K`;
  }
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
  positiveColor: string = COLORS.POSITIVE,
  negativeColor: string = COLORS.NEGATIVE
): string {
  return value >= 0 ? positiveColor : negativeColor;
}

export function formatPercentageChange(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}

export function formatPriceChange(value: number): string {
  return `(${value >= 0 ? '+' : ''}$${value.toFixed(2)})`;
}
