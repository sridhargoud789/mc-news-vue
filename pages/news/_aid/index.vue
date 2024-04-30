<template>
  <div>
    <div v-if="isNotice" class="row justify-content-center">
      <div>
        <div class="col-12 col-lg-12">
          <div class="row justify-content-center">
            <div class="col-12 col-lg-6">
              <article class="mod mod__full-article">
                <h1 class="mod__title text-32 mb-3 text-md-44 mod__text-black">
                  {{ newModel.newTranslation.title }}
                </h1>
                <p class="mod__sub-title text-18 text-md-21 saria-condensed mod__text-black">
                  {{ newModel.newTranslation.subtitle }}
                </p>
                <div v-if="newModel.newTranslation.urlVideo" class="video-responsive mb-3 mb-md-4">
                  <iframe class="video-responsive-item" :src="newModel.newTranslation.urlVideo" frameborder="0"
                    allow="autoplay; fullscreen" allowfullscreen></iframe>
                </div>
                <figure v-else-if="newModel.urlImage" class="mod__figure">
                  <img v-lazy-load :src="'https://mundocrypto-files.s3.eu-central-1.amazonaws.com/' + newModel.urlImage" />
                </figure>
                <figure v-else-if="newModel.image" class="mod__figure">
                  <img :src="'data:image/jpeg;base64,' + newModel.image" />
                </figure>
                <div v-if="newModel.imageDescription !== null" class="text-14 d-flex c-grey mb-3">
                  <span class="ms-auto">{{ newModel.imageDescription }}</span>
                </div>
                <div class="text-14 d-flex c-grey mb-3">
                  <span v-if="newModel.subcategory !== null" class="me-auto">{{
                      newModel.subcategory.name
                  }}</span>
                  <span v-else class="me-auto">{{ newModel.category.name }}</span>
                  <span>{{ $formattedDate(newModel.createdAt) }}</span>
                </div>
                <div class="mod__body">
                  
                  <span
                  v-if="newModel.realAuthor !== 'null' &&
                    isNaN(newModel.realAuthor) &&
                    newModel.realAuthor !== 'Administrador'
                  " class="mod__text-black mod_aw_icon">
                    <font-awesome-icon :icon="['fas', 'user-circle']" />
                    {{ newModel.realAuthor }}
                  </span>
                  <span v-else class="mod__text-black">
                    <font-awesome-icon class="mod__text-black" :icon="['fa', 'user-circle']" />
                    Nebolus
                  </span>
                </div>
                <div class="hr mt-3 mb-4 mb-md-5"></div>
                <div class="mod__article-text mb-5 text-md-18 lh_1" v-html="newModel.newTranslation.content"></div>
                <!-- TODO:
                <div class="btn-group justify-content-md-center align-items-md-center w-100" role="group">
                  router to tags
                </div>
                -->
                <div class="mod__article-social-links mt-4 mb-4">
                  <ShareNetwork
                      network="facebook"
                      :url="`https://news.mundocrypto.com/news/${$route.params.aid}`"
                      :title="`${newModel.newTranslation.title} - MundoCrypto News`"
                      description="MundoCrypto News, Prensa descentralizada Web3"
                      quote="MundoCrypto News, Prensa descentralizada Web3"
                      hashtags="MundoCrypto,MundoCryptoNews"
                    >
                    <img data-not-lazy src="~/static/img/facebook-blue.svg" />
                  </ShareNetwork>
                  <ShareNetwork
                      network="twitter"
                      :url="`https://news.mundocrypto.com/news/${$route.params.aid}`"
                      :title="`${newModel.newTranslation.title} - MundoCrypto News`"
                      description="MundoCrypto News, Prensa descentralizada Web3"
                      quote="MundoCrypto News, Prensa descentralizada Web3"
                      hashtags="MundoCrypto,MundoCryptoNews"
                    >
                    <img data-not-lazy src="~/static/img/twiiter-blue.svg" />
                  </ShareNetwork>
                  <ShareNetwork
                      network="LinkedIn"
                      :url="`https://news.mundocrypto.com/news/${$route.params.aid}`"
                      :title="`${newModel.newTranslation.title} - MundoCrypto News`"
                      description="MundoCrypto News, Prensa descentralizada Web3"
                      quote="MundoCrypto News, Prensa descentralizada Web3"
                      hashtags="MundoCrypto,MundoCryptoNews"
                    >
                    <img data-not-lazy src="~/static/img/linkedin-blue.svg" />
                  </ShareNetwork>
                  <!--
                    <a
                    v-clipboard:copy="socialShare('copy')"
                    href="#"
                    @click.prevent="copiado($event)"
                    ><img data-not-lazy src="../assets/img/copy-link-blue.svg"
                  /></a>
                  <span class="copy-link">Enlace copiado</span>
                  <a class="d-md-none" :href="socialShare('whatsapp')"
                    ><img data-not-lazy src="../assets/img/whatsapp.svg" height="20px"
                  /></a>
                  <a :href="socialShare('telegram')" target="_blank"
                    ><img data-not-lazy src="../assets/img/Telegram_logo.png" height="20px"
                  /></a>
                  -->
                </div>

                <!-- TODO: <v-btn class="px-0" text @click="callDialog(true)">{{$t("disclaimer.title") }}</v-btn>-->

              </article>
            </div>
          </div>
            <div class="col-12">
              <span class="text-64 text-md-100 h--big">{{ $t("related") }}</span>
            <div class="mod--container mod--container--single">
              <NewItemComponent v-for="newModel in news" :key="newModel.id" :new-model="newModel"
                :show-subtitle="false"></NewItemComponent>
                <infinite-loading v-if="news.length" spinner="bubbles" @infinite="infiniteLoadHandler" style="width: 100%">
                  <div slot="no-more"></div>
                  <div slot="no-results"></div>
                </infinite-loading>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main v-else>
      <div v-if="false" class="bg-dark-2">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="trending--list trending--list__dark">
                <nuxt-link
                :to="{
                  name: 'categoria',
                  params: { categoria: 'cryptos' },
                }" class="trending--list__link">{{ $t('all') }}</nuxt-link><span>| </span>
                <nuxt-link
                :to="{
                  name: 'subcategoria',
                  params: { categoria: 'cryptos', subcategoria: 'bitcoin' },
                }" class="trending--list__link">Bitcoin</nuxt-link><span>| </span>
                <nuxt-link
                :to="{
                  name: 'subcategoria',
                  params: { categoria: 'cryptos', subcategoria: 'ethereum' },
                }" class="trending--list__link">Ethereum</nuxt-link><span>| </span>
                <nuxt-link :to="{
                  name: 'subcategoria',
                  params: { categoria: 'cryptos', subcategoria: 'solana' },
                }" class="trending--list__link">Solana</nuxt-link><span>| </span>
                <nuxt-link :to="{
                  name: 'subcategoria',
                  params: { categoria: 'cryptos', subcategoria: 'polkadot' },
                }" class="trending--list__link">Polkadot</nuxt-link><span>| </span>
                <nuxt-link :to="{
                  name: 'subcategoria',
                  params: {
                    categoria: 'cryptos',
                    subcategoria: 'more-altcoins',
                  },
                }" class="trending--list__link">+ Altcoins</nuxt-link><span>| </span>
                <nuxt-link :to="{
                  name: 'subcategoria',
                  params: { categoria: 'cryptos', subcategoria: 'more-tokens' },
                }" class="trending--list__link">+ Tokens</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-dark pt-2 pb-2 pt-lg-3 pb-lg-3">
        <div class="container pt-1 pb-1">
          <div class="row">
            <div class="col-12">
              <h2 class="text-64 text-lg-100 h--big-white mb-0">
                {{ category }}
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
              <NewItemComponent v-for="newModel in news" :key="newModel.id" :new-model="newModel"
                :show-subtitle="false"></NewItemComponent>
                <infinite-loading v-if="news.length" spinner="bubbles" @infinite="infiniteLoadHandler" style="width: 100%">
                  <div slot="no-more"></div>
                  <div slot="no-results"></div>
                </infinite-loading>
            </div>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import { NewModel } from '../../../models/new.model';
