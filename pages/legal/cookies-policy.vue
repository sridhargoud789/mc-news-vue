<template>
  <div class="main">
    <div class="bg-corporativa">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="space-1"></div>
            <h2 class="h--big c-blue-2 text-64 text-md-100 lh_08">
              {{ $t('cookiesPolicy') }}
            </h2>
            <div class="space-1"></div>
          </div>
        </div>
        <div class="space-1 d-none d-md-block"></div>
        <div class="row justify-content-center">
          <div class="col-lg-10 c-grey-2" id="CookieDeclarationContainer"></div>
        </div>
      </div>
      <div class="space-2"></div>
      <div class="space-2 d-none d-lg-block"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CookiesPolicyPage',
  layout: 'largeWidth',
  mounted() {
    const cookieScript = document.createElement('script')
    cookieScript.setAttribute(
      'src',
      'https://consent.cookiebot.com/65bbfcb0-1bf3-4a71-8ba2-ebc23f02865b/cd.js'
    )
    cookieScript.setAttribute('id', 'CookieDeclaration')
    document
      .getElementById('CookieDeclarationContainer')
      .appendChild(cookieScript)
  },
}
</script>
