export interface ArticleTranslationResponseInterface {
  id: number;
  article_id?: number;
  language_id?: number;
  title?: string;
  slug?: string;
  content?: string;
  url_video?: string;
  url_video_main?: string;
  created_at?: string;
  updated_at?: string;
  language?: any;
}
