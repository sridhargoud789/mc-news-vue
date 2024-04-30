import { FavoriteCryptoModel } from "./favorite.crypto.model";
import { UserModelInterface } from "~/interfaces/user.model.interface";


export class UserModel {
  public id: string;
  public name?: string;
  public email?: string;
  public dateBirth?: string;
  public gender?: string;
  public role?: string;
  public levelCrypto?: string;
  public newsletterName?: string;
  public newsletterCode?: string;
  public emailVerifiedAt?: string;
  public twoFactorSecret?: string;
  public twoFactorRecoveryCodes?: string;
  public adult?: string;
  public acceptPrivatePolicy?: number;
  public roleId?: number;
  public levelId?: number;
  public languageId?: number;
  public newsletterId?: number;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;
  public avatar?: string;
  public favoritesCryptos?: FavoriteCryptoModel[];
  constructor({
    id,
    name,
    email,
    dateBirth,
    gender,
    role,
    levelCrypto,
    newsletterName,
    newsletterCode,
    emailVerifiedAt,
    twoFactorSecret,
    twoFactorRecoveryCodes,
    adult,
    acceptPrivatePolicy,
    roleId,
    levelId,
    languageId,
    newsletterId,
    createdAt,
    updatedAt,
    deletedAt,
    avatar,
    favoritesCryptos,
  }: UserModelInterface){
    this.id = id;
    this.name = name;
    this.email = email;
    this.dateBirth = dateBirth;
    this.gender = gender;
    this.role = role;
    this.levelCrypto = levelCrypto;
    this.newsletterName = newsletterName;
    this.newsletterCode = newsletterCode;
    this.emailVerifiedAt = emailVerifiedAt;
    this.twoFactorSecret = twoFactorSecret;
    this.twoFactorRecoveryCodes = twoFactorRecoveryCodes;
    this.adult = adult;
    this.acceptPrivatePolicy = acceptPrivatePolicy;
    this.roleId = roleId;
    this.levelId = levelId;
    this.languageId = languageId;
    this.newsletterId = newsletterId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.avatar = avatar;
    this.favoritesCryptos = favoritesCryptos;
  }
}
