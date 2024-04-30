<template>
  <div
    v-if="coins.length > 1"
    style="height: 2.5rem !important; overflow: hidden !important; background-color: #45b2cb;"
  >
    <VueSlickCarousel
      v-if="coins.length > 1"
      :arrows="false"
      :dots="false"
      v-bind="settings"
      class="slide-track"
      style="height: 2.5rem !important; display: inline-block;"
    >
      <div
        v-for="coin in coins"
        :key="coin.cgSymbol"
        class="slide"
        >
        <img :src="coin.cgImage" />
        &nbsp;
        <span class="text-white">{{ coin.cgName }} ( {{ coin.cgSymbol.toUpperCase() }} )</span>
        &nbsp;
        <span class="text-white">{{ coin.cgCurrentPrice }}US$ </span>
        &nbsp;
        <span v-if="coin.cgPriceChangePercentage24h > 0" class="positive">{{ coin.cgPriceChangePercentage24h }} US$</span>
        <span v-else class="negative"> {{ (Math.round(coin.cgPriceChangePercentage24h * 100) / 100).toFixed(2)}} %</span>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import { CryptosService } from '../services/cryptos.service';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
export default {
  name: 'HeadbandComponent',
  components: {
    VueSlickCarousel,
  },
  data () {
    return {
      coins: [],
      settings: {
        "arrows": false,
        "dots": false,
        "infinite": true,
        "slidesToShow": 4.5,
        "slidesToScroll": 2,
        "autoplay": true,
        "speed": 7500,
        "autoplaySpeed": 500,
        "cssEase": "linear",
        "variableWidth": true,
        "rows": 1,
      }
    }
  },
  async created () {
    const cryptosService = new CryptosService( this.$apiNebolus );
    const fetchCoinsData = async () => {
      const coins = await cryptosService.getListCoinsToBanner();
      return coins;
    }
    this.coins = await fetchCoinsData();
  }
}
</script>
<style>
.slider-track {
  background: white!important;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125)!important;
  height: 2.5rem!important;
  margin: auto!important;
  overflow: hidden!important;
  position: relative!important;
}
.slider-track::before,
.slider-track::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%)!important;
  content: ""!important;
  height: 2.5rem!important;
  position: absolute!important;
  z-index: 2!important;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}

.slide-track {
  display: inline-flex;
}
.slide {
  margin-left: 2rem;
  height: 2.5rem!important;
  width: auto!important;
  display: flex!important;
  align-items: center;
  margin-left: .5rem;
}
.slide img {
  height: 1.8rem!important;
}

.text-black {
  width: auto!important;
  display: flex;
  flex-wrap: wrap;
}

.negative {
  color: red;
}

.positive {
  color: green;
}

.positive:after {
  content: "\25B2";
}

.negative:after {
  content: "\25BC";
}

.text-black span {
  padding: 5px 0px 5px 5px;
}
</style>
