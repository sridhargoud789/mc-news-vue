<template>
  <article class="mod" :class="className">
    <div class="mod__content" :class="className">
      <figure class="mod__figure">
        <img v-if="newModelLocal.urlImage" v-lazy-load :loading="`../static/placeholder-image.jpg`"
          :src="`https://mundocrypto-files.s3.eu-central-1.amazonaws.com/${newModelLocal.urlImage}`" />
      </figure>
      <div class="mod__body">
        <h2 class="mod__title text-30" >
          <nuxt-link v-if="newModelLocal.subcategory !== null" :to="{
            name: `news-aid-slug-notice`,
            params: {
              aid: newModelLocal.category.slug,
              slug: newModelLocal.subcategory.slug,
              notice: newTranslation.slug
            },
          }" class="text-decoration-none text-reset">
            {{ stringLimitResponsive(newTranslation.title) }}
          </nuxt-link>
          <nuxt-link
            v-else-if="newModelLocal.category.slug !== null || newTranslation != null"
            :to="{
            name: `news-aid-slug`,
            params: {
              aid: newModelLocal.category.slug,
              slug: newTranslation.slug
            },
          }" class="text-decoration-none text-reset">
            {{ stringLimitResponsive(newTranslation.title) }}
          </nuxt-link>

          <nuxt-link v-else :to="{
            name: `news-aid`,
            params: { aid: newTranslation.slug },
          }" class="text-decoration-none text-reset">
            {{ stringLimitResponsive(newTranslation.title) }}
          </nuxt-link>
        </h2>
        <p v-if="true" class="mod__text">
          {{ newTranslation.subtitle }}
        </p>
        <div class="mod__foot">
          <!-- <div class="mod__tag">
            <nuxt-link v-if="newModelLocal.subcategory !== null" :to="{
              path: `/${newModelLocal.subcategory.slug}`,
            }">{{ newModelLocal.subcategory.name }}</nuxt-link>
            <nuxt-link v-else-if="newModelLocal.category !== null" :to="{
              path: `/${newModelLocal.category.slug}`,
            }">{{ newModelLocal.category.name }}</nuxt-link>
          </div> -->
          <div class="mod__tag">
            {{ newModelLocal.category.name }}
          </div>
          <div class="mod__read-time">
            <span>{{ newModelLocal.readingTime }}’</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import { NewModel } from '~/models/new.model'
import { NewTranslationModel } from '~/models/new.translation.model'

export default {
  name: 'NewsItemComponent',
  props: {
    newModel: {
      type: Object,
      required: true,
    },
    className: { type: String, default: '' },
    showSubtitle: { type: Boolean, default: false },
  },
  data() {
    return {
      newTranslation: NewTranslationModel,
      newModelLocal: NewModel,
    }
  },
  created() {
    this.newModelLocal = this.newModel;

    this.newTranslation = this.$contentTranslation(this.newModelLocal.newTranslation);

    this.$nuxt.$on('changeLocale', () => this.handleUpdateLocale());
  },
  methods: {
    handleUpdateLocale() {
      const locale = this.$store.state.locale.current;
      this.newTranslation = this.$getTranslation(this.newModelLocal.newTranslation, locale);
    },
    stringLimitResponsive(str) {
      const strLength = str.length;
      const width = this.$store.state.device.width;
      const MAX_LENGTH = 180;
      const MIN_LENGTH = 50;
      const MIN_DEVICE_WIDTH = 400;
      let maxLength = MAX_LENGTH;

      if (width >= MIN_DEVICE_WIDTH) {
        maxLength = MAX_LENGTH
      } else {
        maxLength = MIN_LENGTH
      }
      let text = ''

      if (strLength >= maxLength) {
        text = str.substr(0, maxLength - 1)
        text += '...'
      } else {
        text = str
      }

      return text
    },
  },
}
</script>
