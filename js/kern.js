// Lernwelt – Grundfunktionen (Zufall, Textvergleich, Vorlesen)
"use strict";
window.FAECHER = [];
const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function mischen(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// Zufallsgenerator mit Komfortfunktionen (für Aufgaben-Generatoren)
function macheRng(seed) {
  let s = (seed ?? Math.floor(Math.random() * 2 ** 31)) >>> 0 || 1;
  const rng = () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
  rng.int = (a, b) => a + Math.floor(rng() * (b - a + 1));
  rng.pick = (arr) => arr[Math.floor(rng() * arr.length)];
  rng.shuffle = (arr) => { arr = arr.slice(); for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; };
  return rng;
}
const RNG = macheRng();

// Tag als Text (lokale Zeit), für Streak und Tagesquests
const heuteKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
function tageDiff(a, b) { // a, b = "YYYY-MM-DD"
  const [y1, m1, d1] = a.split("-").map(Number), [y2, m2, d2] = b.split("-").map(Number);
  return Math.round((Date.UTC(y2, m2 - 1, d2) - Date.UTC(y1, m1 - 1, d1)) / 86400000);
}

// ---- Antworten vergleichen ----
function norm(t) {
  return String(t).toLowerCase().replace(/[’`´]/g, "'").replace(/\(.*?\)/g, " ").replace(/\bsth\.?|\bsb\.?|\bjdn\.?|\bjdm\.?|\betw\.?/g, " ")
    .replace(/[.,!?;:…"„“‚‘]/g, " ").replace(/\s+/g, " ").trim();
}
function varianten(l) {
  const v = new Set();
  for (const roh of [l, ...String(l).split("/")]) for (const t of [norm(roh), norm(String(roh).replace(/[()]/g, ""))]) {
    if (!t) continue; v.add(t);
    if (t.startsWith("to ")) v.add(t.slice(3)); if (t.startsWith("the ")) v.add(t.slice(4));
    const oa = t.replace(/^(der|die|das|ein|eine) /, ""); if (oa !== t) v.add(oa);
  }
  return v;
}
function abstand(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
// liefert "richtig" | "fast" | "falsch"
function pruefeText(eingabe, loesungen, tippfehlerOk = true) {
  const e = norm(eingabe), e2 = e.replace(/^(to|the|der|die|das) /, "");
  const alle = new Set(); for (const l of [].concat(loesungen)) for (const x of varianten(l)) alle.add(x);
  if (alle.has(e) || alle.has(e2)) return "richtig";
  if (tippfehlerOk) for (const x of alle) if (x.length > 4 && (abstand(e, x) <= 1 || abstand(e2, x) <= 1)) return "fast";
  return "falsch";
}
function parseZahl(t) {
  t = String(t).trim().replace(/\s/g, "").replace(/[a-zA-Z°%€²³]+$/, "");
  if (/^-?\d{1,3}(\.\d{3})+,\d+$/.test(t)) t = t.replace(/\./g, "").replace(",", ".");
  else if (/^-?\d{1,3}(\.\d{3})+$/.test(t)) t = t.replace(/\./g, "");
  else t = t.replace(",", ".");
  if (/^-?\d+\/\d+$/.test(t)) { const [z, n] = t.split("/").map(Number); return n ? z / n : NaN; }
  const z = Number(t); return Number.isFinite(z) ? z : NaN;
}
function pruefeZahl(eingabe, loesung, tol = 0.01) {
  const z = parseZahl(eingabe); if (!Number.isFinite(z)) return "falsch";
  return Math.abs(z - loesung) <= tol + 1e-9 ? "richtig" : "falsch";
}
// Zahl hübsch ausgeben (deutsch, max. 2 Nachkommastellen)
function fz(x, stellen = 2) {
  const r = Math.round(x * 10 ** stellen) / 10 ** stellen;
  return String(r).replace(".", ",");
}

// ---- Vorlesen ----
function sprich(text, lang = "en-GB") {
  try { const u = new SpeechSynthesisUtterance(String(text).replace(/\(.*?\)/g, "")); u.lang = lang; u.rate = 0.9; speechSynthesis.cancel(); speechSynthesis.speak(u); } catch { /* kein Ton */ }
}
const lautBtn = (t, lang = "en-GB") => `<button class="laut" data-laut="${esc(t)}" data-lang="${lang}" aria-label="Vorlesen">🔊</button>`;
document.addEventListener("click", (ev) => { const b = ev.target.closest("[data-laut]"); if (b) sprich(b.dataset.laut, b.dataset.lang); });

// ---- Töne (kleine Spielgeräusche, ohne Dateien) ----
let audioCtx = null;
function ton(art) {
  if (SPIEL && SPIEL.stand && SPIEL.stand.einstellungen && SPIEL.stand.einstellungen.ton === false) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const t0 = audioCtx.currentTime;
    const noten = { ok: [[660, 0, .08], [880, .08, .12]], fehler: [[220, 0, .18]], level: [[523, 0, .1], [659, .1, .1], [784, .2, .1], [1047, .3, .25]], muenze: [[1200, 0, .05], [1600, .05, .08]], boss: [[196, 0, .15], [147, .15, .3]] }[art] || [];
    for (const [f, dt, d] of noten) {
      const o = audioCtx.createOscillator(), g = audioCtx.createGain();
      o.type = art === "fehler" || art === "boss" ? "sawtooth" : "triangle"; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t0 + dt); g.gain.exponentialRampToValueAtTime(0.18, t0 + dt + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dt + d);
      o.connect(g).connect(audioCtx.destination); o.start(t0 + dt); o.stop(t0 + dt + d + 0.02);
    }
  } catch { /* kein Ton */ }
}
