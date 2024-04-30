<template>
  <div class="bg-grey">
    <div>
      <div v-if="true" class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-9">
            <div class="mt-5 mb-4">
              <a class="btn-blue-return" href="javascript:history.back()">{{
                $t('back')
              }}</a>
            </div>
            <article class="mod mod__full-article-academy">
              <div
                v-if="articleTranslation.urlVideoMain"
                class="video-responsive mb-3 mb-md-4"
              >
                <iframe
                  class="video-responsive-item"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                  :src="articleTranslation.urlVideoMain"
                >
                </iframe>
              </div>
              <figure v-else-if="articleModel.urlImage" class="mod__figure">
                <img
                  v-lazy-load
                  :src="`https://mundocrypto-files.s3.eu-central-1.amazonaws.com/${articleModel.urlImage}`"
                />
                <!-- TODO:
                  @click="showSingle($event)"
                -->
              </figure>
              <figure v-else-if="articleModel.image" class="mod__figure">
                <img
                  v-lazy-load
                  :src="`data:image/jpeg;base64,${articleModel.image}`"
                />
                <!-- TODO:
                <img
                  @click="showSingle($event)"
                /> -->
              </figure>
              <div class="mod__body">
                <h1 class="mod__title text-32 mb-3 text-md-44">
                  {{ articleTranslation.title }}
                </h1>
                <div class="mod__foot mb-4">
                  <div class="mod__read-time">
                    <span>{{ articleModel.readingTime }}’</span>
                    <span class="author-name">
                      <font-awesome-icon :icon="['fa', 'user-circle']" />
                      {{ articleModel.author.name }}
                    </span>
                  </div>
                </div>
              </div>
              <div
                class="mod__article-text"
                v-html="articleTranslation.content"
              ></div>
              <div class="mod__article-social-links mt-4 mb-4">
                <!-- TODO:
                <a :href="socialShare('twitter')" target="_blank"
                  ><img data-not-lazy src="../assets/img/twiiter-blue.svg"
                /></a>
                <a :href="socialShare('linkedin')" target="_blank"
                  ><img data-not-lazy src="../assets/img/linkedin-blue.svg"
                /></a>
                <a :href="socialShare('facebook')" target="_blank"
                  ><img data-not-lazy src="../assets/img/facebook-blue.svg"
                /></a>
                <a
                  href="#"
                  v-clipboard:copy="socialShare('copy')"
                  @click.prevent="copiado($event)"
                  ><img data-not-lazy src="../assets/img/copy-link-blue.svg"
                /></a>
                <span class="copy-link">Enlace copiado</span>
                <a class="d-md-none" :href="socialShare('whatsapp')"
                  ><img data-not-lazy src="../assets/img/whatsapp.svg" height="20px"
                /></a>
                -->
              </div>
            </article>
          </div>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="academy-post"></div>
              <div class="mod--container mod--container__academy--loop-in-post">
                <ArticleItemComponent
                  v-for="article in articles"
                  :key="article.id"
                  :article-model="article"
                />
                <!-- TODO:
                <infinite-loading @infinite="infiniteHandler">
                  <div slot="no-more"></div>
                </infinite-loading>
                 -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div v-if="false" class="academy-post-footer pt-4 pb-5">
          <div class="container">
            <div class="space-lg-1"></div>
            <div class="row justify-content-center">
              <div class="col-12 col-md-12 col-lg-8 text-lg-center">
                <h2 class="h--big text-64 text-md-80 text-lg-100 lh_08 mb-4">
                  MundoCrypto <br class="d-md-none" />ACADEMY PRO
                </h2>
                <p
                  class="c-grey text-14 mb-4 lh_1-8 text-md-16 me-lg-5 ms-lg-5"
                >
                  Muy lejos, más allá de las montañas de palabras, alejados de
                  los países de las vocales y las consonantes, viven los textos
                  simulados.
                </p>
              </div>
              <div class="col-12 col-md-12 col-lg-12 text-lg-center mt-lg-3">
                <button class="btn btn-primary btn-lato" type="submit">
                  Registrate
                </button>
                <div class="space-1 D-MD-NONE"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- TODO:
    <vue-easy-lightbox
      escDisabled
      moveDisabled
      :visible="visible"
      :imgs="imgs"
      @hide="handleHide"
    ></vue-easy-lightbox>
    -->
  </div>
