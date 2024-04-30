import { WeeklyAnalyzesTranslationModelInterface } from '../interfaces/weekly.analyzes.translation.model.interface'
import { LanguageModel } from './language.model'

export class WeeklyAnalyzesTranslationModel {
  public id: number;
  public weeklyAnalysisId?: number;
  public languageId?: number;
  public homeDescription?: string;
  public content?: string;
  public urlAcademy?: string;
  public slug?: string;
  public urlVideo?: string;
  public createdAt?: string;
  public updatedAt?: string;
  public language?: LanguageModel;

  // Declare constructor
  constructor({
    id,
    weeklyAnalysisId,
    languageId,
    homeDescription,
    content,
    urlAcademy,
    slug,
    urlVideo,
    createdAt,
    updatedAt,
    language,
  }: WeeklyAnalyzesTranslationModelInterface) {
    this.id = id;
    this.weeklyAnalysisId = weeklyAnalysisId;
    this.languageId = languageId;
    this.homeDescription = homeDescription;
    this.content = content;
    this.urlAcademy = urlAcademy;
    this.slug = slug;
    this.urlVideo = urlVideo;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.language = language;
  }
}
