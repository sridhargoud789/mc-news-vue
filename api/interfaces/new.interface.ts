import { Author, Category, NewTranslation,  NewTag } from ".";

export interface New {
  id:                  number;
  views_number:        number;
  reading_time:        number;
  url_video:           null;
  video_description:   null;
  appears_home:        number;
  image_description:   null;
  image_alt:           null;
  url_image:           string;
  url_image_mobile:    string;
  url_image_thumbnail: string;
  meta_description:    string;
  real_author:         string;
  disclaimer_notice:   string;
  real_date:           null;
  especial_date:       null;
  author_id:           number;
  status_id:           number;
  category_id:         number;
  api_crypto_id:       number | null;
  language_id:         number;
  subcategory_id:      number | null;
  created_at:          Date;
  updated_at:          Date;
  author:              Author;
  category:            Category;
  subcategory:         Category | null;
  noticetag:           NewTag[];
  noticelanguage:      NewTranslation[];
}
