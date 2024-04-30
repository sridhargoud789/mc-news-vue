import { Language } from "./language.interface";

export interface WeeklyCryptoTranslationResponseInterface {
  id: number;
  week_crypto_id: number;
  language_id: number;
  home_description: string;
  analysis: string;
  content: string;
  url_academy: string;
  slug: string;
  url_video: string;
  url_notice: string;
  created_at: string;
  updated_at: string;
  language: Language;
}
