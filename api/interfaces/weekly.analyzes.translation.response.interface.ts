import { Language } from "./language.interface"

export interface WeeklyAnalyzesTranslationResponseInterface {
  id: number;
  weekly_analysis_id?: number;
  language_id?: number;
  home_description?: string;
  content?: string;
  url_academy?: string;
  slug?: string;
  url_video?: string;
  created_at?: string;
  updated_at?: string;
  language?: Language;
}
