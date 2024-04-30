import { TranslationPageModelInterface } from "~/interfaces/translation.page.model.interface";


export class TranslationPageModel {
  public id: number;
  public name?: string;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;

  constructor({
    id,
    name,
    createdAt,
    updatedAt,
    deletedAt,
  }: TranslationPageModelInterface) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
