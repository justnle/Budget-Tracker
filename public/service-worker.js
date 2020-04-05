'use strict';

const FILES_TO_CACHE = [
  `/`,
  `/index.html`,
  `/favicon.ico`,
  `/icon.png`,
  `/manifest.webmanifest`,
  `/style.css`,
  `/index.js`,
  `/db.js`
];

const CACHE_NAME = `static-cache-v1`;
const DATA_CACHE_NAME = `data-cache-v1`;

// install
self.addEventListener(`install`, event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log(`Your files were pre-cached successfully!`);
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

// activate
self.addEventListener(`activate`, evt => {
  evt.waitUntil(
    caches.keys().then(keyList => Promise.all(
      keyList.map(key => {
        if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
          console.log(`Removing old cache data`, key);
          return caches.delete(key);
        }
        return undefined;
      })
    ))
  );

  self.clients.claim();
});

// fetch
self.addEventListener(`fetch`, evt => {
  if (evt.request.url.includes(`/api/`)) {
    evt.respondWith(
      caches.open(DATA_CACHE_NAME).then(cache => fetch(evt.request)
        .then(response => {
          // If the response was good, clone it and store it in the cache.
          if (response.status === 200) {
            cache.put(evt.request.url, response.clone());
          }

          return response;
        })
      // Network request failed, try to get it from the cache.
        .catch(() => cache.match(evt.request)))
        .catch(err => console.log(err))
    );

    return;
  }

  evt.respondWith(
    caches.open(CACHE_NAME).then(cache => cache.match(evt.request).then(response => response || fetch(evt.request)))
  );
});
