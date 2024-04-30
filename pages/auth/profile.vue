<template>
  <div>
    <main>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 mt-md-4">
            <div class="d-none d-lg-flex flex-column">
              <a
                class="mb-3 text-18 c-grey-2"
                href="#personalInformation">
                {{ $t("personalInformation") }}
              </a>
              <!-- TODO:
              <a
                v-if="true"
                class="mb-3 text-18 c-grey-2"
                href="#image">
                {{ $t("image") }}
              </a>
              -->
              <a
                class="mb-3 text-18 c-grey-2"
                href="#newsletter">
                {{ $t("newsletter") }}
              </a>
              <a class="mb-3 text-18 c-grey-2" href="#mis-cryptos">
                {{ $t("myCryptos") }}
              </a>
              <a
                class="mb-3 text-18 c-grey-2"
                href="#nivel-cryptos">
                {{ $t("cryptosLevel") }}
              </a>
              <a class="mb-3 text-18 c-grey-2" href="#danger-zone">
                {{ $t("dangerZone") }}
              </a>
            </div>
          </div>
          <div class="col-lg-9">
            <div
              id="personalInformation"
              :class="{editable: activeEditedInformation}"
              class="card-profile p-3 p-md-4 mb-4"
              >
              <form>
                <ValidationObserver ref="newsLetterForm"  v-slot="{invalid}" class="row">
                  <div class="card-profile__header mb-3">
                    <h2 class="text-16 lato">
                      {{ $t("personalInformation") }}
                    </h2>
                    <button class="toggle-card mb-2" >
                      <img
                        class="img-edit"
                        src="~/static/img/edit.svg"
                        @click.prevent="toggleEditedInformation">
                      <span
                        class="text-save saria-condensed c-blue"
                        :style="{cursor: invalid ? 'not-allowed' : 'default'}"
                        @click.prevent="!invalid ? toggleEditedInformation() : () => {}">
                        {{ $t("save") }}
                      </span>
                    </button>
                  </div>
                  <div class="card-probile__body">
                    <div class="row">
                      <div class="col-md-4 mb-2 mb-md-0">
                        <div class="input-nb input-nb-light">
                          <ValidationProvider
                          v-slot="{ errors }"
                          rules="required"
                          name="username">
                            <input
                            v-model="username"
                            class="form-control card-edit"
                            type="text"
                            :disabled="!activeEditedInformation"
                            >
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
                      <div class="col-md-4 mb-2 mb-md-0">
                        <div class="input-nb input-nb-light">
                          <ValidationProvider
                          v-slot="{ errors }"
                          rules="required"
                          name="birthday">
                            <input
                            v-model="birthday"
                            class="form-control card-edit"
                            type="date"
                            :disabled="!activeEditedInformation"
                            >
                            <label class="form-label">
                            {{ $t("birthday") }}
                            </label>
                            <p v-if="errors[0]" class="mod__text-red">
                              <ul>
                                <li>{{ $t( errors[0] ) }}</li>
                              </ul>
                            </p>
                          </ValidationProvider>
                        </div>
                      </div>
                      <!-- TODO:
                      <div
                      v-if="false"
                      class="col-md-4 mb-2 mb-md-0">
                      <div class="input-nb input-nb-light">
                      <input
                      v-model="email"
                      class="form-control card-edit"
                      type="email"
                      :disabled="false"
                      >
                      <label class="form-label">
                      {{ $t("email") }}
                      </label>
                      </div>
                      </div>
                      -->
                      <div class="col-md-4 text-md-end mt-md-4">
                        <nuxt-link
                          :to="{ name: `auth-forward-password` }"
                          class="link-line">
                          {{ $t("changePassword") }}
                        </nuxt-link>
                      </div>
                    </div>
                  </div>
                </ValidationObserver>
              </form>
            </div>
            <div v-if="false" id="image" class="card-profile p-3 p-md-4 mb-4">
              <div class="card-profile__header mb-3">
                <h2 class="text-16 lato">
                  {{ $t("image") }}
                </h2>
              </div>
              <div class="card-probile__body">
                <div class="row">
                  <div class="col-md-7 d-flex mt-3 mt-md-2">
                    <img class="card-probile__img me-4" src="~/static/img/profile.jpg">
                    <p class="text-12 c-grey-2 mt-1 mb-4 mt-md-3">
                      Sube una imagen en png o jpeg cuadrada, con una resolución recomendada de 500x500px
                    </p>
                  </div>
                  <div class="col-md-5 mt-md-3">
                    <div class="text-center">
                      <label class="btn btn-secondary btn-lato" for="files">
                        {{ $t("uploadImage") }}
                      </label>
                      <input id="files" style="visibility:hidden;" type="file">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="newsletter"
              class="card-profile p-3 p-md-4 mb-4">
              <div class="card-profile__header mb-3">
                <h2 class="text-16 lato">{{ $t("newsletter") }}</h2>
              </div>
              <div class="card-probile__body">
                <div class="form-check form-check-inline text-12 c-grey-2">
                  <input
                   id="newsletterDaily"
                    v-model="newsletterSubscription"
                    class="form-check-input"
                    value="1"
                    type="radio"
                    name="inlineRadioOptions"
                    @change="handleChangeFrequencyNewsletter">
                  <label class="form-check-label" for="newsletter_diaria">
                    {{ $t("newsletterDaily") }}
                  </label>
                </div>
                <div class="form-check form-check-inline text-12 c-grey-2">
                  <input
                    id="newsletterWeekly"
                    v-model="newsletterSubscription"
                    class="form-check-input"
                    value="2"
                    type="radio"
                    name="inlineRadioOptions"
                    @change="handleChangeFrequencyNewsletter"
                    >
                  <label class="form-check-label" for="newsletter_semanal">
                    {{ $t("newsletterWeekly") }}
                  </label>
                </div>
                <div class="form-check form-check-inline text-12 c-grey-2">
                  <input
                    id="noNewsletter"
                    v-model="newsletterSubscription"
                    class="form-check-input"
                    type="radio"
                    value="0"
                    name="inlineRadioOptions"
                    @change="handleChangeFrequencyNewsletter"
                    >
                  <label class="form-check-label" for="no_newsletter">
                    {{ $t("noNewsletter") }}
                  </label>
                </div>
              </div>
            </div>
            <div
              id="mis-cryptos"
              class="card-profile p-3 p-md-4 mb-4"
              :class="{editable: activeEditedCryptos}"
              >
              <div class="card-profile__header mb-3">
                <h2 class="text-16 lato">
                  {{ $t("myCryptos") }}
                </h2>
                <button class="toggle-card mb-2">
                  <img class="img-edit" src="~/static/img/edit.svg" @click="toggleEditedCryptos" />
                  <span
                    class="text-save saria-condensed c-blue"
                    @click="toggleEditedCryptos">
                    {{ $t("save") }}
                  </span>
                </button>
              </div>
              <div class="card-probile__body">
                <div
                  class="btn-group btn-group-mis-cryptos justify-content-start"
                  role="group"
                  aria-label="Basic radio toggle button group">
                <div
                  v-for="crypto in cryptos"
                  :key="crypto.id"
                  class="mb-2">
                    <input
                      :id="crypto.cgId"
                      v-model="favoriteCryptos"
                      class="btn-check"
                      type="checkbox"
                      :value="crypto.id"
                      name="btnradio"
                      autocomplete="off"
                      :disabled="!activeEditedCryptos">
                    <label
                      class="btn btn-outline-primary btn-outline-black"
                      :for="crypto.cgId">
                      {{crypto.cgName}}
                    </label>
                  </div>
                </div>
                <div
                  v-if="activeEditedCryptos"
                  class="container"
                  style="background: #000;">
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
              </div>
            </div>
            <div
              id="nivel-cryptos"
              class="card-profile p-3 p-md-4 mb-4">
              <div class="card-profile__header mb-3">
                <h2 class="text-16 lato">
                  {{ $t("cryptosLevel") }}
                </h2>
              </div>
              <div class="card-probile__body">
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic radio toggle button group">
                  <div v-for="( level ) in levels" :key="level.id">
                    <input
                      :id="level.name"
                      v-model="cryptoLevel"
                      class="btn-check"
                      type="radio"
                      name="level_radio"
                      :value="level.id"
                      autocomplete="off"
                      @click="handleChangeCryptoLevel"
                      >
                    <label
                      class="btn btn-outline-primary"
                      :class="classLevel[level.code]"
                      :for="level.name"
                      >
                      {{ $t( translationLevel[level.code] ) }}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="danger-zone"
              class="card-profile p-3 p-md-4 mb-4">
              <div class="card-profile__header mb-3">
                <h2 class="text-16 lato">{{ $t("deleteAccount") }}</h2>
              </div>
              <div class="card-probile__body">
                <div class="row">
                  <div class="col-md-5 d-flex mt-3 mt-md-0">
                    <p class="text-12 c-grey-2 mt-1 mb-4 mt-md-3">
                      {{ $t("thisActionCanNotBeUndone") }}
                    </p>
                  </div>
                  <div class="col-md-7 mt-md-4">
                    <div class="text-center mb-4 mb-md-0">
                      <v-dialog
                        v-model="deleteAccountDialog"
                        persistent
                        max-width="40rem">
                        <template #activator="{ on, attrs }">
                          <v-btn plain color="error" v-bind="attrs" v-on="on">
                            {{ $t("deleteAccount") }}
                          </v-btn>
                        </template>
                        <v-card>
                          <v-card-title class="text-h5">
                            Borrar Cuenta de Usuario
                          </v-card-title>
                          <v-card-text>
                            <h3>
                              ¿Seguro que quieres borrar permanentemente tu cuenta?
                            </h3>
                            Está acción es irreversible, es decir, no podrás volver a crear tu nueva cuenta.
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="deleteAccountDialog = false"
                            >
                              {{ $t("cancel") }}
                            </v-btn>
                            <v-btn
                              color="red darken-1"
                              text
                              @click="handleDeleteAccount"
                            >
                              {{ $t("deleteAccount") }}
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>

