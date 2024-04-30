import { LanguageModelInterface } from '../interfaces/language.model.interface';

export class LanguageModel {
  public id: number;
  public code?: string;
  public name?: string;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: any;
  constructor({ id, code, name, createdAt, updatedAt, deletedAt }: LanguageModelInterface) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
