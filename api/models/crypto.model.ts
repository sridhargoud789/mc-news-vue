import { CryptoModelInterface } from '../interfaces/crypto.model.interface';


export class CryptoModel {
  public id: number;
  public order?: number;
  public active?: boolean;
  public slug?: string;
  public urlCrypto?: string;
  public urlCryptoWallpaper?: string;
  public academyDescription?: string;
  public urlAcademyNotice?: string;
  public urlTokenomic?: string;
  public tagId?: number
  public apiCryptoId?: number
  public languageId?: number
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;
  public apiCrypto?: any;
  public tag?: any;
  public wallet?: any[];
  public explorer?: any[];
  public community?: any[];
  public random?: any;

  constructor({
    id,
    order,
    active,
    slug,
    urlCrypto,
    urlCryptoWallpaper,
    academyDescription,
    urlAcademyNotice,
    urlTokenomic,
    tagId,
    apiCryptoId,
    languageId,
    createdAt,
    updatedAt,
    deletedAt,
    apiCrypto,
    tag,
    wallet,
    explorer,
    community,
    random,
  }: CryptoModelInterface) {
      this.id = id;
      this.order = order;
      this.active = active;
      this.slug = slug;
      this.urlCrypto = urlCrypto;
      this.urlCryptoWallpaper = urlCryptoWallpaper;
      this.academyDescription = academyDescription;
      this.urlAcademyNotice = urlAcademyNotice;
      this.urlTokenomic = urlTokenomic;
      this.tagId = tagId;
      this.apiCryptoId = apiCryptoId;
      this.languageId = languageId;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
      this.deletedAt = deletedAt;
      this.apiCrypto = apiCrypto;
      this.tag = tag;
      this.wallet = wallet;
      this.explorer = explorer;
      this.community = community;
      this.random = random;
  }
}
