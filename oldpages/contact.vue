<template>
  <section class="contact-section">
    <div class="space-1 d-none d-lg-block"></div>
    <div class="space-1"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mb-md-5">
          <h2 class="lh_08 mb-4 mb-md-1">
            <span class="h--big text-64 text-md-100 mb-0 top-more c-blue-2">Muy lejos, más allá de las</span>
            <br>
            <span class="text-64 text-md-100 text-uppercase saria-e-condensed c-blue-2">montañas de palabras</span>
          </h2>
        </div>
        <div class="col-lg-6 mt-lg-5 pt-lg-4 pe-lg-5">
          <p v-if="errors.length">
            <ul>
              <li v-for="error in errors" :key="error.id">{{ error }}</li>
            </ul>
          </p>
          <form class="contact-form">
            <div class="mb-4">
              <input
                v-model="email"
                class="form-control"
                type="email"
                placeholder="Email">
            </div>
            <div class="mb-4">
              <textarea
                v-model="comentario"
                class="form-control"
                placeholder="Comentario"
                rows="5" >
              </textarea>
            </div>
            <div class="mb-3 form-check text-12">
              <input
                id="exampleCheck1"
                v-model="privacidad"
                class="form-check-input"
                type="checkbox">
              <label class="form-check-label" for="exampleCheck1">He leído y acepto la política de privacidad</label>
            </div>
            <div class="text-center text-md-start">
              <button
                v-if="!success"
                class="btn btn-primary btn-lato"
                type="submit"
                >
                <!-- TODO:
                @click.prevent="sendComment()"
                -->
                  Enviar
                </button>
              <div
                v-if="success"
                class="alert alert-success"
                role="alert">
                  {{ $t("validation.contacto_ok") }}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="space-1"></div>
    <div class="space-1 d-none d-lg-block"></div>
  </section>
</template>

<script>
export default {
    name: 'ContactPage',
    // mounted() {
    //   this.$emit('firstSection')
    // },
    // data() {
    //     return {
    //         email: "",
    //         comentario: "",
    //         privacidad: false,
    //         errors:[],
    //         success: false
    //
    //     }
    // },
    // methods: {
    //     sendComment(){
    //         this.errors = [];
    //         if (!this.validEmail(this.email)){
    //             this.errors.push(this.$t("validation.email"));
    //         }
    //         if (!this.privacidad){
    //             this.errors.push(this.$t("validation.privacidad"));
    //         }
    //         if (this.comentario.trim() == ""){
    //             this.errors.push(this.$t("validation.comentarios"));
    //         }
    //         if (this.errors.length > 0){
    //             return false
    //         }
    //         const data = { email: this.email, comment: this.comentario, accept_private_policy: this.privacidad };
    //         axios.post("https://api.mundocrypto.com/api/contacts", data)
    //             .then(() => {
    //                 console
    //                 this.success = true;
    //             })
    //             .catch(error => {
    //                 this.errors.push(error.response.data.message);
    //             });
    //     }
    // }
}
</script>

