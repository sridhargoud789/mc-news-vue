<template>
  <div></div>
</template>
<script>
import { SessionService } from '../../services/session.service';
export default {
  name: 'LogoutPage',
  async asyncData({app, redirect}) {
    if ( !app.$auth.$state.loggedIn ) {
      redirect('/');
    }
    const duration = 5000;
    const sessionService = new SessionService(app.$apiNebolus, app.$auth );
    const result = await sessionService.logout();
    if ( result.status === 400 ) {
      app.$toast.error( app.i18n.t('anErrorOccurred', {error: app.i18n.t('unexpectedError')}), { duration });
    } else if ( result.status !== 200 ) {
      app.$toast.error( result.message, {duration});
    } else {
      app.$toast.success( app.i18n.t('logOutSuccess'), {duration});
    }

    redirect('/');
  },
}
</script>