import { ValidationProvider, ValidationObserver } from "vee-validate";
import MultiSelect from 'vue-multiselect';
import { CryptosService } from '../../services/cryptos.service';
import { LevelsService } from '../../services/levels.service';
import { SessionService } from '../../services/session.service';

export default {
  name: 'ProfilePage',
  components:{
    MultiSelect,
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      email: '',
      cryptos: [],
      cryptosSelected: [],
      cryptosToSelect: [],
      cryptosToMultiSelect: [],
      password: '',
      confirmPassword: '',
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
      spanishLevel: {
        'Principiante': 1,
        'Intermedio': 2,
        'Avanzado': 3,
      },
      spanishNewsletter: {
        'Diaria': 1,
        'Semanal': 2,
      },
      activeEditedInformation: false,
      activeEditedCryptos: false,
      cryptoLevel: 0,
      favoriteCryptos: [],
      cryptosId: [],
      levels: [],
      username: '',
      birthday: '',
      newsletterSubscription: 0,
      newsletterLanguage: '',
      selectOptions: [],
      value: [],
      deleteAccountDialog: false,
    }
  },
  async fetch() {
    this.favoriteCryptos = [];
    this.cryptos = [];
    this.cryptosId = [];
    const favoritesCryptos = this.$auth.$state.user.favoritesCryptos;

    favoritesCryptos.forEach(crypto => {
      this.favoriteCryptos.push( +crypto.id );
    });

    const cryptosService = new CryptosService(this.$apiNebolus);
    const fetchCryptosData = async ( page, perPage ) => {
      const cryptos = await cryptosService.getListCryptosCoins({
        target: 'coins',
        params: { page, 'per_page': perPage }
      });
      return cryptos;
    }
    const cryptos = await fetchCryptosData( 1, 12 );

    cryptos.forEach( ( crypto ) => {
      if ( !this.cryptosId.includes( crypto.id ) ) {
        if ( this.favoriteCryptos.includes( crypto.id ) ) {
          this.cryptos.push( crypto );
        } else {
          const element = {
            name: crypto.cgName,
            id: crypto.id,
          };
          this.cryptosToMultiSelect.push( element );
        }
        this.cryptosId.push( crypto.id );
      }
    });

    let page = 2;
    let result = 0;
    do {
      const response = await fetchCryptosData( page, 10 );
      response.forEach( (crypto) => {
        const element = {
          name: crypto.cgName,
          id: crypto.id,
        };

        if ( !this.cryptosId.includes( element.id ) && this.favoriteCryptos.includes( crypto.id ) ) {
          this.cryptos.push( crypto );
        }

        if ( !this.favoriteCryptos.includes( element.id ) && !this.cryptosId.includes( element.id ) && !this.cryptosToMultiSelect.includes( element.id ) ) {
          this.cryptosToMultiSelect.push( element );
        }
      } );
      page++;
      result = response.length;
    } while( result > 0 );
  },
  computed: {
    cryptosIntoSelected() {
      const list = [];
      for (let i = 0; i < this.cryptosSelected.length; i++) {
        list.push(this.cryptosSelected[i].name);
      }
        return list.join();
    },
  },
  async created() {
    if ( !this.$auth.$state.loggedIn ) {
      this.$router.push('/');
    }

    this.username = this.$auth.$state.user.name;
    this.birthday = this.$auth.$state.user.dateBirth;
    this.cryptoLevel = this.spanishLevel[this.$auth.$state.user.levelCrypto];
    this.newsletterSubscription = this.spanishNewsletter[this.$auth.$state.user.newsletterName] ?? 0;

    const levelsService = new LevelsService(this.$apiNebolus);
    const fetchLevelsData = async () => {
      const levels = await levelsService.getLevelsList();
      return levels;
    }
    this.levels = await fetchLevelsData();
  },
  methods: {
    toggleEditedInformation() {
      this.activeEditedInformation = !this.activeEditedInformation;
      if ( !this.activeEditedInformation ) this.handleUpdateInformation();
    },
    toggleEditedCryptos() {
      this.activeEditedCryptos = !this.activeEditedCryptos;
      if ( !this.activeEditedCryptos ) this.handleAddCryptosToMyCryptos();
    },
    async handleUpdateInformation() {
      const duration = 5000;
      const sessionService = new SessionService(this.$apiNebolus, this.$auth );
      const resultUpdateUser = await sessionService.updateUser( { 'name': this.username, 'date_birth': this.birthday});
      if ( resultUpdateUser.status === 400 ) {
        this.$toast.error( this.$i18n.t('anErrorOccurred', {error: this.$i18n.t('unexpectedError')}), { duration });
      } else if ( resultUpdateUser.status === 200 ) {
        this.$toast.success( resultUpdateUser.message, {duration});
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
    async handleChangeFrequencyNewsletter() {
      const duration = 5000;
      const sessionService = new SessionService(this.$apiNebolus, this.$auth );
      const resultUpdateUser = await sessionService.updateUser( {
        'name': this.username,
        'newsletter_id': this.newsletterSubscription
      } );

      if ( resultUpdateUser.status === 400 ) {
        this.$toast.error( this.$i18n.t('anErrorOccurred', {error: this.$i18n.t('unexpectedError')}), { duration });
      } else if ( resultUpdateUser.status === 200 ) {
        this.$toast.success( resultUpdateUser.message, {duration});
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
    async handleAddCryptosToMyCryptos() {
      const duration = 5000;
      if ( this.cryptosSelected.length < 1 ) return;

      this.cryptosSelected.forEach( (crypto) => {
        this.favoriteCryptos.push( crypto.id );
      } );

      const sessionService = new SessionService(this.$apiNebolus, this.$auth );
      const resultUpdateUser = await sessionService.updateUser( {
        'name': this.username,
        'newsletter_id': this.newsletterSubscription,
        'language_id': this.$i18n.locale.apiId,
        'cryptos': this.favoriteCryptos
      } );

      if ( resultUpdateUser.status === 400 ) {
        this.$toast.error( this.$i18n.t('anErrorOccurred', {error: this.$i18n.t('unexpectedError')}), { duration });
      } else if ( resultUpdateUser.status === 200 ) {
        this.$toast.success( resultUpdateUser.message, {duration});
        this.$fetch();
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
    async handleChangeCryptoLevel() {
      const duration = 5000;

      this.cryptosSelected.forEach( (crypto) => {
        this.favoriteCryptos.push( crypto.id );
      } );

      const sessionService = new SessionService(this.$apiNebolus, this.$auth );

      const resultUpdateUser = await sessionService.updateUser( {
        'name': this.username,
        'level_id': this.cryptoLevel,
        'language_id': this.$currentLocale().apiId,
        'newsletter_id': this.newsletterSubscription,
        'cryptos': this.favoriteCryptos
      } );

      if ( resultUpdateUser.status === 400 ) {
        this.$toast.error( this.$i18n.t('anErrorOccurred', {error: this.$i18n.t('unexpectedError')}), { duration });
      } else if ( resultUpdateUser.status === 200 ) {
        this.$toast.success( resultUpdateUser.message, {duration});
        this.$fetch();
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
    async handleDeleteAccount() {
      const duration = 5000;
      this.deleteAccountDialog = false;
      const sessionService = new SessionService(this.$apiNebolus, this.$auth );
      const resultDeleteAccount = await sessionService.deleteAccount();

      if ( resultDeleteAccount.status === 400 ) {
        this.$toast.error( this.$i18n.t('anErrorOccurred', {error: this.$i18n.t('unexpectedError')}), { duration });
      } else if ( resultDeleteAccount.status === 200 ) {
        this.$toast.success( resultDeleteAccount.message, {duration});
        this.$fetch();
      }  else if ( resultDeleteAccount.status !== 200 ) {
        if ( typeof resultDeleteAccount.message === 'string' && resultDeleteAccount.message === 'anErrorHasOccurred' ) {
          this.$toast.error( this.$t( 'anErrorHasOccurred' ), {duration});
        } else {
          this.$toast.error( resultDeleteAccount.message, {duration});
        }
      }  else {
        this.$toast.error( resultDeleteAccount.message, {duration});
      }
    }
  },
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>


