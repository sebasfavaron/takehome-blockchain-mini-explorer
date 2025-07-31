// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://api.coingecko.com/api/v3',
  ENDPOINTS: {
    SIMPLE_PRICE: '/simple/price',
    MARKETS: '/coins/markets',
  },
  REVALIDATE_TIME: 60, // seconds
  CURRENCY: 'usd',
} as const;

// Supported Cryptocurrencies
export const SUPPORTED_COINS = [
  'bitcoin',
  'ethereum',
  'dogecoin',
  'cardano',
  'solana',
] as const;

export type SupportedCoin = (typeof SUPPORTED_COINS)[number];

// Responsive Breakpoints
export const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1280,
} as const;

// Color Palette
export const COLORS = {
  POSITIVE: 'text-green-600',
  NEGATIVE: 'text-red-600',
  NEUTRAL: 'text-gray-600',
  PRIMARY: 'text-blue-600',
  SECONDARY: 'text-gray-500',
} as const;

// Number Formatting Thresholds
export const FORMAT_THRESHOLDS = {
  TRILLION: 1e12,
  BILLION: 1e9,
  MILLION: 1e6,
  THOUSAND: 1e3,
} as const;

// Component Variants
export const CARD_VARIANTS = {
  DEFAULT: 'default',
  GRADIENT: 'gradient',
  METRIC: 'metric',
} as const;

export type CardVariant = (typeof CARD_VARIANTS)[keyof typeof CARD_VARIANTS];
