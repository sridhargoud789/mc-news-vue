import { ArticleTranslationResponseInterface } from '../interfaces/article.translation.response.interface';
import { ArticleTranslationModel } from '../models/article.translation.model';
import { transformLanguageResponseToLanguageModel } from './';

export const transformTranslationResponseToArticleTranslationModel = (translation: ArticleTranslationResponseInterface): ArticleTranslationModel => new ArticleTranslationModel({
  id: translation.id,
  articleId: translation.article_id,
  languageId: translation.language_id,
  title: translation.title,
  slug: translation.slug,
  content: translation.content,
  urlVideo: translation.url_video,
  urlVideoMain: translation.url_video_main,
  createdAt: translation.created_at,
  updatedAt: translation.updated_at,
  language: transformLanguageResponseToLanguageModel( translation.language ),
});
