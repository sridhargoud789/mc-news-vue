import { LanguageModelInterface } from './language.model.interface';

export interface NewTranslationModelInterface {
  id: number;
  noticeId?: number;
  languageId?: number;
  title?: string;
  subtitle?: string;
  slug?: string;
  content?: string;
  urlVideo?: string;
  videoDescription?: string;
  createdAt?: any;
  updatedAt?: any;
  language?: LanguageModelInterface[];
}
