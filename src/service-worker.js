/* eslint-disable no-restricted-globals */
/* eslint-env serviceworker */
/* global workbox */

importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js',
);

if (workbox) {
  console.log(`Workbox has been loaded.`);

  workbox.routing.registerRoute(
    ({ request }) => request.headers.get('accept').includes('text/html'),
    new workbox.strategies.NetworkFirst({
      cacheName: 'html-cache',
    }),
  );

  workbox.routing.registerRoute(
    /\.(?:js)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'js-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    }),
  );

  workbox.routing.registerRoute(
    /\.(?:css)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'css-cache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 30 * 24 * 60 * 60,
        }),
      ],
    }),
  );


  workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|svg|gif)$/,
    new workbox.strategies.CacheFirst({
      cacheName: 'images-cache',
    }),
  );

  workbox.core.clientsClaim();
  workbox.core.skipWaiting();
} else {
  console.warn('Workbox did not load successfully.');
}

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) =>
        Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName))),
      ),
  );
});
