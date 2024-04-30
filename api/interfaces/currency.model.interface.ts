
export interface CurrencyModelInterface {
  id: number;
  order?: number;
  slug?: string;
  cgId?: string;
  cgSymbol?: string;
  cgName?: string;
  cgImage?: string;
  cgCurrentPrice?: string;
  cgMarketCap?: string;
  cgMarketCapRank?: string;
  cgFullyDilutedValuation?: string;
  cgTotalVolume?: string;
  cgHigh24h?: string;
  cgLow24h?: string;
  cgPriceChange24h?: string;
  cgPriceChangePercentage24h?: string;
  cgMarketCapChange24h?: string;
  cgMarketCapChangePercentage24h?: string;
  cgCirculatingSupply?: string;
  cgTotalSupply?: string;
  cgMaxSupply?: string;
  cgAth?: string;
  cgAthChangePercentage?: string;
  cgAthDate?: string;
  cgAtl?: string;
  cgAtlChangePercentage?: string;
  cgAtlDate?: string;
  cgPriceChangePercentage7dInCurrency?: string;
  cgLastUpdated?: string;
  banner?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  sparkLineIn7d?: any[];
}
