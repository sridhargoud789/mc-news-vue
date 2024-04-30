<template>
  <div class="main">
    <div class="bg-corporativa">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="space-1"></div>
            <h2 class="h--big c-blue-2 text-64 text-md-100 lh_08">
              {{ page.title }}
            </h2>
            <div class="space-1"></div>
          </div>
        </div>
        <div
          v-if="page.image !== null"
          class="row justify-content-center text-center">
          <figure class="mod__figure">
            <img :src="'data:image/jpeg;base64,' + page.image" />
          </figure>
        </div>
        <div class="space-1 d-none d-md-block"></div>
        <div class="row justify-content-center" v-html="page.content"></div>
      </div>
      <div class="space-2"></div>
      <div class="space-2 d-none d-lg-block"></div>
    </div>
  </div>
</template>
<script>
import { LegalsService } from '../services/legals.service';
export default {
  name: 'MisionAndValuePage',
  layout: 'largeWidth',
  async asyncData({app}) {
    const currentLocale = async () => {
      return await app.i18n.locales.filter((i) => i.code === app.i18n.locale)[0];
    }
    const apiCode = await currentLocale();
    const code = apiCode.apiCode;
    const legalsService = new LegalsService( app.$apiNebolus );
    const fetchPageData = async () => {
      const page = await legalsService.getLegalTemplate({ id: 2, code });
      return page;
    }
    const page = await fetchPageData();
    return { page };
  },
  data() {
    return {
      page: {},
    };
  },
  // data() {
  //   return {
  //     pageData: [],
  //   }
  // },
  // beforeCreate() {
  //   corporativasService.get(2).then((serviceData) => {
  //     this.pageData = serviceData.data.pages
  //     this.$emit('firstSection')
  //   })
  // },
}
</script>
