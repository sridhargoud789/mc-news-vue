import { ArticleTranslationModelInterface } from '../interfaces/article.translation.model.interface';

import { LanguageModel } from './language.model';

export class ArticleTranslationModel {
  id: number;
  articleId?: number;
  languageId?: number;
  title?: string;
  slug?: string;
  content?: string;
  urlVideo?: string;
  urlVideoMain?: string;
  createdAt?: string;
  updatedAt?: string;
  language?: LanguageModel;

  // Declare constructor
  constructor({
    id,
    articleId,
    languageId,
    title,
    slug,
    content,
    urlVideo,
    urlVideoMain,
    createdAt,
    updatedAt,
    language,
   }: ArticleTranslationModelInterface) {
    this.id = id;
    this.articleId = articleId;
    this.languageId = languageId;
    this.title = title;
    this.slug = slug;
    this.content = content;
    this.urlVideo = urlVideo;
    this.urlVideoMain = urlVideoMain;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.language = language;
  }
}
