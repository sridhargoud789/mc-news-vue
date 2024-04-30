import { NewTranslation } from '../interfaces/new.translation.interface';
import { New } from '../interfaces';
import { NewModel } from '../models/new.model';
import { NewTranslationModel } from '../models/new.translation.model';
import { LanguageModel } from '../models/language.model';
import { CategoryModel } from '../models/category.model';

export const transformNewToNewModel = (element: New): NewModel => new NewModel({
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
});
