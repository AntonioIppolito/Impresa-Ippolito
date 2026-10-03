// Recensioni reali dei clienti. I dati stanno in recensioni.json, modificabile dal pannello /admin
// (Recensioni): qui si calcolano numero e media Google e la data in italiano.
// Regole: testi riportati senza modifiche; autore come nome + iniziale del cognome (privacy).
// NIENTE schema Review/AggregateRating sul sito: per Google sono "self-serving reviews" (vietate).
// Escluse alla prima raccolta (3/10/2026): recensioni ReteImprese (scritte dalla redazione del portale)
// e il doppione Habitissimo della recensione di Clarissa B. (stesso testo già su Google).
import data from './recensioni.json';

export type Recensione = {
  autore: string;
  ruolo?: string;
  fonte: 'Google' | 'Facebook' | 'Habitissimo' | string;
  voto: number; // su 5 (Facebook "consiglia" = 5)
  anno: string;
  testo?: string; // assente = solo voto
};

const mesi = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
const d = new Date(`${String(data.aggiornate).slice(0, 10)}T12:00:00`);
export const aggiornatoRecensioni = isNaN(+d) ? String(data.aggiornate) : `${d.getDate()} ${mesi[d.getMonth()]} ${d.getFullYear()}`;

export const recensioni: Recensione[] = (data.recensioni as Recensione[]).filter((r) => r.autore && r.voto);

const suGoogle = recensioni.filter((r) => r.fonte === 'Google');
export const google = {
  count: suGoogle.length,
  rating: suGoogle.length ? Math.round((suGoogle.reduce((n, r) => n + r.voto, 0) / suGoogle.length) * 10) / 10 : 0,
  url: data.schedaGoogle, // scheda Google "Impresa edile Ippolito Antonio" (CID)
};
export const ratingLabel = google.rating.toFixed(1).replace('.', ',');
export const tutteCinque = suGoogle.every((r) => r.voto === 5);

export const conTesto = recensioni.filter((r) => r.testo?.trim());
export const soloVoto = recensioni.filter((r) => !r.testo?.trim());
