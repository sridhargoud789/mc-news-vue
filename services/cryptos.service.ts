import type { NuxtAxiosInstance } from '@nuxtjs/axios';
import { CryptoModel } from '~/models/crypto.model';
import { CryptosCurrenciesResponseInterface } from '~/api/interfaces/crypto.currencies.response.interface';
import { CryptoResponseInterface } from '~/api/interfaces/crypto.response.interface';
import { CurrenciesResponseInterface } from '~/api/interfaces/currencies.response.interface';
import { CurrencyModel } from '~/models/currency.model';
import { CurrencyResponseInterface } from '~/api/interfaces/currency.response.interface';
import { ApiCryptoResponseInterface } from '~/api/interfaces/api.crypto.response.interface';
import { ApiCryptoModel } from '~/models/api.crypto.model';
import { CryptosCurrenciesCoinsResponseInterface } from '~/api/interfaces/cryptos.currencies.coins.response.interface';

interface getListCryptosProps {
  page: { type: number; default: 1 };
  perPage: { type: number; default: 20 };
  target: { type: string; default: '' };
}

interface getListCryptosCoinsProps {
  target: { type: string; default: '' };
  params: { type: Map<any, string> };
}

export class CryptosService {

  $api: NuxtAxiosInstance

  constructor(api: any) {
    this.$api = api
  }

  // {{url_base}}/api/cryptocurrencies/top-cryptos?page=1&per_page=100
  getListCryptos = async ( {
    page,
    perPage,
    target
  }: getListCryptosProps ): Promise<CryptoModel[] | undefined> => {
    const resource: string = 'v1/cryptocurrencies/';
    try {
      const response = await this.$api
        .get<CryptosCurrenciesResponseInterface>(`${resource}${target}?page=${page}&per_page=${perPage}`)
        .then((response) => response.data)
        .catch((error) => {
          console.error(
            'The error occurred: ' +
              error +
              'when the resource was called: ' +
              resource
          )
          return null
        });
      if ( response == null ) return [];
      if ( response.cryptos == null ) return [];
      if ( response.cryptos.data == null ) return [];
      const cryptos = response!.cryptos!.data ?? [];
      const cryptosList = cryptos.map((crypto: CryptoResponseInterface ) => this.transformCryptoResponseToCryptoModel(crypto));
      return cryptosList;
    } catch ( error ) {
      console.log(error);
    }
  }

  getListCryptosCoins = async ( {
    target,
    params
  }: getListCryptosCoinsProps ): Promise<CryptoModel[] | undefined> => {
    const resource: string = 'v1/cryptocurrencies/';
    let queryParams = '';
    if ( typeof params !== "undefined" ) {
      Object.entries(params).forEach(( value: any, index: number ) => {
        queryParams += index === 0 ? '?' : '&';
        queryParams += `&${value[0]}=${value[1]}`;
      });
    }
    try {
      const response = await this.$api
        .get<CryptosCurrenciesCoinsResponseInterface>(`${resource}${target}${queryParams}`)
        .then((response) => response.data)
        .catch((error) => {
          console.error(
            'The error occurred: ' +
              error +
              ' when the resource was called: ' +
              resource
          )
          return null
        });
      if ( response == null ) return [];
      if ( response.cryptocurrencies == null ) return [];
      if ( response.cryptocurrencies.data == null ) return [];
      const cryptos = response.cryptocurrencies.data ?? [];
      const cryptosList = cryptos.map((crypto: CryptoResponseInterface ) => this.transformApiCryptoResponseToApiCryptoModel(crypto));
      return cryptosList;
    } catch ( error ) {
      console.log(error);
    }
  }

  transformCryptoResponseToCryptoModel = (crypto: CryptoResponseInterface): CryptoModel => new CryptoModel({
    id: crypto.id,
    order: crypto.order,
    active: crypto.active,
    slug: crypto.slug,
    urlCrypto: crypto.url_crypto,
    urlCryptoWallpaper: crypto.url_crypto_wallpaper,
    academyDescription: crypto.academy_description,
    urlAcademyNotice: crypto.url_academy_notice,
    urlTokenomic: crypto.url_tokenomic,
    tagId: crypto.tag_id,
    apiCryptoId: crypto.api_crypto_id,
    languageId: crypto.language_id,
    createdAt: crypto.created_at,
    updatedAt: crypto.updated_at,
    deletedAt: crypto.deleted_at,
    apiCrypto: this.transformApiCryptoResponseToApiCryptoModel( crypto.apicrypto ),
    tag: crypto.tag,
    wallet: crypto.wallet,
    explorer: crypto.explorer,
    community: crypto.community
  });

  getListCoinsToBanner = async (): Promise<CurrencyModel[] | undefined> => {
    const resource: string = '/cryptocurrencies/banner-coins';
    try {
      const response = await this.$api
        .get<CurrenciesResponseInterface>(`${resource}`)
        .then((response) => response.data)
        .catch((error) => {
          console.error(
            'The error occurred: ' +
              error +
              'when the resource was called: ' +
              resource
          )
          return null
        });
      if ( response == null ) return [];
      if ( response.cryptocurrencies == null ) return [];
      const cryptoCurrencies = response!.cryptocurrencies ?? [];
      const cryptoCurrenciesList = cryptoCurrencies.map(
        (currency: CurrencyResponseInterface ) =>
          this.transformCurrencyResponseToModel(currency));
      return cryptoCurrenciesList;
    } catch ( error ) {
      console.log(error)
    }
  }

  transformCurrencyResponseToModel = (currency: CurrencyResponseInterface): CurrencyModel => new CurrencyModel({
    id: currency.id,
    order: currency.order,
    slug: currency.slug,
    cgId: currency.cg_id,
    cgSymbol: currency.cg_symbol,
    cgName: currency.cg_name,
    cgImage: currency.cg_image,
    cgCurrentPrice: currency.cg_current_price,
    cgMarketCap: currency.cg_market_cap,
    cgMarketCapRank: currency.cg_market_cap_rank,
    cgFullyDilutedValuation: currency.cg_fully_diluted_valuation,
    cgTotalVolume: currency.cg_total_volume,
    cgHigh24h: currency.cg_high_24h,
    cgLow24h: currency.cg_low_24h,
    cgPriceChange24h: currency.cg_price_change_24h,
    cgPriceChangePercentage24h: currency.cg_price_change_percentage_24h,
    cgMarketCapChange24h: currency.cg_market_cap_change_24h,
    cgMarketCapChangePercentage24h: currency.cg_market_cap_change_percentage_24h,
    cgCirculatingSupply: currency.cg_circulating_supply,
    cgTotalSupply: currency.cg_total_supply,
    cgMaxSupply: currency.cg_max_supply,
    cgAth: currency.cg_ath,
    cgAthChangePercentage: currency.cg_ath_change_percentage,
    cgAthDate: currency.cg_ath_date,
    cgAtl: currency.cg_atl,
    cgAtlChangePercentage: currency.cg_atl_change_percentage,
    cgAtlDate: currency.cg_atl_date,
    cgPriceChangePercentage7dInCurrency: currency.cg_price_change_percentage_7d_in_currency,
    cgLastUpdated: currency.cg_last_updated,
    banner: currency.banner,
    createdAt: currency.created_at,
    updatedAt: currency.updated_at,
    deletedAt: currency.deleted_at,
    sparkLineIn7d: currency.sparklinein7d,
  });

  transformApiCryptoResponseToApiCryptoModel = ( apiCrypto: ApiCryptoResponseInterface ) => new ApiCryptoModel({
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
}
