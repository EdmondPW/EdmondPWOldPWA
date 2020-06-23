var CACHE_STATIC_NAME = 'static-v3';
var CACHE_DYNAMIC_NAME = 'dynamic-v3';

self.addEventListener('install', function(event) {
  self.skipWaiting();
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function(cache) {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll([
          '/',
          './index.html',
          './favicon.ico',
          './src/js/bootstrap/bootstrap.min.js',
          './src/js/bootstrap/bootstrap.min.js.map',
          './src/js/jquery/jquery-3.5.1.min.js',
          './src/css/bootstrap/bootstrap.min.css',
          './src/css/bootstrap/bootstrap.min.css.map',
          './manifest.json',
          './src/js/promise.js',
          './src/js/app.js',
          './src/js/recepieSearch.js',
          './src/js/fetch.js',
          './src/images/icons/icon-72x72.png',
          './src/images/icons/icon-96x96.png',
          './src/images/icons/icon-128x128.png',
          './src/images/icons/icon-144x144.png',
          './src/images/icons/icon-152x152.png',
          './src/images/icons/icon-192x192.png',
          './src/images/icons/icon-384x384.png',
          './src/images/icons/icon-512x512.png',
          "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        ]);
      })
  )
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
    caches.keys()
      .then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log('[Service Worker] Removing old cache.', key);
            return caches.delete(key);
          }
        }));
      })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            })
            .catch(function(err) {

            });
        }
      })
  );
});
