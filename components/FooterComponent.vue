<template>
  <footer class="main--footer">
    <div class="container pt-5" style="background-color: #1C1C1C; ">
      <p>
        La inversión en criptoactivos no está regulada, puede no ser adecuada para inversores 
        minoristas y perderse la totalidad del importe invertido. Es importante leer y comprender los 
        riesgos de esta inversión que se explican detalladamente en esta ubicación: 
        <a href="https://news.mundocrypto.com/NoInvitationtoInvest" style="color:#2d9fbc">https://news.mundocrypto.com/NoInvitationtoInvest</a>      
      </p>
      <div class="row">
        <div class="col-12">
          <img class="mb-2" src="../static/img/logo-mundo_cripto.png" style="width: 250px" />
          <div class="hr mt-4 mb-4"></div>
        </div>
        <div class="col-12 col-md-5 mb-3 col-lg-4">
            <NewsletterFooterComponent />
        </div>
        <div class="col-12 col-md-6 mb-4 offset-md-1 col-lg offset-lg-0">
          <h2 class="mb-3">{{ $t('aboutUs') }}</h2>
          <div class="d-block mb-3">
            <nuxt-link :to="{ name: `philosophy` }">
              {{ $t('philosophy') }}
            </nuxt-link>
          </div>
          <div class="d-block mb-3">
            <nuxt-link :to="{ name: `mission-values` }">
              {{ $t('missionAndValues') }}
            </nuxt-link>
          </div>
          <div class="d-block mb-3">
            <nuxt-link :to="{ name: `NoInvitationtoInvest` }">
              No Invitation to Invest
            </nuxt-link>
          </div>
          <div class="d-block mb-3">
            <!-- <nuxt-link :to="{ name: `contact` }">
              {{ $t('contact') }}
            </nuxt-link> -->
          </div>
        </div>
        <div class="col-12 col-md-6 mb-4 col-lg">
          <h2 class="mb-3">{{ $t('nebolusZone') }}</h2>
          <div class="d-block mb-3">
            <a href="https://news.mundocrypto.com/" class="nuxt-link-active">
              Mundo Crypto News
            </a>
          </div>
          <div class="d-block mb-3">
            <!-- TODO: Comment this translation that is not in nebolus.com
            <nuxt-link
              v-if="!$auth.$state.loggedIn"
              :to="{ name: `auth-register` }">
              {{ $t('register')}}
            </nuxt-link>
            -->
          </div>
          <div class="d-block mb-3">
            <!-- TODO: Correct this address to contacts
            <nuxt-link :to="{name: `contact`}">
              {{ $t("worksAt") }}
            </nuxt-link>
            -->
            <a href="mailto:academy@mundocrypto.com">
              {{ $t('worksAt') }}
            </a>
          </div>
        </div>
        <div class="col-12 col-md-6 mb-4 col-lg">
          <h2 class="mb-3">{{ $t('followUs') }}</h2>
          <div class="row">
            <div class="col-6">
              <div class="d-block mb-3">
                <a class="d-flex" href="https://t.me/joinchat/U45mgOLUQM1Qih4l" target="_blank"><img class="me-2"
                    src="../static/img/telegram.svg" />Telegram</a>
              </div>
              <div class="d-block mb-3">
                <a class="d-flex" href="https://twitter.com/mundocrypto_es" target="_blank"><img class="me-2"
                    src="../static/img/twitter.svg" />Twitter</a>
              </div>
              <div class="d-block mb-3">
                <a class="d-flex" href="https://www.instagram.com/mundocryptooficial/" target="_blank"><img class="me-2"
                    src="../static/img/instagram.svg" />Instagram</a>
              </div>
              <div class="d-block mb-3">
                <a class="d-flex" href="#" target="_blank"><img
                    class="me-2" src="../static/img/facebook.svg" />Facebook</a>
              </div>
            </div>
            <div class="col-6 mb-4">
              <div class="d-block mb-3">
                <a class="d-flex" href="https://www.youtube.com/channel/UCCcdO0Dn_6sG_C8bGsweLOQ" target="_blank"><img
                    class="me-2" src="../static/img/youtube.svg" />Youtube</a>
              </div>
              <div class="d-block mb-3">
                <a class="d-flex" href="https://www.twitch.tv/mundocryptooficial" target="_blank"><img class="me-2"
                    src="../static/img/twitch.svg" />Twitch</a>
              </div>
              <div class="d-block mb-3">
                <a class="d-flex" href="#" target="_blank"><img class="me-2"
                    src="../static/img/tiktok.svg" />Tik Tok</a>
              </div>
              <div class="d-block mb-3">
                <a class="d-flex" href="https://www.linkedin.com/school/mundocryptoacademy/" target="_blank"><img class="me-2"
                    src="../static/img/linkedin.svg" />Linkedin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main--footer__bottom">
      <div class="container pt-4 pb-4 pt-md-3 pb-md-3">
        <div class="row">
          <div class="col-12 col-md-8 mb-3 mb-md-0">
            <div class="d-block mb-1 pb-1 d-md-inline-block me-4">
              <a href="https://mundocrypto.com/terminos-y-condiciones/" class="text-12">T&eacute;rminos y condiciones</a>
            </div>
            <div class="d-block mb-1 pb-1 d-md-inline-block me-4">
              <a href="https://mundocrypto.com/politica-de-privacidad/" class="text-12">Pol&iacute;tica de privacidad</a>
            </div>
            <div class="d-block mb-1 pb-1 d-md-inline-block me-4">
              <a href="https://mundocrypto.com/politica-de-cookies/" class="text-12">Pol&iacute;tica de cookies</a>
            </div>
          </div>
          <div class="col-12 col-md-4 text-md-end">
            <span class="text-12">© {{ today }} {{ $t('copyRights') }}.</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      today: new Date().getFullYear(),
    }
  }
}

</script>

