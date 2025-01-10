const CACHE_NAME = 'workout-app-cache-v1';
const urlsToCache = [
  '/training-for-Altai-LPUMG/',
  '/training-for-Altai-LPUMG/index.html',
  '/training-for-Altai-LPUMG/styles.css',
  '/training-for-Altai-LPUMG/app.js',
  '/training-for-Altai-LPUMG/icon-192x192.png',
  '/training-for-Altai-LPUMG/icon-512x512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
