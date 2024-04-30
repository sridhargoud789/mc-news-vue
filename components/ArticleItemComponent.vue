<template>
  <article class="mod mod__card">
    <div class="mod__content">
      <figure class="mod__figure">
        <img
          v-if="articleModel.urlImage"
          v-lazy-load
          :src="`https://apinebolus.ole.agency/${articleModel.urlImage}`"
        />
        <img
          v-else-if="articleModel.image"
          :src="`data:image/jpeg;base64,${articleModel.image}`"
        />
        <img v-else src="~/static/img/news/news-1.jpg" />
        <figcaption :class="classLevel[code]">
          {{ $t(translationLevel[code]) }}
        </figcaption>
      </figure>
      <div class="mod__body">
        <h2 class="mod__title text-32">
          <nuxt-link
            :to="{
              path: `/article/${articleTranslation.slug}`,
              params: { slug: articleTranslation.slug },
            }"
            class="text-decoration-none text-reset"
            >{{ articleTranslation.title }}
          </nuxt-link>
        </h2>
        <div class="mod__foot">
          <div class="mod__tag">
            <nuxt-link
              :to="{
                path: `/${articleModel.category.slug}`,
                params: { category: articleModel.category.slug },
              }"
              class="text-decoration-none text-black"
              >{{ articleModel.category.name }}
            </nuxt-link>
          </div>
          <div class="mod__read-time">
            <span>{{ articleModel.readingTime }}’</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { ArticleModel } from '../models/article.model'
import { ArticleTranslationModel } from '../models/article.translation.model'

export default {
  name: 'ArticleItemComponent',
  props: { articleModel: ArticleModel },
  data() {
    return {
      classLevel: {
        PRI: 'fig_green',
        INT: 'fig_blue',
        AVA: 'fig_yellow',
      },
      translationLevel: {
        PRI: 'beginner',
        INT: 'intermediate',
        AVA: 'advanced',
      },
      code: String,
      articleModelLocal: ArticleModel,
      articleTranslation: ArticleTranslationModel,
    }
  },
  created() {
    this.code = this.articleModel.level.code;
    this.articleModelLocal = this.articleModel;
    const articleTranslation = this.$articleTranslation( this.articleModelLocal.articleTranslations );
    this.articleModelLocal.articleTranslation = this.articleTranslation;
    this.articleTranslation = articleTranslation;
    this.$nuxt.$on('changeLocale', () => this.handleUpdateLocale());
  },
  methods: {
    handleUpdateLocale() {
      const locale = this.$store.state.locale.current;
      this.articleTranslation = this.$getTranslation( this.articleModelLocal.articleTranslations, locale );
    },
  },
}
</script>
