<template>
  <section v-if="loading" class="bg-grey">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="mod--container mod--container--cols-home">
            <NewItemComponent
              v-for="newModel in news"
              :key="newModel.id"
              :new-model="newModel"
              :show-subtitle="false"
            ></NewItemComponent>
            <div class="mod mod__dark-2">
              <h2 class="mod__title">
                <span class="d-inline-block">
                  {{ $t('cryptoWeek') }}
                </span>
                <span class="mod__title__crypto-week">
                  <img
                    v-if="apiCrypto.cgImage"
                    v-lazy-load
                    width="26"
                    :src="`${apiCrypto.cgImage}`"
                    class="pr-2"
                  />
                  {{ apiCrypto.cgName }}
                </span>
              </h2>
              <div class="d-md-flex d-lg-block">
                <div class="mod-col-md">
                  <div class="mod__content">
                    <div class="mod__body">
                      <h3 class="mod__title_2">
                        {{ $t('whatIs', { name: apiCrypto.cgName }) }}
                      </h3>
                      <p class="mod__text">
                        {{ cryptoTranslation.homeDescription }}
                      </p>
                      <div class="mod__foot">
                        <a
                          class="link-line"
                          :href="cryptoTranslation.urlAcademy"
                          >{{ $t('knowMore') }}</a
                        >
                      </div>
                    </div>
                  </div>
                  <div class="mod__content">
                    <div class="mod__body">
                      <h3 class="mod__title_2">
                        {{ $t('analisis') }}
                      </h3>
                      <p class="mod__text">
                        {{ cryptoTranslation.analysis }}
                      </p>
                      <div class="mod__foot">
                        <a
                          class="link-line"
                          :href="cryptoTranslation.urlVideo"
                          >{{ $t('seeAnalysis') }}</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mod-col-md">
                  <div class="mod__content">
                    <div class="mod__body">
                      <h3 class="mod__title_2">
                        $ {{ apiCrypto.cgCurrentPrice }}
                      </h3>
                      <SparkLineComponent
                        :values="apiCrypto.sparkLines"
                        :filled="false"
                      />
                      <div v-if="false" class="mod__foot">
                        <nuxt-link
                          :to="{
                            path: `/category/cryptos`,
                            params: { category: 'cryptos' },
                          }"
                          class="link-line"
                          >{{ $t('seeData') }}</nuxt-link
                        >
                      </div>
                    </div>
                  </div>
                  <div class="mod__foot-end">
                    <a class="link-line" :href="cryptoTranslation.urlNotice">{{
                      $t('seeData')
                    }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="space-1"></div>

    <!-- No Copilot, b-model element, by comment -->
    <!-- TODO:
    <b-modal id="bv-modal-video" size="lg" hide-footer hide-header>
      <div class="video-responsive mb-3 mb-md-4">
        <iframe
          class="video-responsive-item"
          :src="weekCrypto.localizationData.url_video"
          id="video"
          allowscriptaccess="always"
          allow="autoplay"
        ></iframe>
      </div>
    </b-modal>
    You do make these changes to the component, but you don't need to.
    One moment, I'm going to test component
    Test component-->
  </section>
</template>
<script>
import { NewsService } from '../services/news.service'
import { WeeklyCryptoService } from '../services/weekly.crypto.service'
import { ApiCryptoModel } from '../models/api.crypto.model'
import { WeeklyCryptoTranslationModel } from '../models/weekly.crypto.translation.model'
import NewItemComponent from './NewItemComponent'
import SparkLineComponent from './SparkLineComponent'
export default {
  name: 'WeeklyCryptoComponent',
  components: {
    NewItemComponent,
    SparkLineComponent,
  },
  data() {
    return {
      loading: false,
      weekCrypto: {},
      apiCrypto: ApiCryptoModel,
      cryptoTranslation: WeeklyCryptoTranslationModel,
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0]
    },
  },
  async created() {
    const newsService = new NewsService(this.$apiNebolus);
    const code = this.currentLocale.apiCode;
    const fetchNewsData = async () => {
      const news = await newsService.getListNews({ page: 2, perPage: 7, code });
      return news;
    }
    this.news = await fetchNewsData();
    const weeklyCryptoService = new WeeklyCryptoService(this.$apiNebolus);
    const fetchWeeklyCryptoData = async () => {
      const weeklyCryptoModel = await weeklyCryptoService.getListWeeklyCrypto( code );
      return weeklyCryptoModel;
    }
    this.weeklyCrypto = await fetchWeeklyCryptoData();
    this.apiCrypto = this.weeklyCrypto.apiCrypto;
    this.cryptoTranslation = this.$anyTranslation( this.weeklyCrypto.translation );
    this.loading = true;
    this.$nuxt.$emit('section', 'crypto');
    this.$nuxt.$on('changeLocale', () => this.handleUpdateLocale());
  },
  methods: {
    handleUpdateLocale() {
      const locale = this.$store.state.locale.current;
      this.cryptoTranslation = this.$getTranslation( this.weeklyCrypto.translation, locale );
    },
    formatNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  },
}
</script>
