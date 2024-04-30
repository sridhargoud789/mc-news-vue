import type { NuxtAxiosInstance } from '@nuxtjs/axios';
import { NewResponse } from '../api/interfaces/new.response.interface';
import { transformNewToNewModel } from '~/api/converters';
import { Code } from '~/api/enums';
import { New, NewsResponse } from '~/api/interfaces';
import { NewModel } from '~/models/new.model';

interface getListNewsProps {
  page: { type: number; default: 1 }
  perPage: { type: number; default: 20 }
  code: { type: Code; default: Code.ESP }
}

interface getListNewsByCategoryProps {
  category: { type: string; default: 'cryptos' };
  target: string;
  params: Map<any, string>;
}

interface getListNewsByParamsProps {
  params: Map<any, string>;
}

export class NewsService {
  $api: NuxtAxiosInstance

  constructor(api: any) {
    this.$api = api
  }

  getListNews = async ({
    page,
    perPage,
    code,
  }: getListNewsProps): Promise<NewModel[] | undefined> => {
    const resource: string = 'notices';
    const response = await this.$api
      .get<NewsResponse>(
        `${resource}?page=${page}&per_page=${perPage}&language=${code}`
      )
      .then((response) => response.data)
      .catch((error) => {
        throw error;
        //   console.error( `The error occurred: ${ error } when the resource was called: ${ resource }` )
        // return [];
      });
    if (response === null) return []
    if (response.notices === null) return []
    if (response.notices.data === null) return []
    const news: NewModel[] | undefined = response?.notices.data.map(
      (element: New) => transformNewToNewModel(element)
    )
    return news;
  }

  getListNewsByParams = async ({params}: getListNewsByParamsProps): Promise<NewModel[] | undefined> => {
    const resource: string = 'notices';
    let queryParams = '';
    if ( typeof params !== "undefined" ) {
      Object.entries(params).forEach(( value: any, index: number ) => {
        queryParams += index === 0 ? '?' : '&';
        queryParams += `${value[0]}=${value[1]}`;
      });
    }
    try {
      const response = await this.$api
        .get<NewsResponse>(
          `${resource}${queryParams}`
        )
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
      if (response.notices === null) return [];
      if (response.notices.data === null) return [];
      const newsList = response!.notices!.data ?? []
      const news: NewModel[] | undefined = newsList.map(
        (element: New) => transformNewToNewModel(element)
      )
      return news
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * @author Rafael Duarte <elyouus94@gmail.com>
   * @date 29/03/2022
   * @description get a new
   */
  getNewBySlug = async (slug: { type: string; default: '' }): Promise<NewModel | undefined> => {
    const resource: string = 'notice';
    const response = await this.$api
      .get<NewResponse>(`${resource}/${slug}`)
      .then((resp) => resp.data)
      .catch((error) => {
        throw error;
      });
    if (response === null) return;
    if (response.notice === null) return;
    const newResponse = response.notice;
    const newModel: NewModel = transformNewToNewModel(newResponse);
    return newModel;
  }
  /* *#@- */

  // {{url_base}}/api/notices?category_slug=cryptos&appears_home=0&language=ESP&per_page=10
  getListNewsByCategory = async ({
    category,
    target,
    params,
  }: getListNewsByCategoryProps): Promise<NewModel[] | undefined> => {
    const resource: string = 'notices';
    let queryParams = '';
    if ( typeof params !== "undefined" ) {
      Object.entries(params).forEach(( value: any ) => {
        queryParams += `&${value[0]}=${value[1]}`;
      });
    }
    try {
      const response = await this.$api
        .get<NewsResponse>(
          `${resource}?${target}=${category}${queryParams}`
        )
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
      if (response.notices === null) return [];
      if (response.notices.data === null) return [];
      const newsList = response!.notices!.data ?? [];
      const news: NewModel[] | undefined = newsList.map(
        (element: New) => transformNewToNewModel(element)
      )
      return news
    } catch (error) {
      console.log(error)
    }
  }

  verifyNew = async (slug: string) => {
    const resource: string = 'notice';
    try {
      const response = await this.$api
        .get<NewsResponse>(
          `${resource}/verify/${slug}`
        )
        .then((response) => response.data)
        .catch((error) => error.response);
    if ( ! response ) return false;
    if ( response === '' ) return false;
    if ( response ) return true;

    } catch (error) {
      console.log(error)
    }
  }

  // resource+"?tag_slug="+tagId+"&page="+page+"&per_page="+number+"&language="+lang
  /*
  transformNewToNewModel = (element: New): NewModel => new NewModel({
    id: element.id,
    viewsNumber: element.views_number,
    readingTime: element.reading_time,
    urlVideo: element.url_video,
    videoDescription: element.video_description,
    appearsHome: element.appears_home,
    imageDescription: element.image_description,
    imageAlt: element.image_alt,
    urlImage: element.url_image,
    urlImageMobile: element.url_image_mobile,
    urlImageThumbnail: element.url_image_thumbnail,
    metaDescription: element.meta_description,
    realAuthor: element.real_author,
    disclaimerNotice: element.disclaimer_notice,
    realDate: element.real_date,
    especialDate: element.especial_date,
    authorId: element.author_id,
    statusId: element.status_id,
    categoryId: element.category_id,
    apiCryptoId: element.api_crypto_id,
    languageId: element.language_id,
    subcategoryId: element.subcategory_id,
    createdAt: element.created_at,
    updatedAt: element.updated_at,
    author: element.author,
    category: element.category !== null ? new CategoryModel({
      id: element.category!.id,
      name: element.category!.name,
      slug: element.category!.slug,
      languageId: element.category!.language_id,
      createdAt: element.category!.created_at,
      updatedAt: element.category!.updated_at,
      deletedAt: element.category!.deleted_at,
      noticeNumber: element.category!.notice_number,
      tagTypeId: element.category!.tag_type_id,
      categoryId: element.category!.category_id,
    }) : null,
    subcategory: element.subcategory !== null ? new CategoryModel({
      id: element.subcategory!.id,
      name: element.subcategory!.name,
      slug: element.subcategory!.slug,
      languageId: element.subcategory!.language_id,
      createdAt: element.subcategory!.created_at,
      updatedAt: element.subcategory!.updated_at,
      deletedAt: element.subcategory!.deleted_at,
      noticeNumber: element.subcategory!.notice_number,
      tagTypeId: element.subcategory!.tag_type_id,
      categoryId: element.subcategory!.category_id,
    }) : null,
    newTag: element.noticetag,
    newTranslation: element.noticelanguage.map(
      (translation: NewTranslation) =>
        new NewTranslationModel({
          id: translation.id,
          noticeId: translation.notice_id,
          languageId: translation.language_id,
          title: translation.title,
          subtitle: translation.subtitle,
          slug: translation.slug,
          content: translation.content,
          urlVideo: translation.url_video ?? undefined,
          videoDescription: translation.video_description ?? undefined,
          createdAt: translation.created_at,
          updatedAt: translation.updated_at,
          language: new LanguageModel({
            id: translation.language.id,
            code: translation.language.code,
            name: translation.language.name,
            createdAt: translation.language.created_at,
            deletedAt: translation.language.deleted_at,
            updatedAt: translation.language.updated_at,
          }),
        })
    ),
  })
  */
}

export default NewsService
