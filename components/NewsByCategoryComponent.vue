<template>
  <!-- TODO: create condition for show component -->
  <div v-if="loading && news.length > 0">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="h--big h--big--borders text-64 text-md-100 mb-4 mb-lg-5">
            <!-- TODO: set title -->
            {{ category }}
          </h2>
        </div>
        <div class="col-12">
          <div class="mod--container mod--container--infinite">
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
    <div
      v-if="index % 2 == 1 && category != 'pumppump'"
      class="banner--newsletter mb-5"
    >
      <div class="container p-3 p-md-0">
        <div class="row">
          <div class="col-12 col-md-5 col-lg-7 col-black-md pt-4 pt-lg-5">
            <h2
              class="h--big-white h--big--md-blue text-64 text-lg-100 lh_08 mb-3 mt-md-2 mt-lg-0"
              v-html="$t('stayUpToDate')"
            >
            </h2>
          </div>
          <div class="col-12 col-md-7 col-lg-5 pb-4 ps-md-5 pt-md-4 pe-md-5">
            <NewsletterComponent />
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="index % 2 == 0 && category != 'pumppump'"
      class="banner--newsletter mb-5"
    >
      <div class="container p-3 p-md-0">
        <div class="row">
          <div class="col-12 col-md-4 col-lg-6 col-black-md pt-4 pt-lg-5 pb-lg-4">
            <h2 class="h--big-white h--big--md-blue text-64 text-lg-100 lh_08 mb-4 mt-md-2 mt-lg-0">
              {{ $t('followUs') }}
            </h2>
          </div>
          <div class="col-12 col-md-8 col-lg-6 pb-4 ps-md-0 pt-md-4 pe-md-0">
            <div
              class="banner--newsletter-links f-flex flex-row mt-lg-4 pt-lg-2 ms-lg-5"
            >
              <div class="d-inline-block mb-3">
                <a
                  class="c-blue-lighter"
                  href="https://t.me/joinchat/U45mgOLUQM1Qih4l"
                  target="_blank"
                  ><img
                    class="me-2"
                    src="../static/img/telegram-blue-light.svg"
                  />Telegram</a
                >
              </div>
              <div class="d-inline-block mb-3">
                <a
                  class="c-blue-lighter"
                  href="https://twitter.com/mundocrypto_es"
                  target="_blank"
                  ><img
                    class="me-2"
                    src="../static/img/twitter-blue-light.svg"
                  />Twitter</a
                >
              </div>
              <div class="d-inline-block mb-3">
                <a
                  class="c-blue-lighter"
                  href="https://www.instagram.com/mundocryptooficial/"
                  target="_blank"
                  ><img
                    class="me-2"
                    src="../static/img/instagram-blue-light.svg"
                  />Instagram</a
                >
              </div>
              <div class="d-inline-block mb-3 me-xl-3">
                <a
                  class="c-blue-lighter"
                  href="#"
                  target="_blank"
                  ><img
                    class="me-2"
                    src="../static/img/facebook-blue-light.svg"
                  />Facebook</a
                >
              </div>

              <div class="d-inline-block mb-3">
                <a
                  class="c-blue-lighter"
                  href="https://www.youtube.com/channel/UCCcdO0Dn_6sG_C8bGsweLOQ"
                  target="_blank"
                  ><img
                    class="me-2"
                    src="../static/img/youtube-blue-light.svg"
                  />Youtube</a
                >
              </div>
              <div class="d-inline-block mb-3">
                <a
                  class="c-blue-lighter"
                  href="https://www.twitch.tv/mundocryptooficial"
                  target="_blank"
                  ><img
                    class="me-2"
                    src="../static/img/twitch-blue-light.svg"
                  />Twitch</a
                >
              </div>
              <div class="d-inline-block mb-3">
                <a
                  class="c-blue-lighter"
                  href="#"
                  target="_blank"
                  ><img
                    class="me-2"
                    src="../static/img/tiktok-blue-light.svg"
                  />Tik Tok</a
                >
              </div>
              <div class="d-inline-block mb-3">
                <a
                  class="c-blue-lighter"
                  href="https://www.linkedin.com/school/mundocryptoacademy/"
                  target="_blank"
                  ><img
                    class="me-2"
                    src="../static/img/linkedin-blue-light.svg"
                  />Linkedin</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { NewsService } from '../services/news.service';
export default {
  name: 'NewsByCategoryComponent',
  props: {
    category: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      news: [],
      loading: false,
    };
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
      const news = await newsService.getListNewsByCategory({
        category: this.category,
        target: 'category_slug',
        params: { 'appears_home': '0', 'per_page': '10', 'language': code } });
      return news;
    }
    this.news = await fetchNewsData();
    this.loading = true;
    this.$nuxt.$emit('section', 'newsByCategory');
  },
}
</script>
