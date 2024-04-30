<template>
  <main>
    <!-- TODO: create variable showMenu -->
    <div v-if="false" class="bg-dark-2">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="trending--list trending--list__dark">
              <nuxt-link
                :to="{
                  name: 'categoria',
                  params: { categoria: 'cryptos' },
                }"
                class="trending--list__link"
                >{{ $t('all') }}</nuxt-link
              ><span>| </span>
              <nuxt-link
                :to="{
                  name: 'subcategoria',
                  params: { categoria: 'cryptos', subcategoria: 'bitcoin' },
                }"
                class="trending--list__link"
                >Bitcoin</nuxt-link
              ><span>| </span>
              <nuxt-link
                :to="{
                  name: 'subcategoria',
                  params: { categoria: 'cryptos', subcategoria: 'ethereum' },
                }"
                class="trending--list__link"
                >Ethereum</nuxt-link
              ><span>| </span>
              <nuxt-link
                :to="{
                  name: 'subcategoria',
                  params: { categoria: 'cryptos', subcategoria: 'solana' },
                }"
                class="trending--list__link"
                >Solana</nuxt-link
              ><span>| </span>
              <nuxt-link
                :to="{
                  name: 'subcategoria',
                  params: { categoria: 'cryptos', subcategoria: 'polkadot' },
                }"
                class="trending--list__link"
                >Polkadot</nuxt-link
              ><span>| </span>
              <nuxt-link
                :to="{
                  name: 'subcategoria',
                  params: {
                    categoria: 'cryptos',
                    subcategoria: 'more-altcoins',
                  },
                }"
                class="trending--list__link"
                >+ Altcoins</nuxt-link
              ><span>| </span>
              <nuxt-link
                :to="{
                  name: 'subcategoria',
                  params: { categoria: 'cryptos', subcategoria: 'more-tokens' },
                }"
                class="trending--list__link"
                >+ Tokens</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-dark pt-2 pb-2 pt-lg-3 pb-lg-3">
      <div class="container pt-1 pb-1">
        <div class="row">
          <div class="col-12">
            <h2 class="text-64 text-lg-100 h--big-white mb-0">
              {{ category }}
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5"></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="mod--container mod--container--dist-1">
            <NewItemComponent
              v-for="newModel in news"
              :key="newModel.id"
              :new-model="newModel"
              :show-subtitle="false"
            ></NewItemComponent>
            <infinite-loading @infinite="infiniteHandler">
              <div slot="no-more"></div>
              <div slot="no-results"></div>
            </infinite-loading>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'CategoryBodyComponent',
  props: {
    category: {
      type: String,
      required: true,
    },
    news: {
      type: Array,
      required: true,
    },
    infiniteHandler: () => {},
  },
}
</script>
