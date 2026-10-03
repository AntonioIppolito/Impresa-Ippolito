// Meta title e description delle schede lavoro (ricerca SEO/GEO 2026-09-24).
// Regole: servizio + luogo in testa, title <= 60 caratteri, description <= 155, nessun duplicato,
// nessun trattino lungo. Titolo e descrizione si possono scrivere dal pannello (campo "Google" del
// lavoro); se vuoti vengono generati da titolo, comune e descrizione.
import type { Project } from './projects';

const BRAND = ' | Impresa Ippolito';

const cut = (s: string, max = 155) => {
  if (s.length <= max) return s;
  const t = s.slice(0, max - 1);
  return t.slice(0, t.lastIndexOf(' ')).replace(/[,:;.\s]+$/, '') + '…';
};
const place = (loc: string | null) => (loc ? loc.replace(/\s*\((MI|MB)\)/, '').replace(' · ', ' ') : '');

export const projectMeta = (p: Project) => {
  const base = p.seoTitle?.trim() || p.title;
  const title = base.length + BRAND.length <= 60 ? base + BRAND : cut(base, 60);
  const where = place(p.location);
  return {
    title,
    description: cut(p.seoDescription?.trim() || `${where && where !== 'Provincia di Milano' ? `${where}. ` : ''}${p.blurb} ${p.images.length} foto del lavoro.`),
  };
};
