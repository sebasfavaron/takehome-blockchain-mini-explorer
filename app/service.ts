import { CoinDetailsResponse, SimpleCoinResponse } from './types';

export async function getCoins() {
  const response = await fetch(
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,cardano,solana&vs_currencies=usd&include_24hr_change=true',
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data = (await response.json()) as SimpleCoinResponse;
  return data;
}

export async function getCoin(id: string) {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const data = (await response.json())[0] as CoinDetailsResponse;
  return data;
}
