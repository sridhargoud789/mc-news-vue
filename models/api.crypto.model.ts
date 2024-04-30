import { ApiCryptoModelInterface } from '../interfaces/api.crypto.model.interface';


export class ApiCryptoModel {
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
  sparkLines?: string[];

  // Declare constructor
  constructor({
    id,
    order,
    slug,
    cgId,
    cgSymbol,
    cgName,
    cgImage,
    cgCurrentPrice,
    cgMarketCap,
    cgMarketCapRank,
    cgFullyDilutedValuation,
    cgTotalVolume,
    cgHigh24h,
    cgLow24h,
    cgPriceChange24h,
    cgPriceChangePercentage24h,
    cgMarketCapChange24h,
    cgMarketCapChangePercentage24h,
    cgCirculatingSupply,
    cgTotalSupply,
    cgMaxSupply,
    cgAth,
    cgAthChangePercentage,
    cgAthDate,
    cgAtl,
    cgAtlChangePercentage,
    cgAtlDate,
    cgPriceChangePercentage7dInCurrency,
    cgLastUpdated,
    banner,
    createdAt,
    updatedAt,
    deletedAt,
    sparkLines
  }: ApiCryptoModelInterface ) {
    this.id = id;
    this.order = order;
    this.slug = slug;
    this.cgId = cgId;
    this.cgSymbol = cgSymbol;
    this.cgName = cgName;
    this.cgImage = cgImage;
    this.cgCurrentPrice = cgCurrentPrice;
    this.cgMarketCap = cgMarketCap;
    this.cgMarketCapRank = cgMarketCapRank;
    this.cgFullyDilutedValuation = cgFullyDilutedValuation;
    this.cgTotalVolume = cgTotalVolume;
    this.cgHigh24h = cgHigh24h;
    this.cgLow24h = cgLow24h;
    this.cgPriceChange24h = cgPriceChange24h;
    this.cgPriceChangePercentage24h = cgPriceChangePercentage24h;
    this.cgMarketCapChange24h = cgMarketCapChange24h;
    this.cgMarketCapChangePercentage24h = cgMarketCapChangePercentage24h;
    this.cgCirculatingSupply = cgCirculatingSupply;
    this.cgTotalSupply = cgTotalSupply;
    this.cgMaxSupply = cgMaxSupply;
    this.cgAth = cgAth;
    this.cgAthChangePercentage = cgAthChangePercentage;
    this.cgAthDate = cgAthDate;
    this.cgAtl = cgAtl;
    this.cgAtlChangePercentage = cgAtlChangePercentage;
    this.cgAtlDate = cgAtlDate;
    this.cgPriceChangePercentage7dInCurrency = cgPriceChangePercentage7dInCurrency;
    this.cgLastUpdated = cgLastUpdated;
    this.banner = banner;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.sparkLines = sparkLines;
  }
}
