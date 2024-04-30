import { LanguageModelInterface } from "~/interfaces/language.model.interface";
import { TranslationPageModelInterface } from "~/interfaces/translation.page.model.interface";

export interface PageModelInterface {
  id: number;
  title?: string;
  subtitle?: string;
  content?: string;
  templateId?: number;
  languageId?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  image?: string;
  translation?: TranslationPageModelInterface;
  language?: LanguageModelInterface;
}
