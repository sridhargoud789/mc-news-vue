import { Context } from "@nuxt/types"
import { WeeklyAnalyzesTranslationModel } from "~/models/weekly.analyzes.translation.model";


export default ({ app }: Context, inject: any ) => {
  const locales: any = app.i18n.locales;
  const localeObject = locales.filter((i:any) => i.code === app.i18n.locale)[0];

  const getTranslation = ( element: WeeklyAnalyzesTranslationModel[] ) => {
    const translation = element.filter( ( translation: WeeklyAnalyzesTranslationModel ) => translation.language!.code === localeObject.apiCode )[0];
    return translation
  }

  inject('analyzesTranslation', ( element: WeeklyAnalyzesTranslationModel[] ) => getTranslation( element ) );
}


