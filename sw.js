self.addEventListener('install', (e) => {
  console.log('[Service Worker] Installed');
});

self.addEventListener('fetch', (e) => {
  // Simple pass-through to satisfy PWA install requirements
  e.respondWith(fetch(e.request).catch(() => console.log('Network request failed')));
});