<template>
  <div v-if="loading" class="container">
    <div class="row">
      <div class="col-12">
        <div class="mod--title d-none d-md-block">
          <div class="mod--title__container">
            <span class="mod--title__scroll">scroll down</span>
            <h1 class="mod--title__text">{{ $t('latest') }}</h1>
          </div>
        </div>
        <div class="mod--container mod--container--intro">
          <NewItemComponent
            v-for="(newModel, i) in news"
            :key="newModel.id"
            :new-model="newModel"
            :show-subtitle="i == 0 ? true : false"
          ></NewItemComponent>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import NewItemComponent from './NewItemComponent';
import { NewsService } from '~/services/news.service';

export default {
  name: "HeroComponent",
  components: {
    NewItemComponent,
  },
  data() {
    return {
      news: [],
      loading: false,
    };
  },
  async fetch() {
    const newsService = new NewsService( this.$apiNebolus );
    const currentLocale = () => {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0]
    }
    const apiCode = currentLocale()
    const code = apiCode.apiCode;
    const fetchNewsData = async () => {
      const news = await newsService.getListNews({page: 1, perPage: 19, code});
      return news;
    }
    this.news = await fetchNewsData();
    this.loading = true;
    this.$nuxt.$emit("section", "hero");
    this.$nuxt.$emit("columns", this.news);
  },
  created() {
    this.$nuxt.$on('changeLocale', () => this.handleUpdateLocale());
  },
  methods: {
    handleUpdateLocale() {
      this.$fetch();
    }
  },
};
</script>
