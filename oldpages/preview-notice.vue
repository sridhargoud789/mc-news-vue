<template>
  <main>
    <div class="bg-grey-2" v-if="dataFilled">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <article class="mod mod__full-article">
              <figure class="mod__figure">
                <img :src="image" />
              </figure>
              <div
                class="text-14 d-flex c-grey mb-3"
                v-if="image_description !== null"
              >
                <span class="ms-auto">{{ image_description }}</span>
              </div>
              <div class="text-14 d-flex c-grey mb-3">
                <span class="me-auto">{{ categoria }}</span>
                <span>{{ fechaFormateada(fecha) }}</span>
              </div>
              <div class="mod__body">
                <h1 class="mod__title text-32 mb-3 text-md-44">{{ title }}</h1>
                <p class="mod__sub-title text-18 text-md-21 saria-condensed">
                  {{ subtitle }}
                </p>
              </div>
              <div class="hr mt-3 mb-4 mb-md-5"></div>
              <div
                class="mod__article-text mb-5 text-md-18 lh_1"
                v-html="content"
              ></div>
              <div
                class="btn-group justify-content-md-center align-items-md-center w-100"
                role="group"
                v-if="false"
              >
                <router-link
                  :to="{ name: 'tag', params: { tag: tag.tag.slug } }"
                  v-for="tag in noticeData.noticetag"
                  class="ms-0 me-2 btn btn-outline-primary btn-outline-grey"
                  :key="tag.id"
                  >{{ tag.tag.name }}</router-link
                >
              </div>
              <div class="mod__article-social-links mt-4 mb-4">
                <a :href="socialShare('twitter')" target="_blank"
                  ><img data-not-lazy src="~/static/img/twiiter-blue.svg"
                /></a>
                <a :href="socialShare('linkedin')" target="_blank"
                  ><img data-not-lazy src="~/static/img/linkedin-blue.svg"
                /></a>
                <a :href="socialShare('facebook')" target="_blank"
                  ><img data-not-lazy src="~/static/img/facebook-blue.svg"
                /></a>
                <a
                  href="#"
                  v-clipboard:copy="socialShare('copy')"
                  @click.prevent=""
                  ><img data-not-lazy src="~/static/img/copy-link-blue.svg"
                /></a>
                <span class="copy-link">Enlace copiado</span>
                <a class="d-md-none" :href="socialShare('whatsapp')"
                  ><img data-not-lazy src="~/static/img/whatsapp.svg" height="20px"
                /></a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import $ from 'jquery'

export default {
  name: 'PreviewNoticePage',
  /*
  metaInfo() {
    return {
      title: this.meta_title,
      meta: [{ name: 'description', content: this.meta_description }],
    }
  },
  components: {},
  data() {
    return {
      noticeData: {},
      content: this.$route.query.content,
      title: this.$route.query.title,
      subtitle: this.$route.query.subtitle,
      image: this.$route.query.image,
      image_description: this.$route.query.image_description,
      fecha: this.$route.query.fecha,
      categoria: this.$route.query.categoria,
      dataFilled: true,
      related: [],
      meta_description: '',
      meta_title: '',
      page: 1,
      visible: false,
      imgs: '',
    }
  },

  beforeCreate() {
    /*await noticesService.get(this.$route.params.id)
            .then(
          serviceData => {
            this.noticeData = serviceData.data.notice;
            this.meta_description = serviceData.data.notice.meta_description;
            this.noticeData.localizationData = this.getLocalizationData(this.noticeData.noticelanguage)
            this.meta_title = this.noticeData.localizationData.title;
            this.dataFilled = true;

          }
          ).catch(function (error) {
            if (error.response) {
              if (error.response.status == 404){
                router.push({ name: 'not-found' })
              }
            }
          })
          await noticesService.getByCategory(4,this.noticeData.category.slug)
            .then(relatedData => {
                relatedData.data.notices.data.forEach(element => {
                  if (element.id !== this.noticeData.id && this.related.length < 3){
                    this.related.push(element);
                  }
                });
                //this.related = relatedData.data.notices.data
            })
  },
  methods: {
    showSingle(event) {
      this.imgs = $(event.target).attr('src')
      // or
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
  },
  */
}
</script>

<style scoped>
.mod__figure img {
  cursor: pointer;
}
</style>
