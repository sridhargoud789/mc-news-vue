import { Context } from "@nuxt/types";

export default ({ app }: Context, inject: any ) => {
  const locales: any = app.i18n.locales;
  const localeObject = locales.filter((i:any) => i.code === app.i18n.locale)[0];

  const getTranslation = ( element: any[] ) => {
    const translation = element.filter( ( translation: any ) => translation.language!.code === localeObject.apiCode )[0];
    return translation
  }

  inject('anyTranslation', ( element: any[] ) => getTranslation( element ) );
}
