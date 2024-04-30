<template>
  <main>
    <HeroComponent></HeroComponent>
    <TrendingTopicsComponent v-if="false" />
    <!--
      <AcademySectionComponent />
      <WeeklyCryptoComponent v-if="sections.academy" />
      v-if="sections.crypto"
    -->
    <!-- <TopCryptosComponent /> -->
    <!-- <template v-if="sections.cryptos"> -->
    <template>
      <NewsByCategoryComponent
        v-for="(category, index) in categories"
        :key="category.id"
        :category="category"
        :index="index"
      ></NewsByCategoryComponent>
    </template>
    <!-- TODO: v-if="sections.hero" v-if="sections.topics"
    -->
  </main>
</template>

<script>
import HeroComponent from '../components/HeroComponent.vue';
import TrendingTopicsComponent from '../components/TrendingTopicsComponent';
// import AcademySectionComponent from '../components/AcademySectionComponent'
// import WeeklyCryptoComponent from '../components/WeeklyCryptoComponent'
// import TopCryptosComponent from '../components/TopCryptosComponent';
import NewsByCategoryComponent from '../components/NewsByCategoryComponent';
export default {
  name: 'IndexPage',
  key(route) {
    return route.fullPath
  },
  components: {
    HeroComponent,
    TrendingTopicsComponent,
    // AcademySectionComponent,
    // WeeklyCryptoComponent,
    // TopCryptosComponent,
    NewsByCategoryComponent,
  },
  layout: 'largeWidth',
  data() {
    return {
      categories: [
        'cryptos',
        'tecnologia',
        'negocios',
        'defi',
        'nfts',
        'pumppump',
      ],
      sections: {
        hero: false,
        topics: false,
        academy: false,
        crypto: false,
        cryptos: false,
        newsByCategory: false,
      },
      columns: [],
    }
  },
  created() {
    this.$nuxt.$on('section', ($event) => this.setSections($event));
  },
  methods: {
    setSections(section) {
      this.sections[section] = true;
    },
  },
}
</script>
