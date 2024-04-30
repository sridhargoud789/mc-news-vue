<template>
  <section v-if="loading" class="bg-grey">
    <div class="space-1"></div>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-4">
          <article class="mod mod__dark mt-3 mb-lg-0">
            <div class="mod__content">
              <div class="mod__body">
                <h2 class="mod__title text-24">{{ $t( 'weeklyAnalyzes' ) }}</h2>
                <p
                  class="mod__text"
                  v-html="analyzesTranslation.content"
                ></p>
              </div>
              <picture class="mod__figure">
                <img
                  :src="'data:image/jpeg;base64,' + analysis.image"
                  :alt="analyzesTranslation.home_description"
                />
              </picture>
              <div class="mod__foot">
                <a
                  class="btn btn-primary btn-play btn-sm"
                  :href="analyzesTranslation.urlVideo"
                  >{{ $t( 'seeAnalysis' ) }}</a
                >
              </div>
            </div>
          </article>
        </div>
        <div class="col-lg-8">
          <div class="row h-100">
            <div class="col-12 py-0 pt-lg-1 mt-2">
              <h2 class="h--big text-64 text-md-100 mb-2 lh_1">
                {{ $t( 'nebolusAcademyUpperCase' ) }}
              </h2>
              <!--</h2>-->
            </div>
            <div
              v-for="article in articles"
              :key="article.id"
              class="col-md-6 col-article-academy-home"
            >
              <ArticleItemComponent :article-model="article" ></ArticleItemComponent>
            </div>
            <div class="col-md-12 text-lg-end col-article-academy-home pt-lg-0 mb-lg-3">
              <nuxt-link
                :to="{ name: `academy` }"
                class="link-line">
                {{ $t( 'nebolusAcademyCamelCase' ) }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- TODO: for make in the future 11.04.2022
    <b-modal
      id="bv-modal-analysis-video"x
      class="modal-vimeo"
      centered
      hide-footer
      hide-header
    >
      <div class="video-responsive mb-3 mb-md-4">
        <iframe
          id="video"
          class="video-responsive-item"
          allowscriptaccess="always"
          allow="autoplay"
        ></iframe>
      </div>
    </b-modal>
    -->
  </section>
</template>
<script>
import { ArticlesService } from '../services/articles.service';
import { WeeklyAnalyzesService } from '../services/weekly.analyzes.service';
import { WeeklyAnalysisModel } from '../models/weekly.analysis.model';
import { WeeklyAnalyzesTranslationModel } from '../models/weekly.analyzes.translation.model';
export default {
  name: 'AcademySectionComponent',
  data() {
    return {
      articles: [],
      analysis: WeeklyAnalysisModel,
      analyzesTranslation: WeeklyAnalyzesTranslationModel,
      loading: false,
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0]
    },
  },
  async created() {
    const code = this.currentLocale.apiCode;
    const articlesService = new ArticlesService(this.$apiNebolus);
    const fetchArticlesData = async () => {
       const articles = await articlesService.getArticlesListForHome( code );
       return articles;
    }
    this.articles = await fetchArticlesData();
    const analyzesService = new WeeklyAnalyzesService(this.$apiNebolus);
    const fetchWeeklyAnalysis = async () => {
      const analysis = await analyzesService.getListWeeklyAnalysis( code );
      return analysis;
    }
    this.analysis = await fetchWeeklyAnalysis();
    this.analyzesTranslation = this.$analyzesTranslation(this.analysis.translation);
    this.loading = true;
    this.$nuxt.$emit( "section", "academy" );
  },
}
</script>
