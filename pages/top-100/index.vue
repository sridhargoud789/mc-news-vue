<template>
  <main v-if="true">
    <div class="mt-5"></div>
    <section>
      <div class="space-1"></div>
      <div class="container">
        <div class="row">
          <!-- TODO:
            M2 Wear
            BBULDWGGRAWW
            5ugxeqcb
          <CryptosFavoritas v-if="false" />
           -->
          <div class="col-12 col-lg-4 offset-lg-8">
            <div class="input-group input-group-search mb-3">
              <span class="input-group-search-icon"></span>
              <input
                v-model="searchText"
                class="form-control"
                type="text"
                :placeholder="$t('searchCrypto')"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="coins--table">
              <div class="coins--table__header d-none d-lg-flex">
                <span class="coins--table__header_number">#</span>
                <span class="coins--table__header_name">{{ $t('name') }}</span>
                <span class="coins--table__header_price">{{ $t('price') }}</span>
                <span class="coins--table__header_merch">{{ $t('capitalization') }}</span>
                <span class="coins--table__header_inc">{{ $t('increase') }}</span>
                <span class="coins--table__header_table">{{ $t('priceTable')}}</span>
              </div>
              <div
                v-for="(crypto, index) in cryptos"
                :key="crypto.id"
                class="coins--table__row">
                <span class="coins--table__like">
                  <input
                    v-if="isLogged"
                    :id="'btn-check' + index"
                    class="btn-check"
                    type="checkbox"
                    autocomplete="off"
                  />
                   <!-- TODO:
                    :checked="esMonedaFavorita(crypto.apicrypto.cg_id)"
                    @click="marcaFavorita(crypto.apicrypto.id)"
                    -->
                  <label
                    v-if="isLogged"
                    class="btn-like"
                    :for="'btn-check' + index"
                  >
                  </label
                ></span>
                <span class="coins--table__num">{{ crypto.order }} </span>
                <div class="coins--table__info">
                  <img
                    width="24"
                    class="coins--table__icon me-2"
                    :src="crypto.apiCrypto.cgImage"
                  />
                  <span
                    class="coins--table__name me-2 text-decoration-none link-dark"
                    >{{ crypto.apiCrypto.cgName }}</span
                  >
                  <!-- TODO:
                  <router-link
                    v-if="false"
                    :to="{
                      name: 'detalle-crypto',
                      params: { moneda: crypto.slug },
                    }"
                    class="coins--table__name me-2 text-decoration-none link-dark"
                    >{{ crypto.apicrypto.cg_name }}</router-link>
                   -->
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
                  class="coins--table__inc c-red">
                  {{ crypto.apiCrypto.cgPriceChangePercentage24h }} %
                </span>
                <span
                  v-else
                  class="coins--table__inc"
                  >
                  +{{ crypto.apiCrypto.cgPriceChangePercentage24h }} %
                </span>
                <SparkLineComponent
                  :values="crypto.apiCrypto.sparkLines"
                  :change-percentage="Number( crypto.apiCrypto.cgPriceChangePercentage24h )"
                  filled="true"
                />
              </div>
              <infinite-loading @infinite="infiniteLoadHandler">
                <div slot="no-more">
                </div>
              </infinite-loading>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="space-2"></div>
  </main>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading';
import { CryptosService } from '../../services/cryptos.service';
export default {
  name: 'TopOneHundredPage',
  components: {
    InfiniteLoading,
  },
  async asyncData({ req }) {
    let link;
    if (typeof window !== 'undefined') {
      link = window.location.origin
    }
    else {
      let hostURL = req ? req.headers.host : process.env.API_URL
      if (hostURL) {
        hostURL = hostURL.replace('http://', '')
        hostURL = hostURL.replace('https://', '')
        if (hostURL.includes('localhost:')) {
          link = `http://${hostURL}`
        } else {
          link = `http://${hostURL}`
        }
      }
    }

    /**
     *  query
     */
    const resp = await fetch(`${link}/api/top-100/index.json`)

    if (!resp.ok) {
      // // redirect(404, '/error');
    }

    const data = await resp.json();

    if (data.code === 0) {
      // redirect(404, '/error')
    }

    const cryptos = [];
    const cryptosId = [];

    data.cryptosModel.forEach(( article ) => {
      if ( !cryptosId.includes( article.id ) ) {
        cryptos.push( article );
        cryptosId.push(article.id);
      }
    });

    return {
      cryptos,
      cryptosId,
    }
  },
  data() {
    return {
      searchText: '',
      isLogged: false,
      cryptos: [],
      response: [],
      cryptosIds: [],
      loading: false,
      page: 1,
      perPage: 20,
    }
  },
  async fetch(){
    const cryptosService = new CryptosService(this.$apiNebolus);
    const fetchCryptosData = async ({page, perPage}) => {
      this.loading = true;
      const cryptos = await cryptosService.getListCryptos({ page, perPage, target: 'top-cryptos' });
      this.loading = false;
      return cryptos;
    }
    let response = await fetchCryptosData({ page: this.page, perPage: this.perPage });

    this.response = [];

    if ( response.length > 0 ) {
      this.response = response;
    }

    const aux = [];

    response.forEach(( crypto ) => {
      if ( !this.cryptosIds.includes( crypto.id ) ) {
        aux.push( crypto );
        this.cryptosIds.push( crypto.id );
      }
    });

    response = aux;

    if ( this.page < 2 ) {
      this.cryptos = response;
    } else {
      this.cryptos = [...this.cryptos, ...response];
    }
  },
  methods: {
    infiniteLoadHandler( $state ) {
      this.perPage = 3;
      if ( !this.loading ) {
        this.page++;
        this.$fetch().then(() => {
          $state.loaded();
        });
        if ( this.response.length <= 1 ) {
          $state.complete();
        }
      }
    },
  },
}
</script>
