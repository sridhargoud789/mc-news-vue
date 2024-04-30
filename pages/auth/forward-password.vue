<template>
  <main class="login-frame">
    <h2 class="mod__text-white text-32 text-center mb-5">
      {{ $t('forwardPassword') }}
    </h2>
    <div class="login-box">
      <form class="login-form-box" @submit.prevent="recoveryCall">
        <div v-if="mensajeForm !== ''" class="text-center form-text error mb-4" >
          {{ mensajeForm }}
        </div>
        <div class="mb-3">
          <div class="input-nb">
            <input
              v-model="email"
              class="form-control"
              type="email"
              placeholder=" "
            />
            <label class="form-label">{{
              $t('enterEmail')
            }}</label>
          </div>
        </div>
        <button class="btn btn-primary btn-access" type="submit">
          {{ $t('continue') }}
        </button>
      </form>
    </div>
    <button @click="goBack" class="btn-return">{{
      $t('back')
    }}</button>
  </main>
</template>

<script>
export default {
  name: 'ForwardPasswordPage',
  layout: 'largeWidth',
  data() {
    return {
      email: '',
      message: '',
    }
  },
  // methods: {
  //   recoveryCall() {
  //     if (!this.validEmail(this.email)) {
  //       this.mensajeForm = this.$t('registro.email_correcto')
  //       return false
  //     }
  //     let data = { email: this.email }
  //     axios
  //       .post('https://api.mundocrypto.com/api/forgotpassword', data)
  //       .then((response) => {
  //         this.mensajeForm = response.data.message
  //       })
  //       .catch((error) => {
  //         if (error.response.data.message) {
  //           this.mensajeForm = error.response.data.message
  //         } else {
  //           this.mensajeForm =
  //             'Se ha producido un error en el proceso de recuperación de contraseña. Por favor, vuelve a intentarlo más adelante'
  //         }
  //       })
  //   },
  // },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
