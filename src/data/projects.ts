import type { ImageMetadata } from 'astro';
import generated from './projects.generated.json';
import { extraMeta } from './projects.extra';

type GenFile = { name: string; caption: string; w: number; h: number };
const gen: Record<string, GenFile[]> = generated as any;

export type ProjectImage = { src: ImageMetadata; alt: string; caption: string };
export type Project = {
  slug: string;
  title: string;
  location: string | null;
  category: string; // Bagni | Appartamenti completi | Cucine | Cantiere & processo
  blurb: string;
  scope: string[];
  images: ProjectImage[];
  cover: ImageMetadata;
  featured?: boolean;
  coverName?: string;  // nome file da usare come cover
  coverIndex?: number; // in alternativa: indice 1-based
  heroName?: string;   // nome file per la hero (flagship)
};

// Tutte le foto reali (astro:assets → WebP/AVIF)
const files = import.meta.glob<ImageMetadata>('../assets/projects/*/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
  eager: true,
  import: 'default',
});
const keyFor = (slug: string, name: string) =>
  Object.keys(files).find((p) => p.endsWith(`/projects/${slug}/${name}`));

function imagesFor(slug: string, altBase: string): ProjectImage[] {
  return (gen[slug] || [])
    .map((f, i) => {
      const key = keyFor(slug, f.name);
      if (!key) return null;
      return {
        src: files[key],
        caption: f.caption || '',
        alt: f.caption ? `${altBase}: ${f.caption}` : `${altBase}, foto ${i + 1}`,
      } as ProjectImage;
    })
    .filter((x): x is ProjectImage => !!x);
}

