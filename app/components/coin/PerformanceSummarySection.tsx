import { CoinDetailsResponse } from '../../types';
import { Card, CardHeader } from '../ui/Card';
import { PerformanceCard } from '../ui/PerformanceCard';
import {
  getChangeColor,
  formatPercentageChange,
  formatDate,
} from '../../lib/utils';

interface PerformanceSummarySectionProps {
  coin: CoinDetailsResponse;
}

export function PerformanceSummarySection({
  coin,
}: PerformanceSummarySectionProps) {
  return (
    <Card>
      <CardHeader title='Performance Summary' />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
        <PerformanceCard
          label='From ATH'
          value={formatPercentageChange(coin.ath_change_percentage)}
          valueClassName={getChangeColor(coin.ath_change_percentage)}
        />
        <PerformanceCard
          label='From ATL'
          value={formatPercentageChange(coin.atl_change_percentage)}
          valueClassName={getChangeColor(coin.atl_change_percentage)}
        />
        <PerformanceCard
          label='Market Dominance'
          value={`#${coin.market_cap_rank}`}
          valueClassName='text-blue-600'
        />
        <PerformanceCard
          label='Last Updated'
          value={formatDate(coin.last_updated)}
          valueClassName='text-gray-700'
        />
      </div>
    </Card>
  );
}
