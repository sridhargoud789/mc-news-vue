// When created a new service, you need to add the following code:
import type { NuxtAxiosInstance } from '@nuxtjs/axios';
import { ApiCryptoResponseInterface } from '../api/interfaces/api.crypto.response.interface';
import { ApiCryptoModel } from '../models/api.crypto.model';
import { WeeklyCryptoTranslationResponseInterface } from '../api/interfaces/weekly.crypto.translation.response.interface';
import { Code } from '~/api/enums';
import { WeeklyCryptosResponseInterface } from "~/api/interfaces/weekly.cryptos.response.interface";
import { WeeklyCryptoModel } from '~/models/weekly.crypto.model';
import { WeeklyCryptoTranslationModel } from '~/models/weekly.crypto.translation.model';
import { LanguageModel } from '~/models/language.model';
import { Language } from '~/api/interfaces';

export class WeeklyCryptoService {
  $api: NuxtAxiosInstance

  constructor(api: any) {
    this.$api = api
  }

  getListWeeklyCrypto = async ( code: { type: Code; default: Code.ESP } ) => {
    const resource: string = 'weekcrypto';

    try {
      const response = await this.$api
        .get<WeeklyCryptosResponseInterface>(`${resource}?language=${code}`)
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
      if ( response.weekcrypto == null ) return [];
      const weeklyCryptoSingle = response!.weekcrypto ?? [];
      const weeklyCrypto: WeeklyCryptoModel | undefined = new WeeklyCryptoModel({
        id: weeklyCryptoSingle.id,
        authorId: weeklyCryptoSingle.author_id,
        statusId: weeklyCryptoSingle.status_id,
        apiCryptoId: weeklyCryptoSingle.api_crypto_id,
        createdAt: weeklyCryptoSingle.created_at,
        updatedAt: weeklyCryptoSingle.updated_at,
        deletedAt: weeklyCryptoSingle.deleted_at,
        image: weeklyCryptoSingle.image,
        translation: weeklyCryptoSingle.weekcryptolanguage.map((translation: WeeklyCryptoTranslationResponseInterface) => this.transformWeeklyCryptoTranslationResponseToWeeklyCryptoTranslationModel( translation )),
        author: weeklyCryptoSingle.author,
        status: weeklyCryptoSingle.status,
        tags: weeklyCryptoSingle.tags,
        apiCrypto: this.transformApiCryptoResponseToApiCryptoModel( weeklyCryptoSingle.apicrypto ),
      });
      return weeklyCrypto;
    } catch ( error ) {
      console.log(error)
    }
  }

  transformWeeklyCryptoTranslationResponseToWeeklyCryptoTranslationModel = ( translation:  WeeklyCryptoTranslationResponseInterface ) => new WeeklyCryptoTranslationModel({
    id: translation.id,
    weekCryptoId: translation.week_crypto_id,
    languageId: translation.language_id,
    homeDescription: translation.home_description,
    analysis: translation.analysis,
    content: translation.content,
    urlAcademy: translation.url_academy,
    slug: translation.slug,
    urlVideo: translation.url_video,
    urlNotice: translation.url_notice,
    createdAt: translation.created_at,
    updatedAt: translation.updated_at,
    language: this.transformLanguageResponseToLanguageModel( translation.language! ),
  })

  transformLanguageResponseToLanguageModel = (language: Language): LanguageModel => new LanguageModel({
    id: language.id,
    code: language.code,
    name: language.name,
    createdAt: language.created_at,
    updatedAt: language.updated_at,
    deletedAt: language.deleted_at,
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
// Hello Copilot, the previous video was fail.
// I'm trying to understand what is the problem.
// I'm present to the peoples of my WhatsApp status.
// Reguards,
// No, your reguard the peples of my WhatsApp status.
