<template>
  <div>
    <main v-if="step == 1" class="login-frame login-frame__sign-in">
      <div class="starts-box mb-3 me-lg-5 pt-lg-1">
        <h2 class="h--big-white h--big-inner-rotate text-64 text-md-100 lh_08 mb-4 mb-md-5 mt-md-5">
          <span class="sign-in d-none d-md-block">{{ $t( 'signUp' ) }}</span>
          <!--
          <span>{{ $t('trust') }} <br> {{ $t('yourSelf') }}</span>
          -->
          <img class="ms-md-3 me-3" style="width: 25rem;" src="~/static/img/logo-mundo_cripto.png" />
        </h2>
         <p class="d-flex align-items-start text-14 text-md-16 ms-md-16 ps-md-4" style="height: 3rem;">
          <img class="ms-md-3 me-3" src="~/static/img/sign-1.svg"  style="display: none!important;" />
          <span class="mt-1" style="display: none!important; height: 4rem;">{{ $t("customHome") }}</span>
        </p>
        <p class="d-flex align-items-start text-14 text-md-16 ms-md-16 ps-md-4" style="height: 3rem;">
          <img class="ms-md-3 me-3" src="~/static/img/sign-2.svg" style="display: none!important;" />
          <span class="mt-1" style="display: none!important; height: 4rem;">{{ $t("directAccess") }}</span>
        </p>
        <p class="d-flex align-items-start text-14 text-md-16 ms-md-16 ps-md-4" style="height: 3rem;">
          <img class="ms-md-3 me-3" src="~/static/img/sign-3.svg" style="display: none!important;"/>
          <span class="mt-1" style="display: none!important; height: 4rem;">{{ $t("newsletterUpdate") }}
          </span>
        </p>
      </div>
      <div class="login-box pt-2 pb-3 pt-md-5 pb-md-5 mt-md-3">
        <form class="login-form-box" autocomplete="off">
          <ValidationObserver ref="newsLetterForm" v-slot="{invalid}">
            <div class="mb-3">
              <div class="input-nb">
              <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|email"
                  name="email">
                <input
                  v-model="email"
                  class="form-control"
                  type="email"
                  placeholder=" "
                  required
                />
                <label class="form-label">{{ $t('email') }}</label>
                <p v-if="errors[0]" class="mod__text-red">
                  <ul>
                    <li>{{ $t( errors[0] ) }}</li>
                  </ul>
                </p>
              </ValidationProvider>
              </div>
            </div>
            <div class="mb-3">
              <div class="input-nb">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|min:8"
                  name="password"
                  vid="password">
                  <input
                    v-model="password"
                    class="form-control"
                    type="password"
                    placeholder=" "
                    required/>
                  <label class="form-label">{{ $t("password") }}</label>
                  <p v-if="errors[0]" class="mod__text-red">
                    <ul>
                      <li>{{ $t( errors[0], { min: 8, } ) }}</li>
                    </ul>
                  </p>
                </ValidationProvider>
              </div>
            </div>
            <div class="mb-4">
              <div class="input-nb">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|min:8|confirmed:password"
                  name="confirmPassword">
                  <input
                    v-model="confirmPassword"
                    class="form-control"
                    type="password"
                    placeholder=" "
                    required
                  />
                  <label class="form-label">{{ $t("confirmPassword") }}</label>
                  <p v-if="errors[0]" class="mod__text-red">
                    <ul>
                      <li>{{ $t( errors[0], { min: 8, field: $t( 'password' ), confirm: $t( 'confirmPassword' ) } ) }}</li>
                    </ul>
                  </p>
                </ValidationProvider>
              </div>
            </div>
            
            <div class="mb-4">
              <div class="input-nb">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                  name="phone">
                  <input
                    v-model="phone"
                    class="form-control"
                    type="text"
                    placeholder=" "
                    required
                  />
                  <label class="form-label">{{ $t("phone") }}</label>
                  <p v-if="errors[0]" class="mod__text-red">
                    <ul>
                      <li>{{ $t( errors[0] ) }}</li>
                    </ul>
                  </p>
                </ValidationProvider>
              </div>
            </div>

            <div class="mb-4">
              <div class="form-check mb-2">
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: { allowFalse: false } }"
                  name="adult">
                  <input
                    id="flexCheckDefault"
                    v-model="adult"
                    class="form-check-input check-nb me-2"
                    type="checkbox"
                    value=""
                    required
                  />
                  <label class="form-check-label mod__text-white text-12" for="flexCheckDefault">{{ $t("adult") }}</label>
                   <p v-if="errors[0]" class="mod__text-red">
                    <ul>
                      <li>{{ $t( errors[0] ) }}</li>
                    </ul>
                  </p>
                </ValidationProvider>
              </div>
              <div
                class="form-check mb-3"
                style="display: flex;"
                >
                <ValidationProvider
                  v-slot="{ errors }"
                  :rules="{ required: { allowFalse: false } }"
                  name="privacyPolicy">
                  <input
                    id="flexCheckChecked"
                    v-model="privacyPolicy"
                    class="form-check-input check-nb me-2"
                    type="checkbox"
                    value=""
                    checked=""
                    required
                  />
                  <label class="form-check-label mod__text-white text-12" for="flexCheckChecked">{{ $t("privacyPolicy") }}</label>
                  <p v-if="errors[0]" class="mod__text-red">
                    <ul>
                      <li>{{ $t( errors[0] ) }}</li>
                    </ul>
                  </p>
                </ValidationProvider>
              </div>
            </div>
            <div class="mb-3">
              <button
                class="btn btn-primary btn-access"
                :disabled="invalid"
                @click.prevent="handleSubmit"
              >
                {{ $t("createAccount") }}
              </button>
            </div>
            <div class="text-center">
              <nuxt-link
                :to="{
                  name: `auth-login`
                }" class="link-blue"
                >{{ $t("doYouAlreadyAccount") }}
              </nuxt-link>
            </div>
          </ValidationObserver>
        </form>
      </div>
    </main>

    <main v-if="step == 2" class="login-frame">
      <div class="login-frame__question">
        <button
          class="btn-skip"
          @click.prevent="nextStep( 3 )"
          >
          {{ $t("skip") }}
        </button>
        <h2 class="mod__text-white text-32 text-center">
          {{ $t("whatIsYourLevelInCryptos") }}
        </h2>
        <div class="space-1 mb-2"></div>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <div v-for="level in levels" :key="level.id">
            <input
              :id="level.code"
              v-model="cryptoLevel"
              class="btn-check"
              type="radio"
              name="level_radio"
              :value="level.id"
              autocomplete="off"
            />
            <label
              class="btn btn-outline-primary"
              :class="classLevel[level.code]"
              :for="level.code"
              >{{ $t(translationLevel[level.code]) }}</label
            >
          </div>
        </div>
        <div class="space-1 mb-4"></div>
        <div class="text-center">
          <button
            class="btn btn-primary btn-access w-auto"
            @click.prevent="nextStep( 3 )"
          >
            {{ $t("continue") }}
          </button>
        </div>
      </div>
    </main>
    <main
      v-if="step == 3"
      class="login-frame"
      >
      <div
        class="login-frame__question"
      >
        <button
          class="btn-skip"
          @click.prevent="nextStep( 4 )"
        >
          {{ $t("skip") }}
        </button>
        <div class="text-center mt-5 mt-md-0">
          <h2 class="mod__text-white text-32">
            {{ $t("whatCryptosInterestYou") }}
          </h2>
          <p class="mod__text-white text-14">
            {{ $t("messageInterest") }}
          </p>
        </div>
        <div class="space-1 mb-2"></div>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <div v-for="crypto in cryptosToSelect" :key="crypto.id">
            <input
              :id="crypto.cgId"
              v-model="favoriteCryptos"
              class="btn-check"
              type="checkbox"
              :value="crypto.id"
              name="btnradio"
              autocomplete="off"
            />
            <label
              class="btn btn-outline-primary btn-outline-white"
              :for="crypto.cgId">
              {{ crypto.cgName }}
              </label>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-sm-10 col-md-4">
            <div class="text-center">
              <label class="mod__text-white text-14 mb-3 mt-4">
                {{ $t( 'cannotFindTheCryptoYouAreLookingFor' ) }}
              </label>
            </div>
            <multi-select
              v-model="cryptosSelected"
              :options="cryptosToMultiSelect"
              class="multiselect__personal"
              :multiple="true"
              :close-on-select="false"
              :clear-on-select="false"
              :preserve-search="true"
              label="name"
              track-by="name"
              :preselect-first="false"
              :placeholder="$t( 'searchCrypto' )"
            >
              <template slot="selection" slot-scope="{ values, isOpen }">
                <span
                  v-if="values.length &amp;&amp; !isOpen"
                  class="multiselect__single"
                  >{{ cryptosIntoSelected }}</span
                ></template
              >
            </multi-select>
          </div>
        </div>
      </div>

      <div class="space-1 mb-4"></div>
      <div class="text-center">
        <button
          class="btn btn-primary btn-access w-auto"
          type="submit"
          @click.prevent="nextStep( 4 )"
        >
          {{ $t("continue") }}
        </button>
      </div>
    </main>
    <main
      v-if="step == 4"
      class="login-frame"
      >
      <div class="login-box pt-2 pb-3 pt-md-5 pb-md-5 mt-md-3">
        <form class="login-form-box ms-4 me-4 me-md-0 ms-md-0 mt-4">
          <ValidationObserver ref="newsLetterForm" v-slot="{invalid}">
            <div class="mb-3">
              <div class="input-nb w-auto">
              <ValidationProvider
                v-slot="{ errors }"
                rules="required"
                name="email">
                  <input
                    v-model="username"
                    class="form-control"
                    type="text"
                    placeholder=" "
                  />
                  <label class="form-label">
                    {{ $t("username") }}
                  </label>
                  <p v-if="errors[0]" class="mod__text-red">
                    <ul>
                      <li>{{ $t( errors[0] ) }}</li>
                    </ul>
                  </p>
                </ValidationProvider>
              </div>
            </div>
            <div class="mb-3">
              <div class="input-nb w-auto">
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required"
                  name="birthday">
                  <input
                    v-model="birthday"
                    class="form-control"
                    type="date"
                    placeholder=" "
                  />
                  <label class="form-label">{{
                    $t("birthday")
                  }}</label>
                  <p v-if="errors[0]" class="mod__text-red">
                    <ul>
                      <li>{{ $t( errors[0] ) }}</li>
                    </ul>
                  </p>
                </ValidationProvider>
              </div>
            </div>
            <div class="mb-4 d-flex">
              <div class="form-check me-3">
                <input
                  id="newsletterDaily"
                  v-model="newsletterSubscription"
                  class="form-check-input radio-nb mt-2"
                  value="1"
                  type="radio"
                  name="newsletterSubscription"
                />
                <label
                  class="form-check-label text-12 mod__text-white pt-2"
                  for="newsletterDaily"
                  >{{ $t("newsletterDaily") }}</label
                >
              </div>
              <div class="form-check me-3">
                <input
                  id="newsletterWeekly"
                  v-model="newsletterSubscription"
                  class="form-check-input radio-nb mt-2"
                  value="2"
                  type="radio"
                  name="newsletterSubscription"
                />
                <label
                  class="form-check-label text-12 mod__text-white pt-2"
                  for="newsletterWeekly"
                  >{{ $t("newsletterWeekly") }}</label
                >
              </div>
              <div class="form-check me-3">
                <input
                  id="noNewsletter"
                  v-model="newsletterSubscription"
                  class="form-check-input radio-nb mt-2"
                  value="0"
                  type="radio"
                  name="newsletterSubscription"
                />
                <label
                  class="form-check-label text-12 mod__text-white pt-2"
                  for="noNewsletter"
                  >{{ $t("noNewsletter") }}</label
                >
              </div>
            </div>
            <div
              v-if="newsletterSubscription != 0"
              class="mb-3">
              <label class="form-label mod__text-white saria-condensed">{{
                $t("languageNewsletter")
              }}</label>
            </div>

            <div
              v-if="newsletterSubscription != 0"
              id="news-lang-container"
              class="main--header__lang mb-4"
              :class="selectLocale.code"
            >
              <v-menu offset-y>
                <template #activator="{ on, attrs }">
                  <v-btn
                    elevation="0"
                    large
                    v-bind="attrs"
                    style="border-radius: 1px;"
                    v-on="on"
                    >
                    <img
                      v-if="selectLocale.code"
                      class="me-2"
                      width="18"
                      :src="`/img/${selectLocale.code}-flag.svg`">
                    <span>{{ selectLocale.apiCode }}</span>
                    <v-icon>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list class="main--header__lang-btn">
                  <v-list-item
                    v-for="(locale, index) in allLocales"
                    :key="index"
                    @click="changeLanguageHandle(locale.code)">
                    <img class="me-2" width="18" :src="`/img/${locale.code}-flag.svg`">
                    <span>{{ locale.apiCode }}</span>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>

            <div class="mb-3">
              <button
                class="btn btn-primary btn-access"
                type="submit"
                :disabled="invalid"
                @click.prevent="handleUserUpdate"
              >
                {{ $t("createAccount") }}
              </button>
            </div>
          </ValidationObserver>
        </form>
      </div>
    </main>
  </div>
