/* ONZE — service worker. Généré par build.py, ne pas éditer. */
const CACHE = "onze-6228c4f69db6";
const SHELL = ["./", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(noms => Promise.all(noms.filter(n => n !== CACHE).map(n => caches.delete(n))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;

  if (req.mode === "navigate"){
    // réseau d'abord : une version plus récente doit toujours gagner
    e.respondWith(fetch(req)
      .then(rep => { const copie = rep.clone(); caches.open(CACHE).then(c => c.put("./", copie)); return rep; })
      .catch(() => caches.match("./").then(rep => rep || Response.error())));
    return;
  }
  // le reste (icônes, manifeste) ne change qu'avec le build : cache d'abord
  e.respondWith(caches.match(req).then(rep => rep || fetch(req)));
});
