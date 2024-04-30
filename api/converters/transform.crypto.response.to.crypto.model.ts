import { CryptoResponseInterface } from '../interfaces/crypto.response.interface';
import { CryptoModel } from '../models/crypto.model';
import { transformApiCryptoResponseToApiCryptoModel } from '.';


export const transformCryptoResponseToCryptoModel = (crypto: CryptoResponseInterface): CryptoModel => new CryptoModel({
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
  apiCrypto: transformApiCryptoResponseToApiCryptoModel( crypto.apicrypto ),
  tag: crypto.tag,
  wallet: crypto.wallet,
  explorer: crypto.explorer,
  community: crypto.community
});
