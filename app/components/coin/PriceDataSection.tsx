import { CoinDetailsResponse } from '../../types';
import { Card, CardHeader } from '../ui/Card';
import { StatItem, StatItemWithSubtext } from '../ui/StatItem';
import { formatNumber, formatDate } from '../../lib/utils';

interface PriceDataSectionProps {
  coin: CoinDetailsResponse;
}

export function PriceDataSection({ coin }: PriceDataSectionProps) {
  return (
    <Card>
      <CardHeader title='Price Data' />
      <div className='space-y-4'>
        <StatItem
          label='24h High'
          value={formatNumber(coin.high_24h)}
          valueClassName='text-green-600'
        />
        <StatItem
          label='24h Low'
          value={formatNumber(coin.low_24h)}
          valueClassName='text-red-600'
        />
        <StatItemWithSubtext
          label='All-Time High'
          value={formatNumber(coin.ath)}
          subtext={formatDate(coin.ath_date)}
        />
        <StatItemWithSubtext
          label='All-Time Low'
          value={formatNumber(coin.atl)}
          subtext={formatDate(coin.atl_date)}
        />
      </div>
    </Card>
  );
}
