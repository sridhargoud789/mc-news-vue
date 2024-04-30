import type { NuxtAxiosInstance } from '@nuxtjs/axios';
import { Code } from '~/api/enums';
import { TemplatePageResponseInterface } from '~/api/interfaces/template.page.response.interface';
import { TemplateResponseInterface } from '~/api/interfaces/template.response.interface';
import { PageModel } from '~/models/page.model';

export interface GetLegalTemplateProps {
  id: { type: number; required: true };
  code: { type: Code; default: Code.ESP }
}

export class LegalsService {
  $api: NuxtAxiosInstance;

  constructor(api: any) {
    this.$api = api
  }

  getLegalTemplate = async ({id, code}: GetLegalTemplateProps) => {
    const resource: string = 'template/';
    try {
      const response = await this.$api
        .get<TemplateResponseInterface>(`${resource}${id}/page?language=${code}`)
        .then((response) => response.data)
        .catch((error) => {
          console.error(
            'The error occurred: ' +
              error +
              'when the resource was called: ' +
              resource
          )
          return null
        });

      if (response === null) return;
      if (response.pages === null) return;
      const pages: PageModel | undefined = this.transfromTemplatePageResponseToPageModel( response.pages );
      return pages;
    } catch (error) {
      console.log(error)
    }
  }

  transfromTemplatePageResponseToPageModel = (template: TemplatePageResponseInterface): PageModel => new PageModel({
    id: template.id,
    title: template.title,
    subtitle: template.subtitle,
    content: template.content,
    templateId: template.template_id,
    languageId: template.language_id,
    createdAt: template.created_at,
    updatedAt: template.updated_at,
    deletedAt: template.deleted_at,
    image: template.image,
    translation: template.template,
    language: template.language,
  })
}
