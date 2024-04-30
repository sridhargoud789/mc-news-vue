import { Context } from "@nuxt/types";

export default ({ app }: Context, inject: any ) => {

  const translation = ( element: any[], locale: any ) => {
    const translation = element.filter( ( translation: any ) => translation.language!.code === locale.apiCode )[0];
    return translation
  }

  inject('getTranslation', ( element: any[], locale: any ) => translation( element, locale ) );
}
