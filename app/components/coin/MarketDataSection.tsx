import { CoinDetailsResponse } from '../../types';
import { Card, CardHeader } from '../ui/Card';
import { StatItem, StatItemWithSubtext } from '../ui/StatItem';
import {
  formatNumber,
  getChangeColor,
  formatPercentageChange,
} from '../../lib/utils';

interface MarketDataSectionProps {
  coin: CoinDetailsResponse;
}

export function MarketDataSection({ coin }: MarketDataSectionProps) {
  const marketCapChangeColor = getChangeColor(
    coin.market_cap_change_percentage_24h
  );

  return (
    <Card>
      <CardHeader title='Market Data' />
      <div className='space-y-4'>
        <StatItemWithSubtext
          label='Market Cap'
          value={formatNumber(coin.market_cap)}
          subtext={formatPercentageChange(
            coin.market_cap_change_percentage_24h
          )}
          subtextClassName={`text-sm ${marketCapChangeColor}`}
        />
        <StatItem label='24h Volume' value={formatNumber(coin.total_volume)} />
        <StatItem
          label='Fully Diluted Val.'
          value={
            coin.fully_diluted_valuation
              ? formatNumber(coin.fully_diluted_valuation)
              : 'N/A'
          }
        />
        <StatItem
          label='Volume/Market Cap'
          value={`${((coin.total_volume / coin.market_cap) * 100).toFixed(2)}%`}
        />
      </div>
    </Card>
  );
}
