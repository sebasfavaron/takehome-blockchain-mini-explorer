import PageLayout from '@/app/components/PageLayout';
import { VALID_COIN_IDS } from './types';
import { notFound } from 'next/navigation';

type CoinPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CoinPage({ params }: CoinPageProps) {
  const { id } = await params;
  if (!VALID_COIN_IDS.includes(id)) {
    return notFound();
  }

  return (
    <PageLayout>
      <h1>Coin Page: {id}</h1>
    </PageLayout>
  );
}
