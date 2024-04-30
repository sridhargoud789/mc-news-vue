import { LevelResponseInterface } from "./level.response.interface";

export interface ArticleResponseInterface {
  id: number;
  views_number?: number;
  reading_time?: number;
  url_video?: string;
  url_video_main?: string;
  appears_home?: number;
  image?: string;
  url_image?: string;
  url_image_mobile?: string;
  url_image_thumbnail?: string;
  image_alt?: string;
  meta_description?: string;
  author_id?: number;
  status_id?: number;
  level_id?: number;
  api_crypto_id?: number;
  language_id?: number;
  category_id?: number;
  created_at?: string;
  updated_at?: string;
  author?: any;
  level?: LevelResponseInterface;
  category?: any;
  articlelanguage?: any[];
}
