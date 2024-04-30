<template>
  <header class="main--header">
    <div
      class="-header" style="display: flex; position: relative; align-items: center; min-width: 50%;">
      <nuxt-link :to="{ name: `index` }" class="main--header__logo">
        <img
          class="desktop"
          data-not-lazy
          :src="require(`~/static/img/logo-mundo_cripto.png`)"
        />
        <img
          class="mobile"
          data-not-lazy
          :src="require(`~/static/img/mundo-crypto-mobile_logo.png`)"
        />
        <span class="mcArea">News</span>
      </nuxt-link>
      <nav class="main--header__nav ms-4 d-none d-lg-flex">
        <!-- <div class="dropdown-nb">
          <span class="nav-link nav_dropdown">{{ $t('all') }}</span>
          <div class="dropdown-nb-content">
            <div class="container">
              <div class="row">
                <div class="col-6">
                  <a class="dropdown-nb-content__title" href="#">{{
                      $t('present')
                  }}</a>
                  <div class="row gx-2">
                    <div class="col-7">
                      <h3>
                        <nuxt-link
                          :to="{
                            path: `/news/cryptos`,
                            params: { aid: 'cryptos' },
                          }"
                        >
                          {{ $t('cryptos') }}
                        </nuxt-link>
                      </h3>
                      <div class="tags-links">
                        <div class="item">
                          <nuxt-link
                            :to="{
                              name: `news-aid-slug`,
                              path: `/news/cryptos/bitcoin`,
                              params: {
                                aid: 'cryptos',
                                slug: 'bitcoin',
                              },
                            }"
                          >
                            <img data-not-lazy src="../static/img/bitcoins/bitcoin.svg" />
                            {{ $t('bitcoin') }}
                          </nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              name: `news-aid-slug`,
                              path: `/news/cryptos/ethereum`,
                              params: {
                                aid: 'cryptos',
                                slug: 'ethereum',
                              },
                            }"
                          ><img data-not-lazy src="../static/img/bitcoins/ethereum.svg" />
                            {{ $t('ethereum') }}
                          </nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              name: `news-aid-slug`,
                              path: `/news/cryptos/ethereum`,
                              params: {
                                aid: 'cryptos',
                                slug: 'cardano',
                              },
                            }"
                          >
                            <img data-not-lazy src="../static/img/bitcoins/cardano.svg" />
                            {{ $t('cardano') }}
                          </nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              name: `news-aid-slug`,
                              path: `/news/cryptos/polkadot`,
                              params: {
                                aid: 'cryptos',
                                slug: 'polkadot',
                              },
                            }"
                          >
                            <img data-not-lazy src="../static/img/bitcoins/polkadot.svg" />
                            {{ $t('polkadot') }}
                          </nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              name: `news-aid-slug`,
                              path: `/news/cryptos/solana`,
                              params: {
                                aid: 'cryptos',
                                slug: 'solana',
                              },
                            }"
                          >
                            <img data-not-lazy src="../static/img/bitcoins/solana.svg" />
                            {{ $t('solana') }}
                          </nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              name: `news-aid-slug`,
                              path: `/news/cryptos/more-altcoins`,
                              params: {
                                aid: 'cryptos',
                                slug: 'more-altcoins',
                              },
                            }"
                          >{{ $t('technology') }}</nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              name: `news-aid-slug`,
                              path: `/news/cryptos/more-tokens`,
                              params: {
                                aid: 'cryptos',
                                slug: 'more-tokens',
                              },
                            }"
                          >{{ $t('moreTokens') }}</nuxt-link>
                        </div>
                      </div>
                    </div>
                    <div class="col-5">
                      <div class="tags-links">
                        <div class="item">
                          <nuxt-link
                            :to="{
                              path: `/news/tecnologia`,
                              params: { aid: 'tecnologia' },
                            }"
                          >
                            {{ $t('technology') }}
                          </nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              path: `/news/negocios`,
                              params: { aid: 'negocios' },
                            }"
                          >
                            {{ $t('business') }}
                          </nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              path: `/news/defi`,
                              params: { aid: 'defi' },
                            }"
                          >
                            {{ $t('defi') }}
                          </nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              path: `/news/nfts-metaverso`,
                              params: { aid: 'nfts-metaverso' },
                            }"
                          >
                            {{ $t('nftsMetaverso') }}
                          </nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              path: `/news/segurcategoryad`,
                              params: { aid: 'segurcategoryad' },
                            }"
                          >
                            {{ $t('security') }}
                          </nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              path: `/news/regulaciones`,
                              params: { aid: 'regulaciones' },
                            }"
                          >
                            {{ $t('regulations') }}
                          </nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              path: `/news/exchanges-wallets`,
                              params: { aid: 'exchanges-wallets' },
                            }"
                          >
                            {{ $t('exchangesWallets') }}
                          </nuxt-link>
                          <span class="item-separator">/</span>
                        </div>
                        <div class="item">
                          <nuxt-link
                            :to="{
                              path: `/news/editorial`,
                              params: { aid: 'editorial' },
                            }"
                          >
                            {{ $t('editorial') }}
                          </nuxt-link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <a class="dropdown-nb-content__title" href="#">
                    {{ $t('market') }}
                  </a>
                  <div class="tags-links">
                    <div class="item">
                      <nuxt-link v-if="false"
                        :to="{
                          name: `news-aid-slug`,
                          path: `/news/investigacion/analisis`,
                          params: {
                            aid: 'investigacion',
                            slug: 'analisis',
                          },
                        }"
                      >
                        <img :src="'../static/img/bitcoins/ethereum.svg'" />
                        {{ $t('analysis') }}
                      </nuxt-link>
                      <span class="item-separator">/</span>
                    </div>
                    <div class="item">
                      <nuxt-link
                        :to="{
                          name: `top-100`,
                        }"
                      >
                        {{ $t('topOneHundredCryptos') }}
                      </nuxt-link>
                      <span class="item-separator">/</span>
                    </div>
                  </div>
                </div>
                <div class="col-3">
                  <nuxt-link
                    :to="{
                      path: `/news/pumppump`,
                      params: { aid: 'pumppump' },
                    }"
                  >
                    {{ $t('pumpPump') }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div> -->
        <div class="dropdown-nb">
          <span class="nav-link nav_dropdown">{{ $t('cryptonews') }}</span>
          <!-- bg-i-dropdown -->
          <div class="dropdown-nb-content">
            <div class="container">
              <div class="row">
                <!-- <div class="col-4">
                  <nuxt-link
                    :to="{
                      path: `/news/cryptos`,
                      params: { aid: 'cryptos' },
                    }"
                    class="dropdown-nb-content__title"
                  >
                    {{ $t('cryptos') }}
                  </nuxt-link>
                  <div class="tags-links">
                    <div class="col-6">
                      <nuxt-link
                        :to="{
                          name: `news-aid-slug`,
                          path: `/news/cryptos/bitcoin`,
                          params: {
                            aid: 'cryptos',
                            slug: 'bitcoin',
                          },
                        }"
                      >
                        <img
                          data-not-lazy
                          src="../static/img/bitcoins/bitcoin.svg"
                        />
                        {{ $t('bitcoin') }}
                      </nuxt-link>
                      <nuxt-link
                        :to="{
                          name: `news-aid-slug`,
                          path: `/news/cryptos/ethereum`,
                          params: {
                            aid: 'cryptos',
                            slug: 'ethereum',
                          },
                        }"
                      >
                        <img
                          data-not-lazy
                          src="../static/img/bitcoins/ethereum.svg"
                        />
                        {{ $t('ethereum') }}
                      </nuxt-link>
                      <nuxt-link
                        :to="{
                          name: `news-aid-slug`,
                          path: `/news/cryptos/cardano`,
                          params: {
                            aid: 'cryptos',
                            slug: 'cardano',
                          },
                        }"
                      >
                        <img
                          data-not-lazy
                          src="../static/img/bitcoins/cardano.svg"
                        />
                        {{ $t('cardano') }}
                      </nuxt-link>
                      <nuxt-link
                        :to="{
                          name: `news-aid-slug`,
                          path: `/news/cryptos/polkadot`,
                          params: {
                            aid: 'cryptos',
                            slug: 'polkadot',
                          },
                        }"
                      >
                        <img
                          data-not-lazy
                          src="../static/img/bitcoins/polkadot.svg"
                        />
                        {{ $t('polkadot') }}
                      </nuxt-link>
                    </div>
                    <div class="col-6">
                      <nuxt-link
                        :to="{
                          name: `news-aid-slug`,
                          path: `/news/cryptos/solana`,
                          params: {
                            aid: 'cryptos',
                            slug: 'solana',
                          },
                        }"
                      >
                        <img
                          data-not-lazy
                          src="../static/img/bitcoins/solana.svg"
                        />
                        {{ $t('solana') }}
                      </nuxt-link>
                      <nuxt-link
                        :to="{
                          name: `news-aid-slug`,
                          path: `/news/cryptos/more-altcoins`,
                          params: {
                            aid: 'cryptos',
                            slug: 'more-altcoins',
                          },
                        }"
                      >
                        {{ $t('altCoins') }}
                      </nuxt-link>
                      <nuxt-link
                        :to="{
                          name: `news-aid-slug`,
                          path: `/news/cryptos/more-tokens`,
                          params: {
                            aid: 'cryptos',
                            slug: 'more-tokens',
                          },
                        }"
                      >
                        {{ $t('moreTokens') }}
                      </nuxt-link>
                    </div>
                  </div>
                </div> -->
                <div class="col-4">
                  <nuxt-link
                    :to="{
                      path: `/news/cryptos/bitcoin`,
                      params: { aid: 'bitcoin' },
                    }"
                    class="dropdown-nb-content__title"
                  >
                    {{ $t('bitcoin') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/cryptos/ethereum`,
                      params: { aid: 'ethereum' },
                    }"
                    class="dropdown-nb-content__title"
                  >
                    {{ $t('ethereum') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/nfts-metaverso`,
                      params: { aid: 'nfts-metaverso' },
                    }"
                    class="dropdown-nb-content__title"
                  >
                    NFT
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/cryptos`,
                      params: { aid: 'cryptos' },
                    }"
                    class="dropdown-nb-content__title"
                  >
                    {{ $t('cryptos') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/nfts-metaverso`,
                      params: { aid: 'nfts-metaverso' },
                    }"
                    class="dropdown-nb-content__title"
                  >
                    {{ $t('metaverse') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/tecnologia`,
                      params: { aid: 'tecnologia' },
                    }"
                    class="dropdown-nb-content__title"
                  >
                    Blockchain
                  </nuxt-link>
                </div>
                <div class="col-4">
                  <nuxt-link
                    :to="{
                      path: `/news/exchanges-wallets`,
                      params: { aid: 'exchanges-wallets' },
                    }"
                    class="dropdown-nb-content__title"
                  >
                    {{ $t('exchangesWallets') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/juegosnft`,
                      params: { aid: 'juegosnft' },
                    }"
                    class="dropdown-nb-content__title"
                  >
                    {{ $t('nftgames') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/defi`,
                      params: { aid: 'defi' },
                    }"
                    class="dropdown-nb-content__title"
                  >
                    {{ $t('defi') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/adopcion`,
                      params: { aid: 'adopcion' },
                    }"
                    class="dropdown-nb-content__title"
                  >
                    {{ $t('adoption') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/regulaciones`,
                      params: { aid: 'regulaciones' },
                    }"
                    class="dropdown-nb-content__title"
                  >
                    {{ $t('regulations') }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nuxt-link
        :to="{
            name: `top-100`,
          }" class="nav-link"
        >
          TOP 100
        </nuxt-link>
        <!-- <nuxt-link
          :to="{
            path: `/news/pumppump`,
            params: { aid: 'pumppump' },
          }" class="nav-link"
        >
          {{ $t('pumpPump') }}
        </nuxt-link>
        <div class="dropdown-nb">
          <span class="nav-link nav_dropdown">TOP 100</span>
          <div class="dropdown-nb-content">
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <nuxt-link
                    v-if="false"
                    :to="{
                      name: `news-aid-slug`,
                      path: `/news/investigacion/analisis`,
                      params: {
                        aid: 'investigacion',
                        slug: 'analisis',
                      },
                    }"
                  >
                    {{ $t('analysis') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      name: `top-100`,
                    }"
                    class="dropdown-nb-content__title"
                  >
                    {{ $t('topOneHundredCryptos') }}
                  </nuxt-link>
                   TODO:
                  <nuxt-link
                    :to="{
                      name: `top-40`,
                    }"
                    class="dropdown-nb-content__title"
                  >
                    {{ $t('topFortyCryptos') }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nuxt-link
          :to="{
            path: `/news/pumppump`,
            params: { aid: 'pumppump' },
          }" class="nav-link"
        >
          {{ $t('pumpPump') }}
        </nuxt-link> -->
      </nav>
    </div>

    <div class="d-flex align-items-center">
      <div
        style="display: flex; position: relative; align-items: center; margin-right: 20px;"
      >
        <nav class="main--header__nav main--header__snav d-none d-lg-flex">
          <!-- <a href="https://mundocrypto.com" class="nav-link">{{
            $t('metaverse')
          }}</a> -->
          <a href="https://mundocrypto.com" class="nav-link">
            Academy
          </a>
          <!-- <a href="#" class="nav-link in-active">TV</a> -->
        </nav>
      </div>

      <LocaleSwitcherComponent />

      <div v-if="false" class="position-relative ms-auto">
        <LocaleSwitcherComponent />
        <!-- TODO:
          v-if="showLangMessage"
        -->
        <div v-if="false" class="lang-message p-4 pe-2 ps-2">
          <h2 class="lang-message-title">
            {{ $t('nav.popup_otro_categoryioma') }}
          </h2>
          <p class="lang-message-p">
            {{ $t('nav.quieres_otro_categoryioma') }}
          </p>
          <a class="btn btn-secondary btn-sm ps-4 pe-4 me-2" href="#">
            <!-- TODO:
            @click.prevent="langPopUp(false)"
            -->
            No
          </a>
          <a class="btn btn-secondary btn-sm ps-4 pe-4" href="#">
            <!-- TODO:
            @click.prevent="langPopUp(true)"
            -->
            Si
          </a>
          <a class="close" href="#">
            <!-- TODO:
            @click.prevent="langPopUp(false)"
            -->
          </a>
        </div>
      </div>

      <!-- boton de wallet -->
      <!-- <div class="walletButton" :class="(shortWallet) ? 'active' : 'inactive'">
        <div class="walletSButton d-flex justity-content-center align-items-center" style="" v-on:click="walletConnect">
          <img style="width: 60%" src="~/static/img/wallet.svg" alt="" class="">
        </div>
        <span class="" >{{shortWallet}}</span>
      </div> -->

      <div
        class="d-flex justify-content-between align-items-center"
        v-if="$auth.$state.loggedIn"
      >
        <SessionButtonComponent />
      </div>

      <!-- <div
        v-else
        class="d-lg-flex align-content-center desktop"
        style="min-width: 290px"
      >
        <div
          class="d-flex justity-content-center align-items-center"
          style="
            height: 30px;
            width: 30px;
            justify-content: center;
            border-radius: 50%;
            background: #45b2cb;
            display: none !important;
          "
        >
          <svg
            width="17"
            height="15"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1135 6.40431V5.74774C16.1135 4.54711 15.2896 3.53786 14.1783 3.24867L14.1763 2.16612C14.1763 1.10964 13.3166 0.249878 12.2596 0.249878H12.1583L3.18817 3.03256C2.98387 3.04437 2.79004 3.0916 2.60802 3.16267H2.58462C1.15964 3.16267 0 4.32231 0 5.74774V12.1651C0 13.5903 1.15942 14.7501 2.58462 14.7501H13.5289C14.9539 14.7501 16.1135 13.5905 16.1135 12.1651V11.3116C16.6311 11.1113 17 10.6095 17 10.0218V7.69362C16.9998 7.10633 16.6311 6.6046 16.1135 6.40431ZM15.663 10.0216C15.663 10.0479 15.6423 10.0686 15.616 10.0686H11.9976C11.9713 10.0686 11.9508 10.0479 11.9508 10.0216V7.69362C11.9508 7.66799 11.9718 7.64705 11.9976 7.64705H15.616C15.6419 7.64705 15.663 7.66799 15.663 7.69362V10.0216ZM12.3423 1.59265C12.6232 1.63275 12.8396 1.87471 12.8396 2.16723L12.8413 3.1629H7.28065L12.3423 1.59265ZM13.5289 13.4132H2.58484C1.89575 13.4132 1.33698 12.8542 1.33698 12.1648V5.74774C1.33698 5.0582 1.89575 4.49943 2.58484 4.49943H13.5289C14.2182 4.49943 14.7767 5.0582 14.7767 5.74774V6.31029H11.9976C11.2348 6.31029 10.6141 6.93077 10.6141 7.69362V10.0216C10.6141 10.7846 11.2348 11.4053 11.9976 11.4053H14.7767V12.1651C14.7767 12.8542 14.2182 13.4132 13.5289 13.4132Z"
              fill="white"
            />
          </svg>
        </div>
        <nuxt-link
          :to="{ name: `auth-login` }"
          class="main--header__access access d-md-block"
        >
          {{ $t('logIn') }}
        </nuxt-link>

        <nuxt-link
          :to="{ name: `auth-register` }"
          class="main--header__access create d-md-block"
        >
          {{ $t('createAccount') }}
        </nuxt-link>
      </div> -->
    </div>
    <v-btn
      icon
      class="main--header__menu menu--toggle ms-4 d-lg-none"
      @click.stop="rightDrawer = !rightDrawer"
    >
      <img data-not-lazy src="~/static/img/menu.svg" />
    </v-btn>

    <v-navigation-drawer
      v-model="rightDrawer"
      width="100%"
      top
      fixed
      style="top: 114px"
    >
      <div class="menu--mobile">
        <div class="menu--mobile-header">
          <div class="mobile--user">
            <!-- <div v-if="!$auth.$state.loggedIn">
              <nuxt-link
                :to="{ name: `auth-login` }"
                class="user-option d-md-block"
              >
                {{ $t('logIn') }}
              </nuxt-link>
              o
              <nuxt-link
                :to="{ name: `auth-register` }"
                class="user-option d-md-block"
              >
                {{ $t('createAccount') }}
              </nuxt-link>
            </div>
            <div v-else class="user-on">
              <nuxt-link :to="{ name: `auth-profile` }" class="profile"
                ><img src="~/static/img/btn-user.svg" alt="" />
                <div>{{ $auth.$state.user.name }}</div>
              </nuxt-link>
            </div> -->
          </div>
          <div
            class="menu--mobile__close menu--toggle"
            @click.stop="rightDrawer = false"
          >
            <img data-not-lazy src="~/static/img/close.svg" />
          </div>
        </div>
        <div class="space-1"></div>

        <div class="menu--mobile__nav">
          <span
            class="menu--mobile__nav__link level-2-link"
            @click.stop="firstDrawer = !firstDrawer"
          >
            Cryptonews
          </span>
          <v-navigation-drawer
            v-model="firstDrawer"
            :right="right"
            fixed
            :wcategoryth="'100%'"
          >
            <div class="menu--mobile__nav">
              <div class="row mb-2">
                <div class="col">
                  <span
                    class="menu--mobile__close menu--toggle"
                    @click.stop="firstDrawer = false"
                  >
                    <img data-not-lazy src="~/static/img/close.svg" />
                  </span>
                  <div class="space-1"></div>
                  <!-- <h2>
                    <nuxt-link
                      :to="{
                        path: `/news/cryptos`,
                        params: { aid: 'cryptos' },
                      }"
                    >
                      {{ $t('cryptos') }}
                    </nuxt-link>
                  </h2> -->
                  <nuxt-link
                    :to="{
                      path: `/news/cryptos/bitcoin`,
                      params: { aid: 'bitcoin' },
                    }"
                    class="menu--mobile__nav__link menu--toggle"
                  >
                    {{ $t('bitcoin') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/cryptos/ethereum`,
                      params: { aid: 'ethereum' },
                    }"
                    class="menu--mobile__nav__link menu--toggle"
                  >
                    {{ $t('ethereum') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/nfts-metaverso`,
                      params: { aid: 'nfts-metaverso' },
                    }"
                    class="menu--mobile__nav__link menu--toggle"
                  >
                    NFT
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/cryptos`,
                      params: { aid: 'cryptos' },
                    }"
                    class="menu--mobile__nav__link menu--toggle"
                  >
                    {{ $t('cryptos') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/nfts-metaverso`,
                      params: { aid: 'nfts-metaverso' },
                    }"
                    class="menu--mobile__nav__link menu--toggle"
                  >
                    {{ $t('metaverse') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/tecnologia`,
                      params: { aid: 'tecnologia' },
                    }"
                    class="menu--mobile__nav__link menu--toggle"
                  >
                    Blockchain
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/exchanges-wallets`,
                      params: { aid: 'exchanges-wallets' },
                    }"
                    class="menu--mobile__nav__link menu--toggle"
                  >
                    {{ $t('exchangesWallets') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/juegosnft`,
                      params: { aid: 'juegosnft' },
                    }"
                    class="menu--mobile__nav__link menu--toggle"
                  >
                    {{ $t('nftgames') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/defi`,
                      params: { aid: 'defi' },
                    }"
                    class="menu--mobile__nav__link menu--toggle"
                  >
                    {{ $t('defi') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/adopcion`,
                      params: { aid: 'adopcion' },
                    }"
                    class="menu--mobile__nav__link menu--toggle"
                  >
                    {{ $t('adoption') }}
                  </nuxt-link>
                  <nuxt-link
                    :to="{
                      path: `/news/regulaciones`,
                      params: { aid: 'regulaciones' },
                    }"
                    class="menu--mobile__nav__link menu--toggle"
                  >
                    {{ $t('regulations') }}
                  </nuxt-link>
                </div>
                <!-- <div class="col-6">
                  <div class="space-1"></div>
                   TODO:
                  <router-link
                  :to="{ name: 'subcategoria', params: {categoria: 'cryptos',subcategoria: 'more-altcoins'}}"
                  class="menu--toggle tag-link">
                  + Altcoins
                  </router-link>
                  <nuxt-link
                    class="menu--mobile__nav__link menu--toggle"
                    :to="{
                      path: `/news/negocios`,
                      params: { aid: 'negocios' },
                    }"
                  >
                    {{ $t('business') }}
                  </nuxt-link>
                  <nuxt-link
                    class="menu--mobile__nav__link menu--toggle"
                    :to="{
                      path: `/news/defi`,
                      params: { aid: 'defi' },
                    }"
                  >
                    {{ $t('defi') }}
                  </nuxt-link>
                  <nuxt-link
                    class="menu--mobile__nav__link menu--toggle"
                    :to="{
                      path: `/news/segurcategoryad`,
                      params: { aid: 'segurcategoryad' },
                    }"
                  >
                    {{ $t('security') }}
                  </nuxt-link>
                  <nuxt-link
                    class="menu--mobile__nav__link menu--toggle"
                    :to="{
                      path: `/news/regulaciones`,
                      params: { aid: 'regulaciones' },
                    }"
                  >
                    {{ $t('regulations') }}
                  </nuxt-link>
                  <nuxt-link
                    class="menu--mobile__nav__link menu--toggle"
                    :to="{
                      path: `/news/exchanges-wallets`,
                      params: { aid: 'exchanges-wallets' },
                    }"
                  >
                    {{ $t('exchangesWallets') }}
                  </nuxt-link>
                </div> -->
              </div>
            </div>
          </v-navigation-drawer>
          <!-- <nuxt-link
            class="menu--mobile__nav__link menu-toggle"
            :to="{
              name: `library`,
              // path: `/news/academy`,
              // params: { aid: 'academy' }
            }"
          >
            Cryptonews
          </nuxt-link> -->
          <!-- <span
            class="menu--mobile__nav__link level-2-link"
            @click.stop="secondDrawer = !secondDrawer"
          >
            {{ $t('market') }}
          </span>
          <v-navigation-drawer
            v-model="secondDrawer"
            :right="right"
            fixed
            :wcategoryth="'100%'"
          >
            <div class="menu--mobile__nav">
              <div class="row mb-2">
                <div class="col-12">
                  <span
                    class="menu--mobile__close menu--toggle"
                    @click.stop="secondDrawer = false"
                  >
                    <img data-not-lazy src="~/static/img/close.svg" />
                  </span>
                  <nuxt-link
                    v-if="false"
                    class="menu--mobile__nav__link menu--toggle"
                    :to="{
                      name: `aid-slug`,
                      path: `/news/investigacion/analisis`,
                      params: {
                        aid: 'investigacion',
                        slug: 'analisis',
                      },
                    }"
                  >
                    <img
                      data-not-lazy
                      src="../static/img/bitcoins/ethereum.svg"
                    />
                    {{ $t('analysis') }}
                  </nuxt-link>
                  <nuxt-link
                    class="menu--mobile__nav__link menu--toggle"
                    :to="{ name: `top-100` }"
                  >
                    {{ $t('topOneHundredCryptos') }}
                  </nuxt-link>
                </div>
              </div>
            </div>
          </v-navigation-drawer> -->
          <!-- TODO: 2-->
          <!-- <nuxt-link
            class="menu--mobile__nav__link menu-toggle"
            :to="{
              path: `/news/pumppump`,
              params: { aid: 'pumppump' },
            }"
          >
            {{ $t('pumpPump') }}
          </nuxt-link> -->
          <div class="others-links">
            <!-- <a href="#">Metaverse</a>
            <a href="#">Academy</a>
            <a href="#">TV</a> -->
            <a href="#" class="others-links language"
              ><img src="../static/img/world.svg" alt="" class="" />{{
                locale.code
              }}</a
            >
          </div>
        </div>
      </div>
    </v-navigation-drawer>
  </header>
