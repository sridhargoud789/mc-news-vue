import { LanguageModelInterface } from './language.model.interface';

export interface WeeklyAnalyzesTranslationModelInterface {
  id: number;
  weeklyAnalysisId?: number;
  languageId?: number;
  homeDescription?: string;
  content?: string;
  urlAcademy?: string;
  slug?: string;
  urlVideo?: string;
  createdAt?: string;
  updatedAt?: string;
  language?: LanguageModelInterface;
}
