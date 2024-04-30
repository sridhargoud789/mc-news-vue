import { LanguageModelInterface } from "./language.model.interface";

export interface ArticleTranslationModelInterface {
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
  language?: LanguageModelInterface;
}
