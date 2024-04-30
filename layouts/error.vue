<template>
  <v-app>
    <v-main>
      <div class="bg-404 pt-lg-5 pb-lg-5 mod__height-100">
        <div class="text-center pt-md-5 pb-md-5">
          <div class="space-1"></div>
          <div class="mb-5">
            <img data-not-lazy src="../static/img/logo-mundo_cripto.png" />
          </div>
          <p
            class="text-64 text-md-100 h2 h--big-white mb-0 lh_08 mod__text-white"
          >
            oops!
          </p>
          <p v-if="error.statusCode === 404" class="text-64 text-md-100 h2 h--big-white lh_08">
            {{ $t('notFound') }}
          </p>
          <p v-else-if="error.statusCode === 500" class="text-64 text-md-100 h2 h--big-white lh_08">
            {{ $t('internalServerError') }}
          </p>
          <p v-else class="text-64 text-md-100 h2 h--big-white lh_08">
            {{ $t('anErrorOccurred', { error: error.statusCode }) }}
          </p>
          <div class="space-1"></div>
          <nuxt-link :to="{ name: `index` }" class="btn btn-primary btn-lato">
            <img class="me-3" src="../static/img/line-return-2.svg" />
            {{ $t('backToNebolus') }}
          </nuxt-link>
          <div class="space-2"></div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'largeWidth',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
