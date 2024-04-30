import { CurrencyModelInterface } from "~/interfaces/currency.model.interface";


export class CurrencyModel {
  public id: number;
  public order?: number;
  public slug?: string;
  public cgId?: string;
  public cgSymbol?: string;
  public cgName?: string;
  public cgImage?: string;
  public cgCurrentPrice?: string;
  public cgMarketCap?: string;
  public cgMarketCapRank?: string;
  public cgFullyDilutedValuation?: string;
  public cgTotalVolume?: string;
  public cgHigh24h?: string;
  public cgLow24h?: string;
  public cgPriceChange24h?: string;
  public cgPriceChangePercentage24h?: string;
  public cgMarketCapChange24h?: string;
  public cgMarketCapChangePercentage24h?: string;
  public cgCirculatingSupply?: string;
  public cgTotalSupply?: string;
  public cgMaxSupply?: string;
  public cgAth?: string;
  public cgAthChangePercentage?: string;
  public cgAthDate?: string;
  public cgAtl?: string;
  public cgAtlChangePercentage?: string;
  public cgAtlDate?: string;
  public cgPriceChangePercentage7dInCurrency?: string;
  public cgLastUpdated?: string;
  public banner?: number;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;
  public sparkLineIn7d?: any[];

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
    sparkLineIn7d
    }: CurrencyModelInterface) {
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
    this.sparkLineIn7d = sparkLineIn7d;

  }
}