</template>

<script>
import { ArticlesService } from '../../services/articles.service'
// import ArticuloLista from '../../components/ArticuloLista.vue'

export default {
  name: 'ArticlePage',
  layout: 'largeWidth',
  async asyncData({ params, app }) {
    const slug = params.slug;
    const articlesService = new ArticlesService(app.$apiNebolus);
    const fetchArticleData = async () => {
      const articleModel = await articlesService.getArticleBySlug(slug);
      return articleModel
    }
    const articleModel = await fetchArticleData();
    const articleTranslation = app.$articleTranslation(
      articleModel.articleTranslations
    )
    articleModel.articleTranslations = articleTranslation;
    return {
      articleModel,
      articleTranslation,
      slug,
    }
  },
  data() {
    return {
      articleModel: {},
      articleTranslation: {},
      slug: '',
      visible: false,
      imgs: [],
      articles: {}
    }
  },
  async created() {
    const articlesService = new ArticlesService(this.$apiNebolus);
    const fetchArticlesData = async () => {
       const articles = await articlesService.getListArticles( {
         'page': 1,
         'per_page': 6,
         'language': 'ESP' } );
       return articles;
    }

    this.articles = await fetchArticlesData();
  }
  // metaInfo() {
  //   return {
  //     title: this.meta_title,
  //     meta: [{ name: 'description', content: this.meta_description }],
  //   }
  // },
  // components: {
  //   ArticuloLista,
  //   InfiniteLoading,
  //   VueEasyLightbox,
  // },
  // data() {
  //   return {
  //     articleData: null,
  //     relatedArticles: [],
  //     loaded: false,
  //     meta_description: '',
  //     meta_title: '',
  //     page: 1,
  //     visible: false,
  //     imgs: '',
  //   }
  // },
  // created() {
  //   articlesService
  //     .get(this.$route.params.id)
  //     .then((serviceData) => {
  //       this.articleData = serviceData.data.article
  //       this.meta_description = serviceData.data.article.meta_description
  //       this.articleData.localizationData = this.getLocalizationData(
  //         this.articleData.articlelanguage
  //       )
  //       this.meta_title = this.articleData.localizationData.title
  //       this.$emit('firstSection')
  //       this.loaded = true
  //       articlesService
  //         .getByCategory(4, this.articleData.category.slug, 1)
  //         .then((relatedData) => {
  //           relatedData.data.articles.data.forEach((element) => {
  //             if (
  //               element.id !== this.articleData.id &&
  //               this.relatedArticles.length < 3
  //             ) {
  //               this.relatedArticles.push(element)
  //             }
  //           })
  //         })
  //     })
  //     .catch(function (error) {
  //       if (error.response) {
  //         if (error.response.status == 404) {
  //           router.push({ name: 'not-found' })
  //         }
  //       }
  //     })
  // },
  // methods: {
  //   infiniteHandler($state) {
  //     this.page++
  //     articlesService
  //       .getByCategory(3, this.articleData.category.slug, this.page)
  //       .then((relatedData) => {
  //         if (relatedData.data.articles.data.length > 0) {
  //           relatedData.data.articles.data.forEach((element) => {
  //             if (element.id !== this.articleData.id) {
  //               this.relatedArticles.push(element)
  //             }
  //           })
  //           $state.loaded()
  //         } else {
  //           $state.complete()
  //         }
  //       })
  //   },
  //   copiado(event) {
  //     $(event.target).parent().addClass('copied')
  //     setTimeout(function () {
  //       $(event.target).parent().removeClass('copied')
  //     }, 1000)
  //   },
  //   showSingle(event) {
  //     this.imgs = $(event.target).attr('src')
  //     // or
  //     this.visible = true
  //   },
  //   handleHide() {
  //     this.visible = false
  //   },
  // },
}
</script>

<style scoped>
.mod__figure img {
  cursor: pointer;
}

.author-name {
  margin-left: 10px;
}
.author-name img {
  height: 18px;
}
</style>
