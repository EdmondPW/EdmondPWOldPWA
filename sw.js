self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/index.html',
          '/login.html',
          '/signup.html',
          '/src/css/bootstrap.min.css',
          '/manifest.json',
          '/src/images/icons/icon-96x96.png',
          '/src/images/icons/icon-152x152.png',
          '/src/images/icons/icon-192x192.png',
          '/src/images/icons/icon-384x384.png',
          '/src/images/icons/icon-512x512.png',
          '/src/js/app.js',
          '/src/js/bootstrap.min.js',
          '/src/js/jquery-3.5.1.min.js'
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