const meta: Omit<Project, 'images' | 'cover'>[] = [
  {
    slug: 'ristrutturazione-appartamento-milano-24',
    title: 'Appartamento completo, Milano',
    location: 'Milano',
    category: 'Appartamenti completi',
    featured: true,
    coverName: '_D5A4790_copiaBASSA.jpg', // cucina
    heroName: '_D5A4824_copiaBASSA.jpg',  // soggiorno
    blurb: 'Ristrutturazione integrale su progetto Layer Studio (arch. Alberto Totaro, Giraldo Carmona Sebastian). Esecuzione Impresa Ippolito: bagni, cucina, impianti, parquet e finiture.',
    scope: ['Demolizioni', 'Impianti elettrici e idraulici', 'Bagni e cucina', 'Parquet', 'Cartongesso', 'Finiture'],
  },
  {
    slug: 'cartongesso-design',
    title: 'Cartongesso di design',
    location: null,
    category: 'Cartongesso di design',
    coverName: 'cartongesso-design-04.jpg',
    blurb: 'Soluzioni illuminotecniche in cartongesso: gole e velette luminose, controsoffitti sagomati e boiserie con inserimento di luci a LED e faretti, per valorizzare i volumi degli ambienti.',
    scope: ['Controsoffitti sagomati', 'Gole e velette luminose', 'Luci a LED e faretti', 'Boiserie', 'Archi e cornici'],
  },
  {
    slug: 'bagno-milano',
    title: 'Bagno, Milano',
    location: 'Milano',
    category: 'Bagni',
    coverName: 'IMG20251106091608.jpg', // la prima foto è lo stato di fatto
    blurb: 'Rifacimento completo del bagno mantenendo la stessa disposizione dei sanitari: nuovi impianti, posa di rivestimenti in gres e finiture su misura.',
    scope: ['Impianti idraulici', 'Rivestimenti gres', 'Sanitari', 'Finiture'],
  },
  {
    slug: 'ristrutturazione-bagno-e-cucina',
    title: 'Bagno e cucina',
    location: null,
    category: 'Cucine',
    blurb: 'Intervento coordinato su bagno e cucina: demolizione, impianti, pavimenti e rivestimenti a regola d’arte.',
    scope: ['Bagno', 'Cucina', 'Impianti', 'Pavimenti e rivestimenti'],
  },
  {
    slug: 'bagno-brugherio',
    title: 'Bagno, Brugherio',
    location: 'Brugherio (MB)',
    category: 'Bagni',
    blurb: 'Rifacimento del bagno con nuovi impianti idraulici, posa di rivestimenti e sanitari.',
    scope: ['Impianti idraulici', 'Rivestimenti', 'Sanitari'],
  },
  {
    slug: 'bagno-monza-4',
    title: 'Bagno, Monza',
    location: 'Monza (MB)',
    category: 'Bagni',
    coverIndex: 4, // scatto finito (doppio lavabo, specchio tondo)
    blurb: 'Nuovo bagno dalla preparazione alla posa: doppio lavabo, rivestimenti in gres effetto onice e finiture.',
    scope: ['Preparazione e posa', 'Impianti', 'Rivestimenti gres'],
  },
  {
    slug: 'lavori-bollate',
    title: 'Ristrutturazione, Bollate',
    location: 'Bollate (MI)',
    category: 'Appartamenti completi',
    blurb: 'Interventi di ristrutturazione su più ambienti: opere murarie, impianti e finiture.',
    scope: ['Opere murarie', 'Impianti', 'Finiture'],
  },
  {
    slug: 'bagno-con-vasca',
    title: 'Bagno con vasca',
    location: null,
    category: 'Bagni',
    blurb: 'Bagno con vasca: rifacimento completo con rivestimenti in gres e finiture curate.',
    scope: ['Vasca', 'Rivestimenti gres', 'Finiture'],
  },
  {
    slug: 'bagno-cormano',
    title: 'Bagno, Cormano',
    location: 'Cormano (MI)',
    category: 'Bagni',
    blurb: 'Rifacimento del bagno con nuovi impianti, rivestimenti e sanitari.',
    scope: ['Impianti', 'Rivestimenti', 'Sanitari'],
  },
  {
    slug: 'bagno-monza',
    title: 'Bagno, Monza',
    location: 'Monza (MB)',
    category: 'Bagni',
    blurb: 'Bagno ristrutturato con posa di rivestimenti e installazione dei sanitari.',
    scope: ['Rivestimenti', 'Sanitari', 'Finiture'],
  },
  {
    slug: 'bagno-arese',
    title: 'Bagno, Arese',
    location: 'Arese (MI)',
    category: 'Bagni',
    blurb: 'Rifacimento del bagno con rivestimenti in gres e finiture su misura.',
    scope: ['Rivestimenti gres', 'Sanitari', 'Finiture'],
  },
  {
    slug: 'uncategorised',
    title: 'Cantiere e processo',
    location: 'Provincia di Milano',
    category: 'Cantiere & processo',
    blurb: 'Le fasi reali di un cantiere: dallo stato di fatto alle demolizioni, controsoffitti, impianto di condizionamento canalizzato e posa del parquet.',
    scope: ['Stato di fatto', 'Demolizioni', 'Controsoffitti', 'Condizionamento canalizzato', 'Posa parquet'],
  },
];

const pickCover = (images: ProjectImage[], m: Omit<Project, 'images' | 'cover'>) => {
  if (m.coverName) {
    const stem = m.coverName.replace(/\.[a-z0-9]+$/i, '');
    const hit = images.find((im) => im.src.src.includes(stem));
    if (hit) return hit.src;
  }
  if (m.coverIndex && images[m.coverIndex - 1]) return images[m.coverIndex - 1].src;
  return images[0]?.src;
};

export const projects: Project[] = [...meta, ...extraMeta].map((m) => {
  const images = imagesFor(m.slug, m.title + (m.location ? `, ${m.location}` : ''));
  return { ...m, images, cover: pickCover(images, m) } as Project;
});

// Hero: soggiorno del flagship
export const heroProject = projects.find((p) => p.featured) ?? projects[0];
export const heroImage = (() => {
  const stem = heroProject.heroName?.replace(/\.[a-z0-9]+$/i, '');
  return (stem && heroProject.images.find((im) => im.src.src.includes(stem))?.src) || heroProject.cover;
})();

export const categories = ['Tutti', 'Appartamenti completi', 'Ville e case', 'Cartongesso di design', 'Bagni', 'Cucine', 'Cantiere & processo'];
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

// Foto specifica di un progetto (per stem del nome file), altrimenti la sua cover.
export const pickPhoto = (slug: string, stem?: string) => {
  const project = getProject(slug)!;
  const image =
    (stem && project.images.find((i) => i.src.src.includes(stem))) ||
    project.images.find((i) => i.src === project.cover) ||
    project.images[0];
  return { project, image };
};
