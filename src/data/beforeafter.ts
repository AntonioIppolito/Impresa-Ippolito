import type { ImageMetadata } from 'astro';

// Coppie prima/dopo REALI dal vecchio sito (sezione "prima e dopo").
// NB: sorgenti a bassa risoluzione (~400px, foto 2017) → mostrate in riquadro contenuto,
// non a tutta pagina. TODO cliente: fornire scatti prima/dopo ad alta risoluzione.
const imgs = import.meta.glob<ImageMetadata>('../assets/beforeafter/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});
const pick = (name: string) => imgs[`../assets/beforeafter/${name}`];

export const beforeAfter = [
  { slug: 'soggiorno', label: 'Soggiorno', before: pick('soggiorno-prima.jpg'), after: pick('soggiorno-dopo.jpg') },
  { slug: 'disimpegno-notte', label: 'Disimpegno zona notte', before: pick('disimpegno-notte-prima.jpg'), after: pick('disimpegno-notte-dopo.jpg') },
  { slug: 'struttura-cartongesso', label: 'Struttura in cartongesso', before: pick('struttura-cartongesso-prima.jpg'), after: pick('struttura-cartongesso-dopo.jpg') },
];
