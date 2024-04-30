import { Language } from '../interfaces';
import { LanguageModel } from '../models/language.model';

export const transformLanguageResponseToLanguageModel = (language: Language): LanguageModel => new LanguageModel({
  id: language.id,
  code: language.code,
  name: language.name,
  createdAt: language.created_at,
  updatedAt: language.updated_at,
  deletedAt: language.deleted_at,
});