import { NewsService } from '../../../services/news.service';
import { NewTranslationModel } from '../../../models/new.translation.model';
import { CategoryModel } from '../../../models/category.model';
import {ShareNetwork} from 'vue-social-sharing'


export default {
  name: 'NewSinglePage',
  components: {
    ShareNetwork
  },
  layout: 'largeWidth',
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
    const resp = await fetch(`${link}/api/news/${params.aid}.json`)

    if (!resp.ok) {
      // redirect(404, '/error');
    }

    const data = await resp.json();

    const { isNotice } = data;

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
      isNotice,
      category
    }
  },
  data() {
    return {
      newModel: NewModel,
      newTranslation: NewTranslationModel,
      news: [],
      isNotice: Boolean,
      category: CategoryModel,
      subcategory: CategoryModel,
      categoryString: String,
      response: [],
      newsIds: [],
      loading: false,
      page: 1,
      perPage: 7,
    }
  },
  async fetch() {
    const newsService = new NewsService(this.$apiNebolus);

    this.categoryString = this.$route.params.aid;

    const currentLocale = () => {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0];
    }

    const apiCode = currentLocale();

    const code = apiCode.apiCode;

    const fetchNewsData = async ({ category, page, perPage, code }) => {
      this.loading = true;
      const news = await newsService.getListNewsByCategory({ category, target: 'category_slug', params: { page, 'per_page': perPage, 'language': code } });
      this.loading = false;
      return news;
    }

    let response = await fetchNewsData({
      category: this.categoryString,
      page: this.page,
      perPage: this.perPage,
      code
    });

    this.response = [];

    if (response.length > 0) {
      this.response = response;
    }

    const aux = [];

    response.forEach((newModel) => {
      if (!this.newsIds.includes(newModel.id)) {
        aux.push(newModel);
        this.newsIds.push(newModel.id);
      }
    });

    response = aux;

    if (this.page < 2) {
      this.news = response;
    } else {
      this.news = [...this.news, ...response];
    }
  },
  head() {
   return {
      title: this.isNotice ? this.newModel.newTranslation.title : '',
      meta: [
        // Meta tags
        {
          hid: 'description',
          name: 'description',
          content: this.isNotice ? this.newModel.newTranslation.subtitle : '',
        },
        {
          hid: 'url',
          name: 'url',
          content: `https://news.mundocrypto.com/news/${this.isNotice ? this.newModel.newTranslation.slug : ''}`,
        },
        // Open Graph
        {
          hid: 'og:locale',
          property: 'og:locale',
          content: 'es_ES',
        },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.isNotice ?  this.newModel.newTranslation.title  : '',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.isNotice ? this.newModel.newTranslation.subtitle : '',
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://news.mundocrypto.com//news/${this.isNotice ? this.newModel.newTranslation.slug : ''}`,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          //content: 'Nebolus Nuxt Test Heroku',
        },
        // Open Graph, Facebook
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://mundocrypto-files.s3.eu-central-1.amazonaws.com/${this.isNotice ? this.newModel.urlImage : ''}`,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: `https://mundocrypto-files.s3.eu-central-1.amazonaws.com/${this.isNotice ? this.newModel.urlImage: ''}`,
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '1200',
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '630',
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.isNotice ? this.newModel.newTranslation.title : '',
        },
        // Open Graph Twitter
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.isNotice ? this.newModel.newTranslation.subtitle : '',
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.isNotice ? this.newModel.newTranslation.title : '',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `https://mundocrypto-files.s3.eu-central-1.amazonaws.com/${this.isNotice ? this.newModel.urlImage : ''}`,
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: `https://news.mundocrypto.com/news/${this.isNotice ? this.newModel.newTranslation.slug : ''}`,
        },
        // Open Graph, WhatsApp
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://mundocrypto-files.s3.eu-central-1.amazonaws.com/${this.isNotice ? this.newModel.urlImageThumbnail : ''}`,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: `https://mundocrypto-files.s3.eu-central-1.amazonaws.com/${this.isNotice ? this.newModel.urlImageThumbnail : ''}`,
        },
        {
          hid: 'og:image:type',
          property: 'og:image:type',
          content: 'image',
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: '300',
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: '300',
        },
      ],
    }
  },
  created() {
    this.$nuxt.$on('changeLocale', () => this.handleUpdateLocale());
  },
  methods: {
    handleUpdateLocale() {
      const locale = this.$store.state.locale.current;
      this.newModel.newTranslation = this.$getTranslation(this.newModel.translations, locale);
    },
    infiniteLoadHandler($state) {
      this.perPage = 3;
      if (!this.loading) {
        this.page++;
        this.$fetch().then(() => {
          $state.loaded();
        });
        if (this.response.length <= 1) {
          $state.complete();
        }
      }
    },

  },
}
</script>

<style scoped>
.author-name img {
  height: 18px;
}
</style>
