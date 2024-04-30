import { CategoryModelInterface } from "~/interfaces/category.model.interface";

export class CategoryModel {
  public id: number;
  public name?: string;
  public slug?: string;
  public languageId?: number;
  public createdAt?: string;
  public updatedAt?: string;
  public deletedAt?: string;
  public noticeNumber?: string;
  public tagTypeId?: number;
  public categoryId?: number;
  constructor( {
    id,
    name,
    slug,
    languageId,
    createdAt,
    updatedAt,
    deletedAt,
    noticeNumber,
    tagTypeId,
    categoryId
  }: CategoryModelInterface ){
    this.id = id;
    this.name = name;
    this.slug = slug;
    this.languageId = languageId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
    this.noticeNumber = noticeNumber;
    this.tagTypeId = tagTypeId;
    this.categoryId = categoryId;
  }
}
