

export interface CryptoModelInterface {
  id: number;
  order?: number;
  active?: boolean;
  slug?: string;
  urlCrypto?: string;
  urlCryptoWallpaper?: string;
  academyDescription?: string;
  urlAcademyNotice?: string;
  urlTokenomic?: string;
  tagId?: number
  apiCryptoId?: number
  languageId?: number
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  apiCrypto?: any;
  tag?: any;
  wallet?: any[];
  explorer?: any[];
  community?: any[];
}
