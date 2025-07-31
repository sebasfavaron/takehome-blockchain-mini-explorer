import { CoinDetailsResponse } from '../../types';
import { Card, CardHeader } from '../ui/Card';
import { StatItem } from '../ui/StatItem';
import { ProgressBar } from '../ui/ProgressBar';
import { formatNumber } from '../../lib/utils';

interface SupplyInfoSectionProps {
  coin: CoinDetailsResponse;
}

export function SupplyInfoSection({ coin }: SupplyInfoSectionProps) {
  const supplyProgress = coin.max_supply
    ? (coin.circulating_supply / coin.max_supply) * 100
    : 0;

  return (
    <Card>
      <CardHeader title='Supply Info' />
      <div className='space-y-4'>
        <StatItem
          label='Circulating Supply'
          value={formatNumber(coin.circulating_supply)}
        />
        <StatItem
          label='Total Supply'
          value={coin.total_supply ? formatNumber(coin.total_supply) : 'N/A'}
        />
        <StatItem
          label='Max Supply'
          value={coin.max_supply ? formatNumber(coin.max_supply) : 'No Limit'}
        />
        {coin.max_supply && (
          <ProgressBar percentage={supplyProgress} label='Supply Progress' />
        )}
      </div>
    </Card>
  );
}
