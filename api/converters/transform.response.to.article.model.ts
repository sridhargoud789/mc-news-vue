import { ArticleResponseInterface } from '../interfaces/article.response.interface';
import { ArticleModel } from '../models/article.model';
import { transformResponseLevelToLevelModel, transformCategoryResponseToCategoryModel, transformTranslationResponseToArticleTranslationModel } from './';


export const transformResponseToArticleModel = (article: ArticleResponseInterface): ArticleModel => new ArticleModel({
  id: article.id,
  viewsNumber: article.views_number,
  readingTime: article.reading_time,
  urlVideo: article.url_video,
  urlVideoMain: article.url_video_main,
  appearsHome: article.appears_home,
  image: article.image,
  urlImage: article.url_image,
  urlImageMobile: article.url_image_mobile,
  urlImageThumbnail: article.url_image_thumbnail,
  imageAlt: article.image_alt,
  metaDescription: article.meta_description,
  authorId: article.author_id,
  statusId: article.status_id,
  levelId: article.level_id,
  apiCryptoId: article.api_crypto_id,
  languageId: article.language_id,
  categoryId: article.category_id,
  createdAt: article.created_at,
  updatedAt: article.updated_at,
  author: article.author,
  level: article.level !== null ? transformResponseLevelToLevelModel( article.level! ) : null,
  category: transformCategoryResponseToCategoryModel( article.category ),
  articleTranslations: article.articlelanguage !== null ? article.articlelanguage!.map( (translation) => transformTranslationResponseToArticleTranslationModel( translation ) ) : [],
});
