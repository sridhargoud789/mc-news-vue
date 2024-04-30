<template>
  <div class="me-lg-5 pe-lg-5">
    <h2 class="mb-3">{{ $t("subscribeNewsletter") }}</h2>
    <p class="text-12">{{ $t("stayUpToDateWithAllTheNews") }}</p>
    <p v-if="error">
    <ul>
      <li>{{ error }}</li>
    </ul>
    </p>
    <p v-if="validForm" class="text-16 mod__text-white">{{ message }}</p>
    <form v-if="!success" class="mb-4">
      <ValidationObserver ref="newsLetterForm" v-slot="{ invalid }">
        <div class="mb-4">
          <ValidationProvider v-slot="{ errors }" rules="required|email" name="email">
            <input class="form-control footer-input" type="email" placeholder="Email" v-model="email">
            <p v-if="errors[0]" class="mod__text-white">
            <ul>
              <li>{{ $t(errors[0]) }}</li>
            </ul>
            </p>
          </ValidationProvider>
          <button class="btn-blue" type="submit" :disabled="invalid" @click.prevent="newsletterSubscribe()">
            {{ $t("send") }}  
          </button>
        </div>
        <div class="form-check text-12">
          <ValidationProvider v-slot="{ errors }" name="privacy" :rules="{ required: { allowFalse: false } }">
            <input v-model="privacy" class="form-check-input" type="checkbox">
            <label class="form-check-label mod__text-white" for="privacy">
              {{ $t("iAcceptPrivacy") }}
            </label>
            <br />
            <p v-if="errors[0]" class="mod__text-white">
            <ul>
              <li>{{ $t(errors[0]) }}</li>
            </ul>
            </p>
          </ValidationProvider>
        </div>
      </ValidationObserver>
    </form>
  </div>
</template>

<script>

import { ValidationProvider, ValidationObserver } from "vee-validate";
import { NewsletterService } from '../services/newsletter.service';

export default {
  name: 'NewsletterFooterComponent',
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      email: '',
      privacy: false,
      success: false,
      message: '',
      validForm: false,
      invalidForm: false,
      error: '',
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0]
    },
  },
  methods: {
    async newsletterSubscribe() {
      const code = this.currentLocale.apiCode;
      const newsletterService = new NewsletterService(this.$apiNebolus);
      const isValid = await this.$refs.newsLetterForm.validate();
      if (isValid) {
        const response = await newsletterService.subscribe({ email: this.email, code });
        if (response.status === 200) {
          this.message = response.data.message;
          this.validForm = true;
          this.success = true;
        } else {
          this.error = response.data.message;
          this.invalidForm = true;
          this.success = true;
        }
      }
    }
  }
}

</script>
