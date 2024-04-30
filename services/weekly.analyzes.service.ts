import type { NuxtAxiosInstance } from '@nuxtjs/axios';
import { WeeklyAnalyzesTranslationResponseInterface } from '../api/interfaces/weekly.analyzes.translation.response.interface';
import { Code } from '~/api/enums';
import { WeeklyAnalyzesResponseInterface } from '~/api/interfaces/weekly.analyzes.response.interface';
import { WeeklyAnalysisModel } from '~/models/weekly.analysis.model';
import { WeeklyAnalyzesTranslationModel } from '~/models/weekly.analyzes.translation.model';
import { Language } from '~/api/interfaces';
import { LanguageModel } from '~/models/language.model';

export class WeeklyAnalyzesService {
  $api: NuxtAxiosInstance

  constructor(api: any) {
    this.$api = api
  }

  getListWeeklyAnalysis = async ( code: { type: Code; default: Code.ESP } ) => {
    const resource: string = 'weeklyanalysis';

    try {
      const response = await this.$api
        .get<WeeklyAnalyzesResponseInterface>(`${resource}?language=${code}`)
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

      if ( response == null ) return [];
      if ( response.weeklyanalysis == null ) return [];
      const weeklyAnalysisSingle = response!.weeklyanalysis ?? [];
      const weeklyAnalysis: WeeklyAnalysisModel | undefined = new WeeklyAnalysisModel({
        id: weeklyAnalysisSingle.id,
        authorId: weeklyAnalysisSingle.author_id,
        statusId: weeklyAnalysisSingle.status_id,
        createdAt: weeklyAnalysisSingle.created_at,
        updatedAt: weeklyAnalysisSingle.updated_at,
        deletedAt: weeklyAnalysisSingle.deleted_at,
        image: weeklyAnalysisSingle.image,
        translation: weeklyAnalysisSingle.weeklyanalysislanguage?.map( (language: WeeklyAnalyzesTranslationResponseInterface) => this.transformWeeklyAnalysisTranslation(language) ),
        author: weeklyAnalysisSingle.author,
        status: weeklyAnalysisSingle.status,
        tags: weeklyAnalysisSingle.tags,
      });
      return weeklyAnalysis;
    } catch ( error ) {
      console.log(error)
    }
  }

  transformWeeklyAnalysisTranslation = (translation: WeeklyAnalyzesTranslationResponseInterface ) => new WeeklyAnalyzesTranslationModel({
    id: translation.id,
    weeklyAnalysisId: translation.weekly_analysis_id,
    languageId: translation.language_id,
    homeDescription: translation.home_description,
    content: translation.content,
    urlAcademy: translation.url_academy,
    slug: translation.slug,
    urlVideo: translation.url_video,
    createdAt: translation.created_at,
    updatedAt: translation.updated_at,
    language: this.transformLanguageResponseToLanguageModel( translation.language! ),
  });

  transformLanguageResponseToLanguageModel = (language: Language): LanguageModel => new LanguageModel({
    id: language.id,
    code: language.code,
    name: language.name,
    createdAt: language.created_at,
    updatedAt: language.updated_at,
    deletedAt: language.deleted_at,
  });
}
