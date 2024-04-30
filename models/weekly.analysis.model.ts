import { WeeklyAnalysisModelInterface } from '../interfaces/weekly.analysis.model.interface';
export class WeeklyAnalysisModel {
  public id: number;
  public authorId?: number;
  public statusId?: number;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;
  public image?: string;
  public translation?: any[];
  public author?: any;
  public status?: any;
  public tags?: any[];

  constructor({
    id,
    authorId,
    statusId,
    createdAt,
    updatedAt,
    deletedAt,
    image,
    translation,
    author,
    status,
    tags,
  }: WeeklyAnalysisModelInterface) {
    this.id = id;
    this.authorId = authorId;
    this.statusId = statusId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.image = image;
    this.translation = translation;
    this.author = author;
    this.status = status;
    this.tags = tags;
  }
}
