<template>
  <main>
    <div class="bg-dark pt-2 pb-2 pt-lg-3 pb-lg-3">
      <div class="container pt-1 pb-1">
        <div class="row">
          <div class="col-12">
            <h2 class="text-64 text-lg-100 h--big-white mb-0">
             <!-- TODO:
              {{ tagName }}
            -->
            Tag Name
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5"></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="mod--container mod--container--dist-1">
            <NewItemComponent
              v-for="newModel in news"
              :key="newModel.id"
              :new-model="newModel"
              :show-subtitle="false"
            ></NewItemComponent>
            <infinite-loading @infinite="infiniteLoadHandler">
              <div slot="no-more"></div>
              <div slot="no-results"></div>
            </infinite-loading>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import { NewsService } from '../../../services/news.service';

export default {
  name: 'TagsPage',
  components: {
    InfiniteLoading,
  },
  async asyncData({ app, req, params, redirect }) {
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
    const resp = await fetch(`${link}/api/tag/${params.tag}.json`)

    if (!resp.ok) {
      // redirect(404, '/error');
    }

    const data = await resp.json();

    if (data.code === 0) {
      redirect(404, '/error')
    }

    let newModel;
    const news = [];
    const newsIds = [];
    let category = '';

    if (isNotice) {
      newModel = data.newModel;
      newModel.translations = newModel.newTranslation;
      const newTranslation = app.$contentTranslation(newModel.newTranslation);
      newModel.newTranslation = newTranslation;
      data.newsModel.forEach((newModel) => {
        if (!newsIds.includes(newModel.id)) {
          news.push(newModel);
          newsIds.push(newModel.id);
        }
      });

    } else {
      category = params.aid;
      category.toLocaleUpperCase();
      data.newsModel.forEach(( newModel ) => {
        if ( !newsIds.includes( newModel.id ) ) {
          news.push( newModel );
          newsIds.push( newModel.id );
        }
      });
    }

    return {
      newModel,
      news,
      link,
      slug: params.aid,
    }
  },
  data() {
    return {
      news: [],
      response: [],
      newsIds: [],
      loading: false,
      page: 1,
      perPage: 7,
    };
  },
  async fetch() {
    const newsService = new NewsService( this.$apiNebolus );

    const tag = this.$route.params.tag;

    const currentLocale = () => {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0];
    }

    const apiCode = currentLocale();

    const code = apiCode.apiCode;

    const fetchNewsData = async ({tag, page, perPage, code}) => {
      this.loading = true;
      const news = await newsService.getListNewsByParams({ params: {
        'tag_slug': tag,
        page,
        'per_page': perPage,
        'language': code,
        }
      });
      this.loading = false;
      return news;
    }

    let response = await fetchNewsData({
      tag,
      page: this.page,
      perPage: this.perPage,
      code
    });

    this.response = [];

    if ( response.length > 0 ) {
      this.response = response;
    }

    const aux = [];

    response.forEach(( newModel ) => {
      if ( !this.newsIds.includes( newModel.id ) ) {
        aux.push( newModel );
        this.newsIds.push( newModel.id );
      }
    });

    response = aux;

    if ( this.page < 2 ) {
      this.news = response;
    } else {
      this.news = [...this.news, ...response];
    }
  },
  methods: {
    infiniteLoadHandler( $state ) {
      this.perPage = 3;
      if ( !this.loading ) {
        this.page++;
        this.$fetch().then(() => {
          $state.loaded();
        });
        if ( this.response.length <= 1 ) {
          $state.complete();
        }
      }
    },
  },
}
</script>
