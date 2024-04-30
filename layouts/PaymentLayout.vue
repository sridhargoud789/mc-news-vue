<template>
  <v-app>
    <HeaderComponent />
      <v-main>
        <Nuxt />
      </v-main>
  </v-app>
</template>

<script>
import HeaderComponent from '~/components/NewsHeaderComponent.vue';
export default {
  name: 'PaymentLayout',
  components: {
    HeaderComponent,
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

