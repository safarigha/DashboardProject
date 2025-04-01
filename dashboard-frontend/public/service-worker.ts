/// <reference lib="webworker" />

const CACHE_NAME = "ari-dashboard-cache-v1";
const urlsToCache = ["/", "/index.html", "/manifest.json", "/logo.png"];

self.addEventListener("install", (event) => {
  const installEvent = event as ExtendableEvent;
  installEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  const fetchEvent = event as FetchEvent;
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((response) => {
      return (
        response ||
        fetch(fetchEvent.request).catch(() => new Response("Offline mode"))
      );
    })
  );
});

self.addEventListener("activate", (event) => {
  const activateEvent = event as ExtendableEvent;
  activateEvent.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
      )
  );
});
