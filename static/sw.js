importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  'cacheId': 'restaurant-reviews',
  'clientsClaim': true,
  'directoryIndex': '/'
})

workboxSW.precache([
  {
    'url': '/_nuxt/app.931d991efb2bcb3d0b10.js',
    'revision': '74435d583512a3d774404d37af3018ca'
  },
  {
    'url': '/_nuxt/layouts_default.30df24d6a1e99a9d179e.js',
    'revision': '18c2ad8e2fd6dd61a45e5f7df929ecaa'
  },
  {
    'url': '/_nuxt/manifest.ed01601377bd3ba36d2d.js',
    'revision': 'b9ebc747e9f011bf4f1dea1265efa281'
  },
  {
    'url': '/_nuxt/pages_index.54cd7ece4f3896a68dd8.js',
    'revision': '4cef70de21c8f4aa9a6a7905647eaf33'
  },
  {
    'url': '/_nuxt/pages_restaurant__id_index.0aad07c76312d52ecf39.js',
    'revision': '59619ff22048fd146f635d13ac4e77e9'
  },
  {
    'url': '/_nuxt/vendor.1f627736deb77af10bb3.js',
    'revision': 'cf707208e413d200783c700da69d8fd5'
  }
])

workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

