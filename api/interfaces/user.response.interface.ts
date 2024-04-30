import { FavoriteCryptoResponseInterface } from './favorite.crypto.response.interface'

export interface UserResponseInterface {
  id: string;
  name?: string;
  email?: string;
  date_birth?: string;
  gender?: string;
  role?: string;
  level_crypto?: string;
  level_id?:number;
  newsletter_name?: string;
  newsletter_code?: string;
  fav_cryptos?: FavoriteCryptoResponseInterface[]
}
