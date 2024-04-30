<template>
  <main class="login-frame">
    <div class="login-box">
      <form class="login-form-box">
        <ValidationObserver ref="newsLetterForm" v-slot="{invalid}">
          <div class="mb-3">
            <div class="input-nb">
              <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|email"
                  name="email"
                >
                <input
                  v-model="email"
                  class="form-control"
                  type="email"
                  placeholder=""
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
                name="email"
              >
                <input
                  v-model="password"
                  class="form-control"
                  type="password"
                  placeholder=""
                />
                <label class="form-label">{{ $t('password') }}</label>
                <p v-if="errors[0]" class="mod__text-red">
                  <ul>
                    <li>{{ $t( errors[0], {min: 8} ) }}</li>
                  </ul>
                </p>
              </ValidationProvider>
            </div>
          </div>
          <div class="mb-3 text-end">
            <router-link
              :to="{ name: `auth-forward-password` }"
              class="link-pass text-12"
              >{{ $t('forwardPassword') }}</router-link
            >
          </div>
          <div class="mb-3 form-check"></div>
          <button
            class="btn btn-primary btn-access"
            type="submit"
            :disabled="invalid"
            @click.prevent="handleLogin"
            >
            {{ $t('logIn') }}
          </button>
        </ValidationObserver>
      </form>
      <!-- TODO:
      <a
        class="btn-login btn-facebook text-center"
        href="#"
        >
        @click="loginFB"
        {{ $t('logInFacebook')}}
      </a>
      -->
      <nuxt-link :to="{
        name : `auth-register`
      }" >
        {{ $t('createAccount')}}
      </nuxt-link>
    </div>
    <nuxt-link
      :to="{ name: `index` }"
      class="btn-return">
      {{ $t('backToNebolus')}}
    </nuxt-link>
  </main>
</template>
<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { SessionService } from '../../services/session.service';
export default {
  name: "LoginPage",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  layout: 'largeWidth',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  created() {
    if ( this.$auth.$state.loggedIn ) {
      this.$router.push('/');
    }
  },
  methods: {
    async handleLogin() {
      const duration = 5000;
      const sessionService = new SessionService(this.$apiNebolus, this.$auth );
      const result = await sessionService.login( {email: this.email, password: this.password} );
      if ( typeof result === 'string' && result === 'anErrorHasOccurred' ) {
        this.$toast.error( this.$t( 'anErrorOccurred', { error: this.$t( 'unexpectedError' ) }), { duration });
      } else if ( typeof result === 'string' ) {
        this.$toast.error( result, { duration });
      } else if ( !result ) {
        this.$toast.error( this.$t('anErrorOccurred', { error: this.$t('unexpectedError') }), { duration });
      } else {
        this.$toast.success( this.$t( 'logInSuccess' ), { duration });
      }
    },

  },
}
</script>
