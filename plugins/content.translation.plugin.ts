import { Context } from "@nuxt/types"
import { NewTranslationModel } from '../models/new.translation.model';
export default ({ app }: Context, inject: any ) => {
  const locales: any = app.i18n.locales;
  const localeObject = locales.filter((i:any) => i.code === app.i18n.locale)[0];

  const getTranslation = ( newElement: NewTranslationModel[] ) => {
    const translation = newElement.filter( ( tranlation: NewTranslationModel ) => tranlation.language?.code === localeObject.apiCode )[0];
    return translation
  }

  inject('contentTranslation', ( newElement: NewTranslationModel[] ) => getTranslation( newElement ) );
}
