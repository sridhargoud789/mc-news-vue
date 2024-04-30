import { LanguageModelInterface } from './language.model.interface';


export interface WeeklyCryptoTranslationModelInterface {
  id: number;
  weekCryptoId?: number;
  languageId?: number;
  homeDescription?: string;
  analysis?: string;
  content?: string;
  urlAcademy?: string;
  slug?: string;
  urlVideo?: string;
  urlNotice?: string;
  createdAt?: string;
  updatedAt?: string;
  language?: LanguageModelInterface;
}
