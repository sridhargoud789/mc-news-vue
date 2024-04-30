export interface CryptoResponseInterface {
  id: number;
  order: number;
  active: boolean;
  slug: string;
  url_crypto: string;
  url_crypto_wallpaper: string;
  academy_description: string;
  url_academy_notice: string;
  url_tokenomic: string;
  tag_id: number
  api_crypto_id: number
  language_id: number
  created_at: string;
  updated_at: string;
  deleted_at: string;
  apicrypto: any;
  tag: any;
  wallet: any[]
  explorer: any[]
  community: any[]
}
