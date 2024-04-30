<!-- TODO:
<template>
  <div class="main--header__lang d-none d-md-block ms-auto me-4">
    <dropdown class="main--header__lang-btn">
      <dropdown-item
        href="#"
        :text="ES">
        @click="changeLocale('es')"
        <img
          class="me-2"
          width="18"
          src="~/static/img/es-flag.svg">
        <span>ES</span>
      </dropdown-item>
      <dropdown-item href="#">
        @click="changeLocale('en')"
        <img
          class="me-2"
          width="18"
          src="~/static/img/en-flag.svg"
        >
        <span>EN</span>
      </dropdown-item>
    </dropdown>
  </div>
</template>
-->
<template>
  <div class="main--header__lang d-none d-md-block ms-auto me-2">
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
            <!--
              <span>{{ selectLocale.apiCode }}</span>
            -->
          <v-icon>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list class="main--header__lang-btn">
        <v-list-item
          v-for="(locale, index) in leftoverLocale"
          :key="index"
          @click="changeLanguageHandle(locale.code)">
          <img class="me-2" width="18" :src="`/img/${locale.code}-flag.svg`">
          <!--
            <span>{{ locale.apiCode }}</span>
          -->
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
<script>
// import i18n from "../i18n"
// import store from '../store';

export default {
  name: "LocaleSwitcherComponent",
  data() {
    return {
      leftoverLocale: [],
      selectLocale: this.$store.state.locale.current,
    };
  },
  created() {
    this.leftoverLocale = this.$leftoverLocale();
    this.selectLocale = this.$currentLocale();
    this.$store.dispatch('locale/stateUp', this.selectLocale );
  },
  methods: {
    changeLanguageHandle( $locale ) {
      this.selectLocale = this.$i18n.locales.filter((i) => i.code === $locale)[0];
      this.leftoverLocale = this.$i18n.locales.filter((i) => i.code !== $locale);
      this.$store.dispatch('locale/stateUp', this.selectLocale );
      this.$i18n.setLocale($locale);
      console.log( 'emit change language' );
      this.$nuxt.$emit("changeLocale", true );
    },
  },
}
</script>
