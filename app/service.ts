import { API_CONFIG, SUPPORTED_COINS, SupportedCoin } from './constants';
import { SimpleCoinResponse, CoinDetailsResponse } from './types';

class ApiErrorHandler extends Error {
  public status?: number;
  public code?: string;

  constructor(message: string, status?: number, code?: string) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}

async function fetchWithErrorHandling(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  try {
    const response = await fetch(url, {
      ...options,
      next: {
        revalidate: API_CONFIG.REVALIDATE_TIME,
        ...options.next,
      },
    });

    if (!response.ok) {
      throw new ApiErrorHandler(
        `API request failed: ${response.statusText}`,
        response.status,
        response.status.toString()
      );
    }

    return response;
  } catch (error) {
    if (error instanceof ApiErrorHandler) {
      throw error;
    }
    throw new ApiErrorHandler('Network error occurred');
  }
}

export async function getCoins(): Promise<SimpleCoinResponse> {
  const coinIds = SUPPORTED_COINS.join(',');
  const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SIMPLE_PRICE}?ids=${coinIds}&vs_currencies=${API_CONFIG.CURRENCY}&include_24hr_change=true`;

  try {
    const response = await fetchWithErrorHandling(url);
    const data = await response.json();

    if (typeof data !== 'object' || data === null) {
      throw new ApiErrorHandler('Invalid response format');
    }

    return data as SimpleCoinResponse;
  } catch (error) {
    console.error('Error fetching coins:', error);
    throw error instanceof ApiErrorHandler
      ? error
      : new ApiErrorHandler('Failed to fetch coin data');
  }
}

export async function getCoin(id: SupportedCoin): Promise<CoinDetailsResponse> {
  const url = `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.MARKETS}?vs_currency=${API_CONFIG.CURRENCY}&ids=${id}`;

  try {
    const response = await fetchWithErrorHandling(url);
    const data = await response.json();

    if (!Array.isArray(data) || data.length === 0) {
      throw new ApiErrorHandler(`Coin ${id} not found`, 404, 'COIN_NOT_FOUND');
    }

    const coinData = data[0];
    if (!coinData) {
      throw new ApiErrorHandler(
        `No data available for coin ${id}`,
        404,
        'NO_DATA'
      );
    }

    return coinData as CoinDetailsResponse;
  } catch (error) {
    console.error(`Error fetching coin ${id}:`, error);
    throw error instanceof ApiErrorHandler
      ? error
      : new ApiErrorHandler(`Failed to fetch data for coin ${id}`);
  }
}
