import { SupportedCoin } from '../constants';

// Re-export types from constants
export type { SupportedCoin } from '../constants';

export interface SimpleCoinData {
  usd: number;
  usd_24h_change: number;
}

export type SimpleCoinResponse = Record<SupportedCoin, SimpleCoinData>;

export interface CoinDetailsResponse {
  id: SupportedCoin;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number | null;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: null;
  last_updated: string;
}
