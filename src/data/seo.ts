// Meta title e description (ricerca SEO/GEO 2026-09-24).
// Regole: servizio + luogo in testa (struttura dei risultati che si posizionano),
// title <= 60 caratteri, description <= 155, nessun duplicato, nessun trattino lungo.
import type { Project } from './projects';

const BRAND = ' | Impresa Ippolito';

// titoli specifici delle schede lavoro (<= 41 caratteri + brand = <= 60)
const projectTitles: Record<string, string> = {
  'ristrutturazione-appartamento-milano-24': 'Appartamento chiavi in mano a Milano',
  'cartongesso-design': 'Cartongesso di design con luci LED',
  'bagno-milano': 'Ristrutturazione bagno a Milano',
  'ristrutturazione-bagno-e-cucina': 'Ristrutturazione bagno e cucina',
  'bagno-brugherio': 'Ristrutturazione bagno a Brugherio',
  'bagno-monza-4': 'Bagno con doppio lavabo a Monza',
  'lavori-bollate': 'Ristrutturazione casa a Bollate',
  'bagno-con-vasca': 'Bagno con vasca freestanding',
  'bagno-cormano': 'Ristrutturazione bagno a Cormano',
  'bagno-monza': 'Ristrutturazione bagno a Monza',
  'bagno-arese': 'Ristrutturazione bagno ad Arese',
  'uncategorised': 'Cantiere di ristrutturazione, le fasi',
  'appartamento-milano-grande': 'Ristrutturazione completa a Milano',
  'appartamento-viale-jenner': 'Appartamento in viale Jenner, Milano',
  'ristrutturazione-bresso': 'Ristrutturazione appartamento a Bresso',
  'appartamento-lambrate': 'Ristrutturazione appartamento Lambrate',
  'appartamento-senago': 'Ristrutturazione appartamento a Senago',
  'appartamento-milano-bocconi': 'Appartamento in zona Bocconi, Milano',
  'appartamento-novate': 'Appartamento a Novate Milanese',
  'mansarda-paderno': 'Mansarda a Paderno Dugnano',
  'ristrutturazione-taverna': 'Taverna con riscaldamento a pavimento',
  'ristrutturazione-villa': 'Ristrutturazione di una villa',
  'villa-bollate': 'Ristrutturazione villa a Bollate',
  'ampliamento-villa-novate': 'Ampliamento villa a Novate Milanese',
  'ristrutturazione-bagno': 'Rifacimento bagno con doccia',
  'bagno-bollate': 'Ristrutturazione bagno a Bollate',
  'bagno-bollate-2': 'Bagno a Bollate con doccia a filo',
  'bagni-cormano': 'Rifacimento di due bagni a Cormano',
  'bagno-settimo-milanese': 'Ristrutturazione bagno a Settimo Milanese',
  'bagno-taverna': 'Bagno in taverna effetto pietra',
  'bagno-in-marmo': 'Bagno rivestito in marmo',
  'bagno-moderno': 'Bagno moderno con sanitari sospesi',
  'bagno-e-lavanderia': 'Bagno con zona lavanderia',
  'bagno-in-muratura': 'Bagno con piano lavabo in muratura',
  'bagno-triangolare': 'Bagno con rivestimento geometrico',
};

const cut = (s: string, max = 155) => {
  if (s.length <= max) return s;
  const t = s.slice(0, max - 1);
  return t.slice(0, t.lastIndexOf(' ')).replace(/[,:;.\s]+$/, '') + '…';
};
const place = (loc: string | null) => (loc ? loc.replace(/\s*\((MI|MB)\)/, '').replace(' · ', ' ') : '');

export const projectMeta = (p: Project) => {
  const base = projectTitles[p.slug] ?? p.title;
  const where = place(p.location);
  return {
    title: base + BRAND,
    description: cut(`${where && where !== 'Provincia di Milano' ? `${where}. ` : ''}${p.blurb} ${p.images.length} foto del lavoro.`),
  };
};
