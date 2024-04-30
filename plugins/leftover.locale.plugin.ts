import { Context } from "@nuxt/types";

export default ({ app }: Context, inject: any ) => {

  const locales: any = app.i18n.locales;
  const localeObject = locales.filter((i:any) => i.code !== app.i18n.locale);

  const leftover = () => localeObject;

  inject( 'leftoverLocale', () => leftover() );
}
