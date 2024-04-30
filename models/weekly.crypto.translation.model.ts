import { LanguageModel } from "./language.model";
import { WeeklyCryptoTranslationModelInterface } from "~/interfaces/weekly.crypto.translation.model.interface";

export class WeeklyCryptoTranslationModel {
  public id: number;
  public weekCryptoId?: number;
  public languageId?: number;
  public homeDescription?: string;
  public analysis?: string;
  public content?: string;
  public urlAcademy?: string;
  public slug?: string;
  public urlVideo?: string;
  public urlNotice?: string;
  public createdAt?: string;
  public updatedAt?: string;
  public language?: LanguageModel;

  constructor({
    id,
    weekCryptoId,
    languageId,
    homeDescription,
    analysis,
    content,
    urlAcademy,
    slug,
    urlVideo,
    urlNotice,
    createdAt,
    updatedAt,
    language
  }: WeeklyCryptoTranslationModelInterface ) {
    this.id = id;
    this.weekCryptoId = weekCryptoId;
    this.languageId = languageId;
    this.homeDescription = homeDescription;
    this.analysis = analysis;
    this.content = content;
    this.urlAcademy = urlAcademy;
    this.slug = slug;
    this.urlVideo = urlVideo;
    this.urlNotice = urlNotice;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.language = language;
  }

}
