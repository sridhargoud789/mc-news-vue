import { WeeklyCryptoModelInterface } from "~/interfaces/weekly.crypto.model.interface";


export class WeeklyCryptoModel {
  public id: number;
  public authorId?: number;
  public statusId?: number;
  public apiCryptoId?: number;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;
  public image?: string;
  public translation?: any[];
  public author?: any;
  public status?: any;
  public tags?: any[];
  public apiCrypto?: any;
  constructor({
    id,
    authorId,
    statusId,
    apiCryptoId,
    createdAt,
    updatedAt,
    deletedAt,
    image,
    translation,
    author,
    status,
    tags,
    apiCrypto}: WeeklyCryptoModelInterface) {
    this.id = id;
    this.authorId = authorId;
    this.statusId = statusId;
    this.apiCryptoId = apiCryptoId;
    this.createdAt = createdAt;
    this.updatedAt =updatedAt;
    this.deletedAt = deletedAt;
    this.image = image;
    this.translation = translation;
    this.author = author;
    this.status = status;
    this.tags = tags;
    this.apiCrypto = apiCrypto;

  }
}
// How are you?
// I'm fine.
// And you?
// I'm fine.
// Can you create a WeeklyCryptoModelInterface?
// Yes, you can.
// So, what is it?
// It's an interface, based on the WeeklyCryptoModel.
// It's a class, but without the constructor.
// Yes.
// I show.
