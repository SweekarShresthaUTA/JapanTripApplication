// This service worker file is used to cache and have PWA offline functionality

// cache name that is used by our browser
const CACHE_NAME = "version-1";

// the cache array that caches the urls specified
// the schedule is the most important aspect of the application
// therefore whenever the user renders the scheudle it should cache all of the important aspects
// additionally the cache also stores other tabs of the application
const urlsToCache = ["index.html", "offline.html", "/Schedule"];

const self = this;

// Install and take in the cache files 
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // logging the point where the cache is opened to notify the developers
      console.log("opened cache");
      // adding all urs to cache
      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests, this fetches the caches to send out data
// if the application is accessed from offline mode to suffice the PWA requirement
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => {
        caches.match("/Schedule");
      });
    })
  );
});

// Activate the service worker
// activate the cache to whitelist the different cache urls and activate them with
// javascript Promise call
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
