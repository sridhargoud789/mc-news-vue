<template>
  <main>
    <div>
      <div class="container">
        <div class="row">
          <div
            class="col-12 col-md-8 col-lg-5 text-lg-center mt-lg-5 d-lg-none"
          >
            <div class="space-1 d-md-none"></div>
            <button
              role="button"
              class="btn btn-filters toggle-filters d-md-none"
              @click="toggleFilters()"
            >
              {{ $t('filters') }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="academy-filters">
        <button
          class="btn btn-filters toggle-filters"
           @click="toggleFilters()"
        >
          {{ $t('filters') }}
        </button>
        <div class="academy-filters-content pt-4 pb-4 pt-md-0 pb-md-0">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="group-desktop-1">
                  <div class="filters-level">
                    <p class="txt-14 c-grey mb-md-1 pb-md-1 mb-1">
                      {{ $t('level') }}
                    </p>
                    <div
                      class="btn-group d-flex flex-column flex-md-row mb-3 mb-md-5 mb-lg-0 justify-content-md-start"
                      role="group"
                    >
                      <input
                        id="btnlvlradio1"
                        v-model="level"
                        class="btn-check"
                        type="checkbox"
                        name="btnlvlradio"
                        autocomplete="off"
                        checked=""
                        :value="1"
                        @change="handleChangeFilter"
                      />
                      <label
                        class="w-100 mb-2 mb-md-0 me-md-2 btn btn-outline-lvl btn-outline-principiante"
                        for="btnlvlradio1"
                      >
                        {{ $t('beginner') }}
                      </label>
                      <input
                        id="btnlvlradio2"
                        v-model="level"
                        class="btn-check"
                        type="checkbox"
                        name="btnlvlradio"
                        autocomplete="off"
                        :value="2"
                        @change="handleChangeFilter"
                      />
                      <label
                        class="w-100 mb-2 mb-md-0 me-md-2 btn btn-outline-lvl btn-outline-intermedio"
                        for="btnlvlradio2"
                      >
                        {{ $t('intermediate') }}
                      </label>
                      <input
                        id="btnlvlradio3"
                        v-model="level"
                        class="btn-check"
                        type="checkbox"
                        name="btnlvlradio"
                        autocomplete="off"
                        :value="3"
                        @change="handleChangeFilter"
                      />
                      <label
                        class="w-100 mb-2 mb-md-0 btn btn-outline-lvl btn-outline-avanzado"
                        for="btnlvlradio3"
                      >
                        {{ $t('advanced') }}
                      </label>
                    </div>
                  </div>
                  <div class="filters-level">
                    <p class="txt-14 c-grey mb-4 pb-2">
                      {{ $t('durationTime') }}
                    </p>
                    <div class="form-range-container mb-3 mb-md-0">
                      <div class="pe-2 ps-2">
                        <vue-slider
                          v-model="readingTimeRange"
                          :min="minReadingTime"
                          :max="maxReadingTime"
                          @change="handleChangeFilter"
                        ></vue-slider>
                        <div class="flex-bar-input d-flex justify-content-between">
                          <span>0</span>
                          <span>8</span>
                          <span>+16</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="group-desktop-2">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <p class="txt-14 c-grey w-100 mb-2">
                    {{ $t('topics') }}
                  </p>
                  <div class="btn-group" role="group">
                    <div v-for="tag in tags" :key="tag.id" class="mb-3">
                      <input
                        :id="tag.slug"
                        v-model="checkedTags"
                        class="btn-check"
                        type="checkbox"
                        :name="tag.slug"
                        :value="tag.slug"
                        autocomplete="off"
                        @change="handleChangeFilter"
                      />
                      <label
                        class="btn btn-outline-primary btn-outline-grey"
                        :for="tag.slug"
                      >
                        {{ tag.name }}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="academy-filters-footer d-md-none">
          <button
            class="btn btn-primary btn-lato toggle-filters d-md-none"
            @click="toggleFilters()"
          >
            {{ $t('apply') }} {{ $t('filters') }}
          </button>
        </div>
      </div>
    </div>
    <div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="mod--container mod--container__academy--loop">
                <ArticleItemComponent
                  v-for="article in articles"
                  :key="article.id"
                  :article-model="article"
                />
                <article v-if="false" class="mod mod__banner-login">
                  <h2 class="text-24 text-center text-lg-32 white p-4">
                    Logeate y ten un seguimiento personalizado de tu aprendizaje
                  </h2>
                  <a class="btn btn-primary btn-user btn-sm" href="#"
                    >Acceder</a
                  >
                </article>
                <infinite-loading @infinite="infiniteLoadArticlesHandler">
                  <div slot="no-more"></div>
                  <div slot="no-results"></div>
                </infinite-loading>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import VueSlider from 'vue-slider-component';
import InfiniteLoading from 'vue-infinite-loading';
import { ArticlesService } from '../../services/articles.service';
import ArticleItemComponent from '../../components/ArticleItemComponent';
import 'vue-slider-component/theme/antd.css';

export default {
  name: 'AcademyPage',
  components: {
    ArticleItemComponent,
    VueSlider,
    InfiniteLoading,
  },

  
  async asyncData({ req }) {
    let link;
    if (typeof window !== 'undefined') {
      link = window.location.origin
    }
    else {
      let hostURL = req ? req.headers.host : process.env.API_URL
      if (hostURL) {
        hostURL = hostURL.replace('http://', '')
        hostURL = hostURL.replace('https://', '')
        if (hostURL.includes('localhost:')) {
          link = `http://${hostURL}`
        } else {
          link = `http://${hostURL}`
        }
      }
    }
    const resp = await fetch(`${link}/api/library/index.json`);

    console.log( 'resp', resp );

    if (!resp.ok) {
      // // redirect(404, '/error');
    }

    const data = await resp.json();

    if (data.code === 0) {
      // redirect(404, '/error')
    }

    const articles = [];
    const articlesId = [];

    data.articlesModel.forEach(( article ) => {
      if ( !articlesId.includes( article.id ) ) {
        articles.push( article );
        articlesId.push(article.id);
      }
    });

    return {
      articles,
      articlesId,
    }
  },
  data() {
    return {
      loading: false,
      counter: 0,
      articles: [],
      response: [],
      articlesId: [],
      actualArticleLength: 0,
      tags: [],
      level: [],
      minReadingTime: 0,
      maxReadingTime: 16,
      readingTimeRange: [0, 16],
      page: 1,
      perPage: 8,
      tagsShowed: 10,
      checkedTags: [],
      articlesInPage: [],
    }
  },
  async fetch() {
    const articlesService = new ArticlesService(this.$apiNebolus);
    const fetchArticlesData = async ({ page, limit, levels, categories, minReadingTime, maxReadingTime } ) => {
      this.loading = true;

      let levelsString = '';
      levels.forEach(( value, index ) => {
        if ( index > 0 && index <= levels.length ) {
          levelsString += ',';
        }
        levelsString += `${value}`;
      });

      let categoriesString = '';
      categories.forEach(( value, index ) => {
        if ( index > 0 && index <= categories.length ) {
          categoriesString += ',';
        }
        categoriesString += `${value}`;
      });

      const articles = await articlesService.getListArticles({
        page,
        per_page: limit,
        levels: levelsString,
        categories: categoriesString,
        reading_time_min: minReadingTime,
        reading_time_max: maxReadingTime,
        language: 'ESP',
      });
      this.loading = false;
      return articles
    }


    let response = await fetchArticlesData({
      page: this.page,
      limit: this.perPage,
      levels: this.level,
      categories: this.checkedTags,
      minReadingTime: this.readingTimeRange[0],
      maxReadingTime: this.readingTimeRange[1],
    });

    this.response = [];

    if ( response.length > 0 ) {
      this.response = response;
    }

    const aux = [];

    response.forEach(( article ) => {
      if ( !this.articlesId.includes( article.id ) ) {
        aux.push( article );
        this.articlesId.push(article.id);
      }
    });

    response = aux;

    if ( this.page < 2 ) {
      this.articles = response;
    } else {
      this.articles = [...this.articles, ...response];
    }
  },
  async created() {
    const articlesService = new ArticlesService(this.$apiNebolus);
    const fetchArticleCategoriesData = async () => {
      const tags = await articlesService.getListAllTagsOfArticles();
      return tags
    }
    this.tags = await fetchArticleCategoriesData();
  },
  methods: {
    toggleFilters() {
      $("body").toggleClass("filters-active");
    },
    infiniteLoadArticlesHandler( $state ) {
      this.perPage = 3;
      if ( !this.loading) {
        this.page++;
        this.$fetch().then(() => {
          $state.loaded();
        });
        if ( this.response.length <= 1 ) {
          $state.complete();
        }
      }
    },
    handleChangeFilter() {
      if ( !this.loading ) {
        this.articles = [];
        this.page = 1;
        this.perPage = 8;
        this.$fetch();
      }
    },
  },
}
</script>

<style scoped>
.academy-filters {
  z-index: 10;
}
</style>
