import { ApiCryptoResponseInterface } from '../interfaces/api.crypto.response.interface';
import { ApiCryptoModel } from '../models/api.crypto.model';

export const transformApiCryptoResponseToApiCryptoModel = ( apiCrypto: ApiCryptoResponseInterface ) => new ApiCryptoModel({
  id: apiCrypto.id,
  order: apiCrypto.order,
  slug: apiCrypto.slug,
  cgId: apiCrypto.cg_id,
  cgSymbol: apiCrypto.cg_symbol,
  cgName: apiCrypto.cg_name,
  cgImage: apiCrypto.cg_image,
  cgCurrentPrice: apiCrypto.cg_current_price,
  cgMarketCap: apiCrypto.cg_market_cap,
  cgMarketCapRank: apiCrypto.cg_market_cap_rank,
  cgFullyDilutedValuation: apiCrypto.cg_fully_diluted_valuation,
  cgTotalVolume: apiCrypto.cg_total_volume,
  cgHigh24h: apiCrypto.cg_high_24h,
  cgLow24h: apiCrypto.cg_low_24h,
  cgPriceChange24h: apiCrypto.cg_price_change_24h,
  cgPriceChangePercentage24h: apiCrypto.cg_price_change_percentage_24h,
  cgMarketCapChange24h: apiCrypto.cg_market_cap_change_24h,
  cgMarketCapChangePercentage24h: apiCrypto.cg_market_cap_change_percentage_24h,
  cgCirculatingSupply: apiCrypto.cg_circulating_supply,
  cgTotalSupply: apiCrypto.cg_total_supply,
  cgMaxSupply: apiCrypto.cg_max_supply,
  cgAth: apiCrypto.cg_ath,
  cgAthChangePercentage: apiCrypto.cg_ath_change_percentage,
  cgAthDate: apiCrypto.cg_ath_date,
  cgAtl: apiCrypto.cg_atl,
  cgAtlChangePercentage: apiCrypto.cg_atl_change_percentage,
  cgAtlDate: apiCrypto.cg_atl_date,
  cgPriceChangePercentage7dInCurrency: apiCrypto.cg_price_change_percentage_7d_in_currency,
  cgLastUpdated: apiCrypto.cg_last_updated,
  banner: apiCrypto.banner,
  createdAt: apiCrypto.created_at,
  updatedAt: apiCrypto.updated_at,
  deletedAt: apiCrypto.deleted_at,
  sparkLines: apiCrypto.sparklines,
});