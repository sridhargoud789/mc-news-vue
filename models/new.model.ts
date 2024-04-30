import { CategoryModel } from './category.model';
import { NewModelInterface } from '~/interfaces/new.model.interface'

export class NewModel {
  id: number;
  viewsNumber?: number;
  readingTime?: number;
  urlVideo?: null;
  videoDescription?: null;
  appearsHome?: number;
  imageDescription?: null;
  imageAlt?: null;
  urlImage?: string;
  urlImageMobile?: string;
  urlImageThumbnail?: string;
  metaDescription?: string;
  realAuthor?: string;
  disclaimerNotice?: string;
  realDate?: null;
  especialDate?: null;
  authorId?: number;
  statusId?: number;
  categoryId?: number;
  apiCryptoId?: number | null;
  languageId?: number;
  subcategoryId?: number | null;
  createdAt?: any;
  updatedAt: any;
  author: any;
  category: CategoryModel;
  subcategory: CategoryModel;
  newTag: any;
  newTranslation: any;
  random?: any;
  slug?: string;
  constructor({
    id,
    viewsNumber,
    readingTime,
    urlVideo,
    videoDescription,
    appearsHome,
    imageDescription,
    imageAlt,
    urlImage,
    urlImageMobile,
    urlImageThumbnail,
    metaDescription,
    realAuthor,
    disclaimerNotice,
    realDate,
    especialDate,
    authorId,
    statusId,
    categoryId,
    apiCryptoId,
    languageId,
    subcategoryId,
    createdAt,
    updatedAt,
    author,
    category,
    subcategory,
    newTag,
    newTranslation,
    random,
    slug,
  }: NewModelInterface ) {
    this.id = id;
    this.viewsNumber = viewsNumber;
    this.readingTime = readingTime;
    this.urlVideo = urlVideo;
    this.videoDescription = videoDescription;
    this.appearsHome = appearsHome;
    this.imageDescription = imageDescription;
    this.imageAlt = imageAlt;
    this.urlImage = urlImage;
    this.urlImageMobile = urlImageMobile;
    this.urlImageThumbnail = urlImageThumbnail;
    this.metaDescription = metaDescription;
    this.realAuthor = realAuthor;
    this.disclaimerNotice = disclaimerNotice;
    this.realDate = realDate;
    this.especialDate = especialDate;
    this.authorId = authorId;
    this.statusId = statusId;
    this.categoryId = categoryId;
    this.apiCryptoId = apiCryptoId;
    this.languageId = languageId;
    this.subcategoryId = subcategoryId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.author = author;
    this.category = category;
    this.subcategory = subcategory;
    this.newTag = newTag;
    this.newTranslation = newTranslation;
    this.random = random;
    this.slug = slug;
  }
}
