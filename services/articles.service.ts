import type { NuxtAxiosInstance } from '@nuxtjs/axios';
import { ArticlesResponseInterface } from '../api/interfaces/articles.response.interface';
import { LevelResponseInterface } from '../api/interfaces/level.response.interface';
import { ArticleSingleResponseInterface } from '../api/interfaces/article.single.response.interface';
import { ArticleModel } from '~/models/article.model';
import { Code } from '~/api/enums';
import { ArticleResponseInterface } from '~/api/interfaces/article.response.interface';
import { ArticlesListResponseInterface } from '~/api/interfaces/articles.list.response.interface';
import { LevelModel } from '~/models/level.model';
import { ArticleTranslationResponseInterface } from '~/api/interfaces/article.translation.response.interface';
import { ArticleTranslationModel } from '~/models/article.translation.model';
import { Category, Language } from '~/api/interfaces';
import { LanguageModel } from '~/models/language.model';
import { CategoryModel } from '~/models/category.model';
import { ArticlesCategoriesResponseInterface } from '~/api/interfaces/article.categories.response.interface';

export class ArticlesService {
  $api: NuxtAxiosInstance;

  constructor(api: any) {
    this.$api = api
  }

  getArticlesListForHome = async (code: {
    type: Code
    default: Code.ESP
  }): Promise<ArticleModel[] | undefined> => {
    const resource: string = 'home-articles';
    try {
      const response = await this.$api
        .get<ArticlesResponseInterface>(`${resource}?language=${code}`)
        .then((response) => response.data)
        .catch((error) => {
          console.error(
            'The error occurred: ' +
              error +
              'when the resource was called: ' +
              resource
          )
          return null
        });

      if (response === null) return [];
      if (response.articles == null ) return [];

      const articlesList = response!.articles ?? [];

      const articles: ArticleModel[] | undefined = articlesList.map(
        (article: ArticleResponseInterface) => this.transformResponseToArticleModel(article)
      );
      return articles
    } catch (error) {
      console.log(error)
    }
  }

  getListArticles = async ( params: Map<any, string> ) => {
    const resource: string = 'articles';
    let queryParams = '';
    if ( typeof params !== "undefined" ) {
      Object.entries(params).forEach(( value: any ) => {
        queryParams += `&${value[0]}=${value[1]}`;
      });
    }
    try {
      const response = await this.$api
        .get<ArticlesListResponseInterface>(`${resource}?${queryParams}`)
        .then((response) => response.data)
        .catch((error) => {
          console.error(
            'The error occurred: ' +
              error +
              'when the resource was called: ' +
              resource
          )
          return null
        });
      if (response === null) return [];
      if (response.articles == null ) return [];
      if (response.articles?.data == null ) return [];
      const articlesList = response!.articles!.data ?? [];
      const articles: ArticleModel[] | undefined = articlesList.map(
        ( article: ArticleResponseInterface ) => this.transformResponseToArticleModel(article)
      )
      return articles;
    } catch (error) {
      console.log(error);
    }
  }

  transformResponseToArticleModel = (article: ArticleResponseInterface): ArticleModel => new ArticleModel({
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
    level: article.level !== null ? this.transformResponseLevelToLevelModel( article.level! ) : null,
    category: this.transformCategoryResponseToCategoryModel( article.category ),
    articleTranslations: article.articlelanguage !== null ? article.articlelanguage!.map( (translation) => this.transformTranslationResponseToArticleTranslationModel( translation ) ) : [],
  });

  transformResponseLevelToLevelModel = (level: LevelResponseInterface): any => new LevelModel({
    id: level.id,
    code: level.code,
    name: level.name,
    createdAt: level.created_at,
    updatedAt: level.updated_at,
    deletedAt: level.deleted_at,
  });

  transformTranslationResponseToArticleTranslationModel = (translation: ArticleTranslationResponseInterface): ArticleTranslationModel => new ArticleTranslationModel({
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
    language: this.transformLanguageResponseToLanguageModel( translation.language ),
  });

  transformLanguageResponseToLanguageModel = (language: Language): LanguageModel => new LanguageModel({
    id: language.id,
    code: language.code,
    name: language.name,
    createdAt: language.created_at,
    updatedAt: language.updated_at,
    deletedAt: language.deleted_at,
  });

  transformCategoryResponseToCategoryModel = (category: Category): CategoryModel  => new CategoryModel({
    id: category.id,
    name: category.name,
    slug: category.slug,
    createdAt: category.created_at,
    updatedAt: category.updated_at,
    deletedAt: category.deleted_at,
    languageId: category.language_id,
  });

  getArticleBySlug = async (slug: {type: string, default: ''}): Promise<ArticleModel | undefined> => {
    const resource: string = 'article';
    try {
      const response = await this.$api
        .get<ArticleSingleResponseInterface>(`${resource}/${slug}`)
        .then((resp) => resp.data)
        .catch((error) => {
          console.error(
            'The error occurred: ' +
              error +
              'when the resource was called: ' +
              resource
          )
          return null
        });
      if (response === null) return;
      if (response.article === null) return;
      const articleResponse = response.article;
      const articleModel: ArticleModel = this.transformResponseToArticleModel(articleResponse);
      return articleModel;
    } catch (error) { console.log(error) }
  }

  getListAllTagsOfArticles = async (): Promise<CategoryModel[] | undefined> => {
    const resource: string = 'article-categories';
    try {
      const response = await this.$api
        .get<ArticlesCategoriesResponseInterface>(`${resource}`)
        .then((resp) => resp.data)
        .catch((error) => {
          console.error(
            'The error occurred: ' +
              error +
              'when the resource was called: ' +
              resource
          )
          return null
        });
      if (response === null) return;
      if (response.categories === null) return;
      const categoriesResponse = response.categories;
      const categoryModel: CategoryModel[] = categoriesResponse.map(
        (category: Category) =>
          this.transformCategoryResponseToCategoryModel( category ) );
      return categoryModel;
    } catch (error) { console.log(error) }
  }
}
