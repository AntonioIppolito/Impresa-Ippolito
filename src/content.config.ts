import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Lavori eseguiti: una cartella per lavoro (index.md + foto), modificabile dal pannello /admin.
export const categorie = ['Appartamenti completi', 'Ville e case', 'Cartongesso di design', 'Bagni', 'Cucine', 'Cantiere & processo'] as const;

const lavori = defineCollection({
  loader: glob({
    pattern: '**/index.md',
    base: './src/content/lavori',
    generateId: ({ entry }) => entry.replace(/\/index\.md$/, ''),
  }),
  schema: ({ image }) => {
    // il pannello può salvare i campi lasciati vuoti come '' o null: li trattiamo come assenti
    const vuoto = (v: unknown) => (v === '' || v === null ? undefined : v);
    const fotoFacoltativa = () => z.preprocess(vuoto, image().optional());
    const testo = () => z.preprocess(vuoto, z.string().optional());
    return z.object({
      titolo: z.string(),
      comune: testo(),
      categoria: z.enum(categorie),
      // posizione nell'elenco: più basso = più in alto (i lavori nuovi dal pannello partono da 0, quindi in cima)
      ordine: z.preprocess((v) => vuoto(v) ?? 0, z.number()),
      inEvidenza: z.preprocess((v) => vuoto(v) ?? false, z.boolean()), // lavoro di punta: fornisce la foto della hero
      fotoHero: fotoFacoltativa(),
      descrizione: z.string(),
      lavorazioni: z.preprocess((v) => vuoto(v) ?? [], z.array(z.string())),
      copertina: fotoFacoltativa(), // se manca si usa la prima foto
      seo: z.preprocess(vuoto, z.object({ titolo: testo(), descrizione: testo() }).optional()),
      bozza: z.preprocess((v) => vuoto(v) ?? false, z.boolean()),
      foto: z.preprocess((v) => vuoto(v) ?? [], z.array(z.object({ src: image(), didascalia: testo() }))),
    });
  },
});

export const collections = { lavori };
