import { Context } from "@nuxt/types"
import { ArticleTranslationModel } from "~/models/article.translation.model";


export default ({ app }: Context, inject: any ) => {
  const locales: any = app.i18n.locales;
  const localeObject = locales.filter((i:any) => i.code === app.i18n.locale)[0];

  const getTranslation = ( element: ArticleTranslationModel[] ) => {
    const translation = element.filter( ( translation: ArticleTranslationModel ) => translation.language!.code === localeObject.apiCode )[0];
    return translation
  }

  inject('articleTranslation', ( element: ArticleTranslationModel[] ) => getTranslation( element ) );
}

