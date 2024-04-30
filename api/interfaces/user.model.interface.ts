import { FavoritesCryptoModelInterface } from "../interfaces/favorite.cryptos.model.interface";

export interface UserModelInterface {
  id: string;
  name?: string;
  email?: string;
  dateBirth?: string;
  gender?: string;
  role?: string;
  levelCrypto?: string;
  newsletterName?: string;
  newsletterCode?: string;
  emailVerifiedAt?: string;
  twoFactorSecret?: string;
  twoFactorRecoveryCodes?: string;
  adult?: string;
  acceptPrivatePolicy?: number;
  roleId?: number;
  levelId?: number;
  languageId?: number;
  newsletterId?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  avatar?: string;
  favoritesCryptos?: FavoritesCryptoModelInterface[];
}