</template>
<script>
import Web3 from 'web3'
import Web3Modal from 'web3modal'
// import supportedChains from "../utils/chains.js";
import WalletConnect from '@walletconnect/web3-provider'
import { WalletService } from '~/services/wallet.service'
import { SessionService } from '~/services/session.service'

const data = {
  address: '',
  web3: null,
  provider: null,
  connected: false,
  chainId: 1,
  networkId: 1,
  assets: [],
  showModal: false,
  pendingRequest: false,
  result: null,
}

export default {
  name: 'NewsHeaderComponent',
  data() {
    return {
      interval: null,
      mcCurrentSection: 'News',
      mcSections: [
        {
          name: 'Metaverse',
          url: '#',
        },
        {
          name: 'TV',
          url: '#',
        },
        {
          name: 'Academy',
          url: '#',
        },
      ],
      time: null,
      showLangMessage: false,
      userModel: null,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      locale: null,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      firstDrawer: false,
      secondDrawer: false,
      title: 'Vuetify.js',
      wallet: {
        walletAddress: '',
      },
      userWallet: false,
      hash: '',
    }
  },
  computed: {
    currentLocale() {
      return this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0]
    },

    shortWallet() {
      let wallet = this.userWallet
      if (!wallet || !this.$auth.$state.loggedIn) {
        return false
      }
      let x = wallet.length
      let subString = `${wallet.substring(0, 4)}...${wallet.substring(
        x - 4,
        x
      )}`
      return subString
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    // prevent memory leak
    // clearInterval(this.interval)
  },
  created() {
    this.handleDiscoverSize()
    this.locale = this.$currentLocale()

    if (!process.server) {
      this.userWallet = localStorage.wallet
    }
  },
  mounted() {
    /**
     * @author Rafael Duarte <elyouus94@gmail.com>
     * @date 16/03/2022
     * @description alert message configuration if the user accesses
     * the English version and speaks Spanish or vice versa that is
     * displayed if the user does not speak the corresponding language
     */
    // let currentLocale = i18n.locale;
    // let webBrowserLocale = navigator.language.split("-")[0];
    // this.showLangMessage = false
    // if (currentLocale !== webBrowserLocale) {
    //   this.showLangMessage = this.$store.state.langMessage
    // }
    /** #@- */
  },
  methods: {
    handleResize() {
      this.handleDiscoverSize()
    },
    handleDiscoverSize() {
      const windowWcategoryth = process.browser ? window.innerWcategoryth : 0
      // const windowHeight = process.browser ? window.innerHeight : 0;
      this.$store.dispatch('device/stateUp', windowWcategoryth)
    },

    saveWalletInStorage(walletAddress) {
      localStorage.wallet = walletAddress
      this.userWallet = walletAddress
      return true
    },
    getWalletOfStorage() {
      let walletAddress = ''
      if (process.client) {
        walletAddress = localStorage.wallet
      }
      return walletAddress
    },

    async walletConnect() {
      try {
        function initWeb3(provider) {
          const web3 = new Web3(provider)

          web3.eth.extend({
            methods: [
              {
                name: 'chainId',
                call: 'eth_chainId',
                outputFormatter: web3.utils.hexToNumber,
              },
            ],
          })

          return web3
        }
        const getProviderOptions = () => {
          const providerOptions = {
            walletconnect: {
              package: WalletConnect,
            },
          }
          return providerOptions
        }

        const subscribeProvider = async (provider) => {
          if (!provider.on) {
            return
          }
          provider.on('accountsChanged', async (accounts) => {
            data.address = accounts[0]
          })
          provider.on('chainChanged', async (chainId) => {
            const web3 = data.web3
            const networkId = await web3.eth.net.getId()
            data.chainId = chainId
            data.networkId = networkId
          })

          provider.on('networkChanged', async (networkId) => {
            const { web3 } = data
            const chainId = await web3.eth.chainId()
            data.chainId = chainId
            data.networkId = networkId
          })
        }

        const web3Modal = new Web3Modal({
          providerOptions: getProviderOptions(),
        })

        const provider = await web3Modal.connect()

        await subscribeProvider(provider)

        await provider.enable()
        const web3 = initWeb3(provider)
        data.web3 = web3
        data.connected = true

        const accounts = await web3.eth.getAccounts()

        const address = accounts[0]
        data.address = address
        this.wallet.walletAddress = address //ALMACENADO EN VARIABLE GLOBAL

        const networkId = await web3.eth.net.getId()
        data.networkId = networkId

        const chainId = await web3.eth.chainId()
        data.chainId = chainId

        const msgParams = JSON.stringify({
          domain: {
            chainId: data.chainId,
            name: 'Mundo Crypto',
            version: '1',
          },
          message: {
            contents: `Mundo crypto wants to sign in with your account ${data.address} `,
            URI: window.location.origin,
            Version: 1,
            'Chain Id': data.chainId,
            Nonce: 'Test',
          },
          primaryType: 'Login',
          types: {
            EIP712Domain: [
              { name: 'name', type: 'string' },
              { name: 'version', type: 'string' },
              { name: 'chainId', type: 'string' },
            ],
            Login: [
              { name: 'contents', type: 'string' },
              { name: 'URI', type: 'string' },
              { name: 'Version', type: 'string' },
              { name: 'Chain Id', type: 'string' },
              { name: 'Nonce', type: 'string' },
            ],
          },
        })
        const wallet = this.wallet

        const sendWallet = async (wall) => {
          await this.asignWallet(wall)
        }

        const x = await data.web3.currentProvider.sendAsync(
          {
            method: 'eth_signTypedData_v4',
            params: [data.address, msgParams],
            from: data.address,
          },
          async function (err, result) {
            if (err) {
              return
            }
            const signature = result.result.substring(2)
            const r = '0x' + signature.substring(0, 64)
            const s = '0x' + signature.substring(64, 128)
            const v = parseInt(signature.substring(128, 130), 16)
            wallet.hash = result.result

            await sendWallet(wallet)
          }
        )

        /*  */

        /* setTimeout(
          () =>{
            console.log(wallet.hash)
          }, 20000
        ); */
        // this.wallet.hash = wallet.hash
        // let x = await this.asignWallet();
      } catch (err) {
        console.log('err', err)
      }
    },
    async asignWallet(wall) {
      if (this.$auth.$state.loggedIn) {
        const walletService = new WalletService(this.$apiNebolus, this.$auth)
        const wallet = await walletService.saveWallet(wall)
        if (!wallet) {
          return false
        }
        const x = this.saveWalletInStorage(wall.walletAddress)
        this.wallet = wall
      } else {
        const service = new SessionService(this.$apiNebolus, this.$auth)
        const user = await service.walletLogin(wall)
        const x = user ? this.saveWalletInStorage(wall.walletAddress) : false
      }
    },
    // toggle() {
    //  this.$emit('toggleMenu')
    // },
    // langPopUp(cambiar) {
    //  if (cambiar) {
    //    let newLocale
    //    if (i18n.locale === 'en') {
    //      newLocale = 'es'
    //    } else {
    //      newLocale = 'en'
    //    }
    //    i18n.locale = newLocale
    //    this.$store.dispatch('setAppLanguage', newLocale)
    //  }
    //  this.showLangMessage = false
    //  this.$store.dispatch('markLangMessageShowed')
    // },
  },
}
</script>
