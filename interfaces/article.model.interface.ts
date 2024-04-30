export interface ArticleModelInterface {
  id: number;
  viewsNumber?: number;
  readingTime?: number;
  urlVideo?: string;
  urlVideoMain?: string;
  appearsHome?: number;
  image?: string;
  urlImage?: string;
  urlImageMobile?: string;
  urlImageThumbnail?: string;
  imageAlt?: string;
  metaDescription?: string;
  authorId?: number;
  statusId?: number;
  levelId?: number;
  apiCryptoId?: number;
  languageId?: number;
  categoryId?: number;
  createdAt?: string;
  updatedAt?: string;
  author?: any;
  level?: any;
  category?: any;
  articleTranslations?: any[];
}