</template>

<script>

import { ValidationProvider, ValidationObserver } from "vee-validate";
import MultiSelect from "vue-multiselect";
import { LevelsService } from '../../services/levels.service';
import { CryptosService } from '../../services/cryptos.service';
import { SessionService } from '../../services/session.service';

export default {
  name: "RegisterPage",
  components: {
    MultiSelect,
    ValidationProvider,
    ValidationObserver
  },
  layout: 'largeWidth',
  data() {
    return {
      step: 1,
      email: "",
      password: "",
      phone: "",
      confirmPassword: "",
      privacyPolicy: true,
      adult: false,
      levels: [],
      cryptoLevel: 1,
      translationLevel: {
        PRI: 'beginner',
        INT: 'intermediate',
        AVA: 'advanced',
      },
      classLevel: {
        PRI: 'btn-outline-green',
        INT: 'btn-outline-blue',
        AVA: 'btn-outline-red',
      },
      cryptos: [],
      cryptosSelected: [],
      cryptosToSelect: [],
      cryptosToMultiSelect: [],
      favoriteCryptos: [1, 2, 9],
      allLocales: [],
      selectLocale: () => this.currentLocale(),
      errorForm: "",
      username: "",
      birthday: "",
      newsletterSubscription: "1",
    };
  },
  computed: {
    cryptosIntoSelected() {
      const list = [];
      for (let i = 0; i < this.cryptosSelected.length; i++) {
        list.push(this.cryptosSelected[i].name);
      }
        return list.join();
    },
    currentLocale() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0]
    },
  },
  async created() {
    if ( this.$auth.$state.loggedIn ) {
      this.$router.push('/');
    }

    /**
    * @author Rafael Duarte <elyouus94@gmail.com>
    * @date 26/04/2022
    * @description load all levels
    */
    const levelsService = new LevelsService(this.$apiNebolus);
    const fetchLevelsData = async () => {
      const levels = await levelsService.getLevelsList();
      return levels;
    }
    this.levels = await fetchLevelsData();
    /** #@- */

    const cryptosService = new CryptosService(this.$apiNebolus);
    const fetchCryptosData = async ( page, perPage ) => {
      const cryptos = await cryptosService.getListCryptosCoins({
        target: 'coins',
        params: { page, 'per_page': perPage }
      });
      return cryptos;
    }
    this.cryptosToSelect = await fetchCryptosData( 1, 12 );

    let page = 2;
    let result = 0;
    do {
      const response = await fetchCryptosData( page, 10 );
      response.forEach( (crypto) => {
        const element = {
          name: crypto.cgName,
          id: crypto.id,
        };

        if ( !this.cryptosToSelect.includes( element.id )  &&
          !this.favoriteCryptos.includes( element.id )  &&
          !this.cryptosToMultiSelect.includes( element.id ) ) {
          this.cryptosToMultiSelect.push( element );
        }
      } );
      page++;
      result = response.length;
    } while( result > 0 );

    this.allLocales = await this.$i18n.locales;

    this.selectLocale = this.currentLocale;
  },
  methods: {
    changeLanguageHandle( $locale ) {
      this.selectLocale = this.allLocales.filter((i) => i.code === $locale)[0];
    },
    nextStep( $step ) {
      this.step = $step;
    },
    async handleSubmit() {
      const duration = 5000;
      const sessionService = new SessionService(this.$apiNebolus, this.$auth );
      const result = await sessionService.signUp( {
        email: this.email,
        password: this.password,
        adult: this.adult,
        phone_number: this.phone,
        privacyPolicy: this.privacyPolicy
      } );
      if ( result.status === 400 ) {
        this.$toast.error( this.$i18n.t('anErrorOccurred', {error: this.$i18n.t('unexpectedError')}), { duration });
      } else if ( result.status === 201 ) {
        this.$toast.success( this.$t( 'successfulRegistration' ), { duration });
        this.nextStep( 2 );
      }  else if ( result.status !== 200 ) {
        if ( typeof result.message === 'string' && result.message === 'anErrorHasOccurred' ) {
          this.$toast.error( this.$t( 'anErrorHasOccurred' ), {duration});
        } else {
          this.$toast.error( result.message, {duration});
        }
      }  else {
        this.$toast.error( result.message, {duration});
      }

    },
    async handleUserUpdate() {
      const duration = 5000;
      this.cryptosSelected.forEach( (crypto) => {
        if ( !this.favoriteCryptos.includes( crypto.id ) ) {
          this.favoriteCryptos.push( crypto.id );
        }
      } );

      this.username = this.username.trim();

      const sessionService = new SessionService(this.$apiNebolus, this.$auth );
      const resultUpdateUser = await sessionService.updateUser( {
        'name': this.username,
        'date_birth': this.birthday,
        'level_id': this.cryptoLevel,
        'newsletter_id': this.newsletterSubscription,
        'language_id': this.selectLocale.apiId,
        'cryptos': this.favoriteCryptos});
      if ( resultUpdateUser.status === 400 ) {
        this.$toast.error( this.$i18n.t('anErrorOccurred', {error: this.$i18n.t('unexpectedError')}), { duration });
      } else if ( resultUpdateUser.status === 200 ) {
        this.$toast.success( resultUpdateUser.message, {duration});
        this.$router.push('/');
      }  else if ( resultUpdateUser.status !== 200 ) {
        if ( typeof resultUpdateUser.message === 'string' && resultUpdateUser.message === 'anErrorHasOccurred' ) {
          this.$toast.error( this.$t( 'anErrorHasOccurred' ), {duration});
        } else {
          this.$toast.error( resultUpdateUser.message, {duration});
        }
      }  else {
        this.$toast.error( resultUpdateUser.message, {duration});
      }
    },
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style scoped>
.btn-skip {
  top: 125px;
}
</style>

