<template>
  <div>
    <v-menu
      v-if="$auth.$state.user.name !== null"
      offset-y
      class="v-menu dropdown-menu"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          class="main--header__access d-none d-md-block ms-4 user"
          elevation="0"
          v-bind="attrs"
          large
          style="background: none"
          v-on="on"
        >{{ $auth.$state.user.name }}</v-btn>
      </template>
      <v-list>
        <v-list-item>
          <nuxt-link :to="{name: `auth-profile`}">{{ $t("profile") }}</nuxt-link>
        </v-list-item>
         <v-list-item>
          <nuxt-link :to="{name: `auth-logout`}">{{ $t("signOut") }}</nuxt-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { UserModel } from '~/models/user.model';

export default {
  name: 'SessionButtonComponent',
  data() {
    return {
      userName: '',
      userModel: null,
    };
  },
   async fetch() {
    let localUser = await this.$auth.getToken( 'user' );
    if ( typeof localUser === 'string' ) {
      localUser = JSON.parse( localUser );
    }
    const userModel = new UserModel( localUser );
    this.$auth.setUser(userModel);
    this.userModel = userModel;
  },
}
</script>
