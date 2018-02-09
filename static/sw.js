importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "sm-design",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/admin/bundle.560482629560e637bc72.js",
    "revision": "d2ff3911b02ea07733e414435152bc74"
  },
  {
    "url": "/_nuxt/app.983edfea1a22bc347820.js",
    "revision": "a5f48d56e438a911c7a052e5e4699923"
  },
  {
    "url": "/_nuxt/common.12e57f184621378fe777248a8cec4915.css",
    "revision": "0df718155764f57d0a289b146e057166"
  },
  {
    "url": "/_nuxt/common.7abe401a8730bac48dc4.js",
    "revision": "9f66be0adca896ccd1f95420c1733dbc"
  },
  {
    "url": "/_nuxt/layouts/default.1cf29042ee95b358b081.js",
    "revision": "123b27d99e36194628372ca786e063a1"
  },
  {
    "url": "/_nuxt/manifest.6a758603986aa9c3a289.js",
    "revision": "e486b385001f7877c8c7fb76d5cae635"
  },
  {
    "url": "/_nuxt/pages/_portfolio.18cad99fd20ca21b8594.js",
    "revision": "7c0bb1e795cf040c09cda3be510ce4de"
  },
  {
    "url": "/_nuxt/pages/_post.ce8fda5fce883d442506.js",
    "revision": "53dcd2dca11793553bedd220624c8e8f"
  },
  {
    "url": "/_nuxt/pages/blog.28bc66cbcbf207029496.js",
    "revision": "9e9ddfbd4118456b25c28ebce66ea22a"
  },
  {
    "url": "/_nuxt/pages/contact.2994c2d4d3b26c57892f.js",
    "revision": "f00b8366d2db0382808c8441850bf591"
  },
  {
    "url": "/_nuxt/pages/how-do-we-work.005897cf283eef4402b8.js",
    "revision": "9525d675fa420b9b6fc625b69b28bf05"
  },
  {
    "url": "/_nuxt/pages/index.375a96e1105981ec6dae.js",
    "revision": "9c42cd6bbe949010c7c59ce33a65855e"
  },
  {
    "url": "/_nuxt/pages/portfolios.8e4f654af9734c610a8c.js",
    "revision": "cf416e353883e5098881fca6bfa13c75"
  },
  {
    "url": "/_nuxt/pages/team.58f214fcff8a61bec0d7.js",
    "revision": "96efab4c11a21606e477009e3bd36fb7"
  },
  {
    "url": "/_nuxt/pages/thank-you.13c9353b3dda4ff8c2f0.js",
    "revision": "6dd15ed4a26ed59c91f848a9af3bba19"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

