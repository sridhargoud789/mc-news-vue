<template>
  <main v-if="true">
    <div class="mt-5"></div>
    <section>
      <div class="space-1"></div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4 offset-lg-8">
            <div class="input-group input-group-search mb-3">
              <span class="input-group-search-icon"></span>
              <input
                v-model="searchText"
                class="form-control"
                type="text"
                placeholder="Busca por nombre..."
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
                class="coins--table__row"
                v-for="(crypto, index) in cryptos"
                :key="crypto.id"
              >
                <span class="coins--table__like">
                  <input
                    class="btn-check"
                    id="btn-check"
                    type="checkbox"
                    autocomplete="off" />
                  <label class="btn-like" for="btn-check"> </label></span
                ><span class="coins--table__num">{{ index + 1 }} </span>
                <div class="coins--table__info">
                  <img
                    width="24"
                    class="coins--table__icon me-2"
                    :src="crypto.apiCrypto.cg_image"
                  />
                  <router-link
                    :to="{
                      name: 'detalle-crypto',
                      params: { moneda: crypto.slug },
                    }"
                    class="coins--table__name me-2 text-decoration-none link-dark"
                    >{{ crypto.apiCrypto.cg_name }}</router-link
                  >
                  <span class="coins--table__type">
                 <!-- TODO:
                  {{toUpperCase(crypto.apiCrypto.cg_symbol) }}
                  -->
                  </span>
                </div>
                <span class="coins--table__price">
                  <span class="coins--table__price-title">Capitalización de mercado</span>
                 <!-- TODO:
                  $ {{ formatNumber(crypto.apicrypto.cg_current_price) }}
                  -->
                </span>
                <span class="coins--table__merch">
                 <!-- TODO:
                  $ {{ formatNumber(crypto.apicrypto.cg_market_cap) }}
                  -->
                </span>
                <span
                  v-if="crypto.apiCrypto.cg_price_change_percentage_24h < 0"
                  class="coins--table__inc c-red">
                 <!-- TODO:
                  {{ crypto.apiCrypto.cg_price_change_percentage_24h }} %
                  -->
                </span>
                <span
                  v-else
                  class="coins--table__inc">
                  +{{ crypto.apiCrypto.cg_price_change_percentage_24h }} %
                </span>
              </div>
              <infinite-loading @infinite="infiniteHandler">
                <div slot="no-more"></div>
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
import { CryptosService } from '../../services/cryptos.service';
export default {
  name: 'TopForty',
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
    const resp = await fetch(`${link}/api/top-40/index.json`);

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
      cryptos: [],
      cryptosId: [],
      isLogged: false,
    }
  },
  computed: {
    // filtraNombre() {
    //   return this.coinsData.filter((coinData) => {
    //     /*if (this.searchText == '') return coinData.apicrypto.cg_name;
    //           else return coinData.apicrypto.cg_name.search(this.searchText);*/
    //     return (
    //       coinData.apicrypto.cg_name
    //         .toLowerCase()
    //         .search(this.searchText.toLowerCase()) !== -1
    //     )
    //   })
    // },
  },
  async created(){
    const cryptosService = new CryptosService(this.$apiNebolus);
    const fetchCryptosData = async () => {
      const cryptos = await cryptosService.getListCryptos({
        page: 1,
        perPage: 20,
        target: 'top-tokenomics'
      });
      return cryptos;
    }

    this.cryptos = await fetchCryptosData();
  },
  methods: {
    // toUpperCase(text) {
    //   return text.toUpperCase()
    // },
    // formatNumber(text) {
    //   return new Intl.NumberFormat().format(text)
    // },
    // infiniteHandler($state) {
    //   if (this.coinsPage < 5) {
    //     this.coinsPage++
    //     coinsService.getTopCryptos(20, this.coinsPage).then((serviceData) => {
    //       this.coinsData = this.coinsData.concat(serviceData.data.cryptos.data)
    //       $state.loaded()
    //     })
    //   } else {
    //     $state.complete()
    //   }
    // },
    // sparklineSrc(id, size = 0) {
    //   let src = 'https://www.coingecko.com/coins/' + id + '/sparkline'
    //   if (size != 0) src += size + ' x'
    //   return src
    // },
    // marcaFavorita(coinId) {
    //   axios
    //     .put(
    //       'https://api.mundocrypto.com/api/cryptocurrencies/coins/user/' +
    //         this.$store.state.user.id +
    //         '/crypto/' +
    //         coinId
    //     )
    //     .then((resp) => {
    //       this.$store.dispatch('add_favorite_coin', resp.data.data)
    //       console.log(resp)
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //       // this.errorForm = error.response.data.message;
    //     })
    // },
    // esMonedaFavorita(id) {
    //   let i = 0
    //   for (i; i < this.$store.state.user.fav_cryptos.length; i++) {
    //     if (this.$store.state.user.fav_cryptos[i].cg_id == id) {
    //       return true
    //     }
    //   }
    //   return false
    // },
  },
}
</script>
