const { nuxtRoutes } = require('@layer0/nuxt')
const { Router } = require('@layer0/core/router')
const { BUILD_ID } = require('./BUILD_ID')
const IF_PRODUCTION = process.env.NODE_ENV === 'production'
module.exports = new Router()
  .get(
    {
      headers: {
        host: /layer0.link|layer0-perma.link/,
      },
    },
    ({ setResponseHeader }: any) => {
      setResponseHeader('x-robots-tag', 'noindex')
    }
  )
  .match('/service-worker.js', ({ serviceWorker }: any) => {
    serviceWorker('.nuxt/dist/client/service-worker.js')
  })
  .match('/manifest.js', ({ cache, serveStatic }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 24 * 365,
      },
    })
    serveStatic(`dist/_nuxt/static/${BUILD_ID}/manifest.js`)
  })
  .match('/:path*/manifest.js', ({ cache, serveStatic }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 24 * 365,
      },
    })
    serveStatic(`dist/_nuxt/static/${BUILD_ID}/manifest.js`)
  })
  .get('/', ({ cache }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 60 * 60 * 24 * 365,
      },
    })
  })
  .get('/library/index', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/library/index.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })
  .get('/api/library/index.json', ({ renderWithApp }: any) => {
    renderWithApp()
  })
  .get('/top-40/index', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/top-40/index.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })
  .get('/api/top-40/index.json', ({ renderWithApp }: any) => {
    renderWithApp()
  })
  .get('/top-100/index', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/top-100/index.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })
  .get('/api/top-100/index.json', ({ renderWithApp }: any) => {
    renderWithApp()
  })
  .get('/news/:aid', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
         maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
    serveStatic('dist/news/:aid.html', {
      // When the user requests a page that is not already statically rendered, fall back to SSR.
      onNotFound: () => renderWithApp(),
    })
    else renderWithApp()
  })
  .get('/api/news/:aid.json', ({ renderWithApp }: any) => {
    renderWithApp()
  })
  .get('/tag/:tag', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
         maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
    serveStatic('dist/tag/:tag.html', {
      // When the user requests a page that is not already statically rendered, fall back to SSR.
      onNotFound: () => renderWithApp(),
    })
    else renderWithApp()
  })
  .get('/api/tag/:tag.json', ({ renderWithApp }: any) => {
    renderWithApp()
  })
  // :aid/:slug
  .get('/news/:aid/:slug', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60,// serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/news/:aid/:slug.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })
  .get('/api/news/:aid/:slug.json', ({ renderWithApp }: any) => {
    renderWithApp()
  })
  // /news/:aid/:slug/:notice
  .get('/news/:aid/:slug/:notice', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/news/:aid/:slug/:notice.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })
  .get('/api/news/:aid/:slug/:notice.json', ({ renderWithApp }: any) => {
    renderWithApp()
  })
  .get('/api/image/get_image.jpg', ({ renderWithApp }: any) => {
    renderWithApp()
  })
  .get('/contact', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/contact.index.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })
  .get('/api/contact/index.json', ({ renderWithApp }: any) => {
    renderWithApp()
  })
  .get('/auth/logout', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/auth/logout/index.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })
  .get('/api/auth/logout.json', ({ renderWithApp }: any) => {
    renderWithApp()
  })
  .get('/top-100', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/top-100/index.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })
  .get('/api/top-100/index.json', ({ renderWithApp }: any) => {
    renderWithApp()
  })
  .get('/top-40', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/top-40/index.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })
  .get('/api/top-40/index.json', ({ renderWithApp }: any) => {
    renderWithApp()
  })

  .get('/academy', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/academy/index.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })

  .get('/academy/courses', ({ serveStatic, cache, renderWithApp }: any) => {

    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/academy/courses.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })

  
  .get('/academy/:slug', ({ serveStatic, cache, renderWithApp }: any) => {

    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/academy/courses.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })


  .get('/academy/:slug', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/academy/:slug/index.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })
  .get('/academy/:slug/test', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/academy/:slug/test.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })
  .get('/academy/:slug/stats', ({ serveStatic, cache, renderWithApp }: any) => {
    cache({
      edge: {
        maxAgeSeconds: 2,
        staleWhileRevalidateSeconds: 60, // serve stale responses for a minute until new content is fetched, in background a new request is looking for new content
      },
      browser: false,
    })
    if (IF_PRODUCTION)
      serveStatic('dist/academy/:slug/stats.html', {
        // When the user requests a page that is not already statically rendered, fall back to SSR.
        onNotFound: () => renderWithApp(),
      })
    else renderWithApp()
  })
  /* .get('/api/top-100/index.json', ({ renderWithApp }: any) => {
    renderWithApp()
  }) */
  .use(nuxtRoutes)
  .fallback(({ redirect }: any) => {
    // return redirect('/error')
  })
