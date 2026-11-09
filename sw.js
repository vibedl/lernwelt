// Offline-Betrieb: erst Cache, im Hintergrund erneuern (neue Version beim nächsten Öffnen).
const CACHE = "lernwelt-20261109140320";
const DATEIEN = ["./", "index.html", "style.css", "icon.svg", "manifest.webmanifest",
  "js/kern.js", "js/spiel.js", "js/laeufer.js", "js/werkzeuge.js", "js/app.js",
  "faecher/mathe.js", "faecher/englisch_australien_daten.js", "faecher/englisch_allgemein.js", "faecher/englisch.js", "faecher/deutsch.js",
  "faecher/physik.js", "faecher/chemie.js", "faecher/biologie.js", "faecher/geschichte.js", "faecher/erdkunde.js", "faecher/politik.js", "faecher/informatik.js", "faecher/religion.js", "faecher/kunst_musik.js", "faecher/lernen.js", "faecher/mathe_lehrplan.js", "faecher/physik_lehrplan.js", "faecher/chemie_lehrplan.js", "faecher/biologie_lehrplan.js", "faecher/erdkunde_lehrplan.js", "faecher/geschichte_lehrplan.js", "faecher/politik_lehrplan.js", "faecher/englisch_lehrplan.js", "faecher/deutsch_lehrplan.js", "faecher/englisch_buch.js", "faecher/deutsch_buch.js", "faecher/mathe_buch.js", "faecher/physik_buch.js", "faecher/chemie_buch.js", "faecher/gl_buch.js", "faecher/biologie_buch.js", "faecher/religion_buch.js"];
self.addEventListener("install", (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(DATEIEN)).then(() => self.skipWaiting())));
self.addEventListener("activate", (e) => e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const treffer = await c.match(e.request, { ignoreSearch: true });
    const netz = fetch(e.request).then((r) => { if (r.ok) c.put(e.request, r.clone()); return r; }).catch(() => treffer);
    return treffer || netz;
  }));
});
