/// <reference lib="webworker" />
var CACHE_NAME = "ari-dashboard-cache-v1";
var urlsToCache = ["/", "/index.html", "/manifest.json", "/logo.png"];
self.addEventListener("install", function (event) {
    var installEvent = event;
    installEvent.waitUntil(caches.open(CACHE_NAME).then(function (cache) { return cache.addAll(urlsToCache); }));
});
self.addEventListener("fetch", function (event) {
    var fetchEvent = event;
    fetchEvent.respondWith(caches.match(fetchEvent.request).then(function (response) {
        return (response ||
            fetch(fetchEvent.request).catch(function () { return new Response("Offline mode"); }));
    }));
});
self.addEventListener("activate", function (event) {
    var activateEvent = event;
    activateEvent.waitUntil(caches
        .keys()
        .then(function (keys) {
        return Promise.all(keys.map(function (key) { return key !== CACHE_NAME && caches.delete(key); }));
    }));
});
