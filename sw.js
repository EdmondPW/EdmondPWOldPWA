self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/src/css/app.css',
          '/manifest.json',
          '/src/images/icons/icon-96x96.png',
          '/src/images/icons/icon-164x164.png',
          '/src/images/icons/icon-192x192.png',
          '/src/images/icons/icon-512x512.png',
          '/src/js/app.js'
        ])
      })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});
