// Lavori eseguiti: letti dalla collezione src/content/lavori (una cartella per lavoro, modificabile
// dal pannello /admin). Qui si trasformano nel formato usato da pagine e componenti.
import type { ImageMetadata } from 'astro';
import { getCollection } from 'astro:content';
import { categorie } from '../content.config';

export type ProjectImage = { src: ImageMetadata; alt: string; caption: string };
export type Project = {
  slug: string;
  title: string;
  location: string | null;
  category: string;
  blurb: string;
  scope: string[];
  images: ProjectImage[];
  cover: ImageMetadata;
  featured?: boolean;
  heroImage?: ImageMetadata;
  seoTitle?: string;
  seoDescription?: string;
};

const entries = (await getCollection('lavori'))
  .filter((e) => !e.data.bozza && e.data.foto.length > 0)
  .sort((a, b) => a.data.ordine - b.data.ordine || a.data.titolo.localeCompare(b.data.titolo, 'it'));

export const projects: Project[] = entries.map(({ id, data: d }) => {
  const altBase = d.titolo + (d.comune ? `, ${d.comune}` : '');
  const images: ProjectImage[] = d.foto.map((f, i) => ({
    src: f.src,
    caption: f.didascalia || '',
    alt: f.didascalia ? `${altBase}: ${f.didascalia}` : `${altBase}, foto ${i + 1}`,
  }));
  return {
    slug: id,
    title: d.titolo,
    location: d.comune ?? null,
    category: d.categoria,
    blurb: d.descrizione,
    scope: d.lavorazioni,
    images,
    cover: d.copertina ?? images[0].src,
    featured: d.inEvidenza,
    heroImage: d.fotoHero,
    seoTitle: d.seo?.titolo,
    seoDescription: d.seo?.descrizione,
  };
});

// Hero: foto scelta del lavoro in evidenza (soggiorno del flagship)
export const heroProject = projects.find((p) => p.featured) ?? projects[0];
export const heroImage = heroProject.heroImage ?? heroProject.cover;

export const categories = ['Tutti', ...categorie];
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

// Foto specifica di un progetto (per parte del nome file), altrimenti la sua copertina.
export const pickPhoto = (slug: string, stem?: string) => {
  const project = getProject(slug)!;
  const image =
    (stem && project.images.find((i) => i.src.src.includes(stem))) ||
    project.images.find((i) => i.src.src === project.cover.src) ||
    project.images[0];
  return { project, image };
};
