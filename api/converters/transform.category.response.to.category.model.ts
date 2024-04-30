import { Category } from '../interfaces';
import { CategoryModel } from '../models/category.model';

export const transformCategoryResponseToCategoryModel = (category: Category): CategoryModel  => new CategoryModel({
  id: category.id,
  name: category.name,
  slug: category.slug,
  createdAt: category.created_at,
  updatedAt: category.updated_at,
  deletedAt: category.deleted_at,
  languageId: category.language_id,
});
