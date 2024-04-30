import { Context } from "@nuxt/types";

export default ({ app }: Context, inject: any ) => {
  const locales: any = app.i18n.locales;
  const localeObject = locales.filter((i:any) => i.code === app.i18n.locale)[0];

  const formattedDate = ( date: string ) => {
    const dateObject = new Date( date );
    return ( dateObject.toLocaleDateString( localeObject.code , { month: 'long', day: 'numeric' } ));
  }

  inject( 'formattedDate', ( date: string ) => formattedDate( date ) );
}
