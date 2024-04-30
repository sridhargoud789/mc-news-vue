import { PageModelInterface } from "../interfaces/page.model.interface";
import { LanguageModelInterface } from "~/interfaces";
import { TranslationPageModelInterface } from "~/interfaces/translation.page.model.interface";


export class PageModel {
  public id: number;
  public title?: string;
  public subtitle?: string;
  public content?: string;
  public templateId?: number;
  public languageId?: number;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;
  public image?: string;
  public translation?: TranslationPageModelInterface;
  public language?: LanguageModelInterface;

  constructor({
    id,
    title,
    subtitle,
    content,
    templateId,
    languageId,
    createdAt,
    updatedAt,
    deletedAt,
    image,
    translation,
    language,
  }: PageModelInterface) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.content = content;
    this.templateId = templateId;
    this.languageId = languageId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.image = image;
    this.translation = translation;
    this.language = language;
  }
}
