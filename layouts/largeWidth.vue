<template>
  <v-app>
    <HeadbandComponent></HeadbandComponent>
    <HeaderComponent />
      <v-main>
        <Nuxt />
      </v-main>
    <FooterComponent></FooterComponent>
  </v-app>
</template>

<script>
import HeaderComponent from '~/components/NewsHeaderComponent.vue';
import HeadbandComponent from '~/components/HeadbandComponent.vue';
import FooterComponent from '~/components/FooterComponent.vue';
export default {
  name: 'LargeWithLayout',
  components: {
    HeaderComponent,
    FooterComponent,
    HeadbandComponent,
  },
  methods:{
    verifyRoute(){
      const {name} = this.$route
      if(!this.$auth.$state.loggedIn){
        switch (name){
          case 'auth-register':
          case 'auth-login':
            break;
          default:
            this.$router.push('auth/login')
        }
      }
    }
  },
  created(){
    //this.verifyRoute()
  }

}
</script>

