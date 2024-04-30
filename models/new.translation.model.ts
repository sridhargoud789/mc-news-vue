import { LanguageModel } from './language.model';

export class NewTranslationModel {
  id: number;
  noticeId?: number;
  languageId?: number;
  title?: string;
  subtitle?: string;
  slug?: string;
  content?: string;
  urlVideo?: string;
  videoDescription?: string
  createdAt?: any;
  updatedAt?: any;
  language?: LanguageModel;
  constructor({
    id,
    noticeId,
    languageId,
    title,
    subtitle,
    slug,
    content,
    urlVideo,
    videoDescription,
    createdAt,
    updatedAt,
    language
  }: NewTranslationModel) {
    this.id = id;
    this.noticeId = noticeId;
    this.languageId = languageId;
    this.title = title;
    this.subtitle = subtitle;
    this.slug = slug;
    this.content = content;
    this.urlVideo = urlVideo;
    this.videoDescription = videoDescription;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.language = language;
  }
}
