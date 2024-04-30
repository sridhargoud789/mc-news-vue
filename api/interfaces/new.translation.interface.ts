import { Language } from "./language.interface";

export interface NewTranslation {
  id:                number;
  notice_id:         number;
  language_id:       number;
  title:             string;
  subtitle:          string;
  slug:              string;
  content:           string;
  url_video:         null;
  video_description: null;
  created_at:        Date;
  updated_at:        Date;
  language:          Language;
}
