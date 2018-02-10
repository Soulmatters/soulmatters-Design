importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/admin/bundle.560482629560e637bc72.js",
    "revision": "d2ff3911b02ea07733e414435152bc74"
  },
  {
    "url": "/_nuxt/app.dd5684acb4f88cc4ee2e.js",
    "revision": "6cbb2335bb2c3caa377791d968038a7e"
  },
  {
    "url": "/_nuxt/common.7abe401a8730bac48dc4.js",
    "revision": "9f66be0adca896ccd1f95420c1733dbc"
  },
  {
    "url": "/_nuxt/layouts/default.9d7c0aa62c3c148e6828.js",
    "revision": "8579e55dd7a5a8b3550b078f3d54c128"
  },
  {
    "url": "/_nuxt/manifest.74139b5335b75d852df2.js",
    "revision": "4cdf15474658ffca5b9adcfb87a6aab8"
  },
  {
    "url": "/_nuxt/pages/_portfolio.7b8d285f479dbf85362e.js",
    "revision": "008aee5836bf69e505b8e2d0fc8ad15f"
  },
  {
    "url": "/_nuxt/pages/_post.a2059ad71ba8605e88fa.js",
    "revision": "787ae4e08c4e5cab77785584c7585740"
  },
  {
    "url": "/_nuxt/pages/blog.40cfc24358cd4966134c.js",
    "revision": "e125ea16fb5d93a70cceababe9ded992"
  },
  {
    "url": "/_nuxt/pages/contact.ab7d2e6d225177a53d99.js",
    "revision": "ca93d60be6f3791bdab02894435c0515"
  },
  {
    "url": "/_nuxt/pages/how-do-we-work.4f8cc9409ae95740bbdb.js",
    "revision": "c610d0c4a18a8886edb8d27df45bc687"
  },
  {
    "url": "/_nuxt/pages/index.eaea776b14c3ca97ae7d.js",
    "revision": "0cde04209f5e1f304a086dfe758f9af5"
  },
  {
    "url": "/_nuxt/pages/portfolios.c4888aeb8bcb154fea15.js",
    "revision": "2da8385c7e775099bce25abb62ef2d01"
  },
  {
    "url": "/_nuxt/pages/team.0b98f06a63d43c75a132.js",
    "revision": "d60b2e0735623016d70a5a9ae614e03c"
  },
  {
    "url": "/_nuxt/pages/thank-you.26b2521de039c076e8f5.js",
    "revision": "8a5e01df0594f4fc5d4090db48ae321a"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "sm-design_1.0.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
