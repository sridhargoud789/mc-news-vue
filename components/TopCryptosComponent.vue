<template>
  <section v-if="loading">
    <div class="space-1"></div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="coins--table">
            <h2 class="h--big text-64 text-md-100 mb-3 lh_1">{{ $t('topOneHundred')}}</h2>
            <div class="coins--table__header d-none d-lg-flex">
              <span class="coins--table__header_number">#</span>
              <span class="coins--table__header_name">name</span>
              <span class="coins--table__header_price">price</span>
              <span class="coins--table__header_merch">capitalization</span>
              <span class="coins--table__header_inc">increment</span>
              <span class="coins--table__header_table">price table</span>
            </div>

            <div
              v-for="(crypto, index) in cryptos"
              :key="crypto.id"
              class="coins--table__row"
            >
              <span class="coins--table__like"></span>
              <span class="coins--table__num">{{ index + 1 }} </span>
              <div class="coins--table__info">
                <img
                  width="24"
                  class="coins--table__icon me-2"
                  :src="crypto.apiCrypto.cgImage"
                />
                <span
                  class="coins--table__name me-2 text-decoration-none"
                  >{{ crypto.apiCrypto.cgName }}</span
                >
                <router-link
                  v-if="false"
                  :to="{
                    name: 'detalle-crypto',
                    params: { moneda: crypto.slug },
                  }"
                  class="coins--table__name me-2 text-decoration-none link-dark"
                  >{{ crypto.apiCrypto.cgName }}</router-link
                >
                <span class="coins--table__type">
                  {{ crypto.apiCrypto.cgSymbol.toUpperCase() }}
                </span>
              </div>
              <span class="coins--table__merch">
                $ {{ crypto.apiCrypto.cgCurrentPrice}}
              </span>
              <span class="coins--table__price ">
                <span class="coins--table__price-title">
                  {{ $t('capitalization') }}
                </span>
                $ {{ crypto.apiCrypto.cgMarketCap }}
              </span>
              <span
                v-if="crypto.apiCrypto.cgPriceChangePercentage24h < 0"
                class="coins--table__inc c-red"
              >
                {{ crypto.apiCrypto.cgPriceChangePercentage24h }} %
              </span>
              <span
                v-else
                class="coins--table__inc">
                +{{ crypto.apiCrypto.cgPriceChangePercentage24h }} %
              </span>
              <SparkLineComponent
                :values="crypto.apiCrypto.sparkLines"
                :change-percentage="Number( crypto.apiCrypto.cgPriceChangePercentage24h )"
                filled="true"
              />
            </div>
          </div>
          <div class="text-center mt-4 mb-5">
            <nuxt-link
              :to="{
                name: `top-100`
              }"
              class="link-line">{{ $t('seeAll') }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="space-1"></div>
  </section>
</template>
<script>
import { CryptosService } from '../services/cryptos.service'
export default {
  name: 'TopCryptosComponent',
  data() {
    return {
      cryptos: [],
      loading: true,
    }
  },
  async created() {
    const cryptosService = new CryptosService( this.$apiNebolus );
    const fetchCryptosData = async () => {
      const cryptos = await cryptosService.getListCryptos({
        page: 1,
        perPage: 10,
        target: 'top-cryptos',
      });
      return cryptos;
    }
    this.cryptos = await fetchCryptosData();
    this.$nuxt.$emit('section', 'cryptos');
  },
}
</script>
