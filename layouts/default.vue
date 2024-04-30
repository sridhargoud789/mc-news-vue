<template>
  <v-app>
    <HeadbandComponent></HeadbandComponent>
    <HeaderComponent></HeaderComponent>
      <v-main>
        <v-container>
          <Nuxt />
        </v-container>
      </v-main>
    <FooterComponent></FooterComponent>
  </v-app>
</template>

<script>
import HeaderComponent from '~/components/NewsHeaderComponent.vue';
import HeadbandComponent from '~/components/HeadbandComponent.vue';
import FooterComponent from '~/components/FooterComponent.vue';
export default {
  name: 'DefaultLayout',
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
  },
  /*watch:{
  '$route' ({name}, from, next){ // put your code here
      this.verifyRoute()
    }
  }*/
}
</script>
