import { ArticleModelInterface } from '../interfaces/article.model.interface';

export class ArticleModel {
  public id: number;
  public viewsNumber?: number;
  public readingTime?: number;
  public urlVideo?: string;
  public urlVideoMain?: string;
  public appearsHome?: number;
  public image?: string;
  public urlImage?: string;
  public urlImageMobile?: string;
  public urlImageThumbnail?: string;
  public imageAlt?: string;
  public metaDescription?: string;
  public authorId?: number;
  public statusId?: number;
  public levelId?: number;
  public apiCryptoId?: number;
  public languageId?: number;
  public categoryId?: number;
  public createdAt?: string;
  public updatedAt?: string;
  public author?: any;
  public level?: any;
  public category?: any;
  public articleTranslations?: any[];
  public random?: any;

  constructor ({
    id,
    viewsNumber,
    readingTime,
    urlVideo,
    urlVideoMain,
    appearsHome,
    image,
    urlImage,
    urlImageMobile,
    urlImageThumbnail,
    imageAlt,
    metaDescription,
    authorId,
    statusId,
    levelId,
    apiCryptoId,
    languageId,
    categoryId,
    createdAt,
    updatedAt,
    author,
    level,
    category,
    articleTranslations,
    random,
  }: ArticleModelInterface) {
    this.id = id;
    this.viewsNumber = viewsNumber;
    this.readingTime = readingTime;
    this.urlVideo = urlVideo;
    this.urlVideoMain = urlVideoMain;
    this.appearsHome = appearsHome;
    this.image = image;
    this.urlImage = urlImage;
    this.urlImageMobile = urlImageMobile;
    this.urlImageThumbnail = urlImageThumbnail;
    this.imageAlt = imageAlt
    this.metaDescription = metaDescription;
    this.authorId = authorId;
    this.statusId = statusId;
    this.levelId = levelId;
    this.apiCryptoId = apiCryptoId;
    this.languageId = languageId;
    this.categoryId = categoryId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.author = author;
    this.level = level;
    this.category = category;
    this.articleTranslations = articleTranslations;
    this.random = random;
  }
}
