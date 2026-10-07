// Comuni in cui l'impresa ha lavori pubblicati (ricerca SEO/GEO 2026-09-24: pagine locali SOLO dove
// ci sono lavori veri, non pagine fotocopia per ogni comune come fanno alcuni concorrenti).
// Tutto è calcolato dalla collezione dei lavori: un comune ha la sua pagina /ristrutturazioni/<comune>
// quando i lavori pubblicati lì sono almeno MIN_LAVORI. Se dal pannello arriva un secondo lavoro in un
// comune nuovo, la pagina nasce da sola alla build successiva.
import { site } from './site';
import { projects, type Project } from './projects';

export const MIN_LAVORI = 2;

// "Milano · Lambrate" -> "Milano", "Novate Milanese (MI)" -> "Novate Milanese"
export const cityOf = (loc: string) => loc.replace(/\s*\([A-Z]{2}\)\s*$/, '').split(' · ')[0].trim();
const provOf = (loc: string) => loc.match(/\((MI|MB)\)\s*$/)?.[1] ?? null;
const slugOf = (city: string) =>
  city.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export type Comune = {
  city: string;
  slug: string;
  prov: 'MI' | 'MB';
  provName: string;
  items: Project[];
  photos: number;
  hasPage: boolean;
  href: string | null;
};

const located = projects.filter((p) => p.location && p.location !== 'Provincia di Milano');
// ordine: prima l'elenco fisso di site.cities, poi eventuali comuni nuovi arrivati dal pannello
const names = [...new Set([...site.cities, ...located.map((p) => cityOf(p.location!))])];

export const comuni: Comune[] = names
  .map((city) => {
    const items = located.filter((p) => cityOf(p.location!) === city);
    // Milano non ha la sigla nel campo comune: provincia di Milano
    const prov = (items.map((p) => provOf(p.location!)).find(Boolean) ?? 'MI') as 'MI' | 'MB';
    const slug = slugOf(city);
    const hasPage = items.length >= MIN_LAVORI;
    return {
      city,
      slug,
      prov,
      provName: prov === 'MB' ? 'Monza e Brianza' : 'Milano',
      items,
      photos: items.reduce((n, p) => n + p.images.length, 0),
      hasPage,
      href: hasPage ? `/ristrutturazioni/${slug}` : null,
    };
  })
  .filter((c) => c.items.length > 0);

export const comuniConPagina = comuni.filter((c) => c.hasPage);
export const comuneOf = (loc: string | null) => (loc ? comuni.find((c) => c.city === cityOf(loc)) ?? null : null);

// "2 appartamenti completi e 1 bagno": riepilogo leggibile delle categorie dei lavori
const plurali: Record<string, [string, string]> = {
  'Appartamenti completi': ['appartamento completo', 'appartamenti completi'],
  'Ville e case': ['villa', 'ville e case'],
  Bagni: ['bagno', 'bagni'],
  Cucine: ['cucina', 'cucine'],
  'Cartongesso di design': ['lavoro in cartongesso', 'lavori in cartongesso'],
  'Cantiere & processo': ['raccolta di cantiere', 'raccolte di cantiere'],
};
export const riepilogo = (items: Project[]) => {
  const parts = Object.entries(
    items.reduce<Record<string, number>>((acc, p) => ((acc[p.category] = (acc[p.category] ?? 0) + 1), acc), {})
  )
    .sort((a, b) => b[1] - a[1])
    .map(([cat, n]) => `${n} ${(plurali[cat] ?? [cat.toLowerCase(), cat.toLowerCase()])[n === 1 ? 0 : 1]}`);
  return parts.length > 1 ? `${parts.slice(0, -1).join(', ')} e ${parts.at(-1)}` : parts[0] ?? '';
};
