import { TopicModelInterface } from '../interfaces/topic.model.interface';
export class TopicModel {
  public id: number;
  public name?: string;
  public url?: string;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;

  constructor({ id, name, url, createdAt, updatedAt, deletedAt }: TopicModelInterface) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
