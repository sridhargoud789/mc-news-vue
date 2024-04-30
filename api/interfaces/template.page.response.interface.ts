import { Language } from './language.interface'
import { TranslationTemplateResponseInterface } from './translation.template.response.interface'

export interface TemplatePageResponseInterface {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  template_id: number;
  language_id: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  image: string;
  template: TranslationTemplateResponseInterface;
  language: Language;
}
