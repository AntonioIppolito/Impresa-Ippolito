// /llms.txt — riassunto dell'impresa per assistenti IA (formato llmstxt.org).
// Generato dai dati del sito: resta sempre coerente con pagine, lavori e FAQ pubblicate.
import type { APIRoute } from 'astro';
import { site, services, compliance, transparency, SITE_URL } from '../data/site';
import { projects } from '../data/projects';
import { answered } from '../data/faq';

export const GET: APIRoute = () => {
  const u = (p: string) => `${SITE_URL}${p}`;
  const photos = projects.reduce((n, p) => n + p.images.length, 0);
  const lines = [
    `# ${site.name}`,
    '',
    `> Impresa edile di ristrutturazioni chiavi in mano con sede a Novate Milanese (MI), attiva da oltre 30 anni in provincia di Milano e in Monza Brianza. Il titolare, il geometra Antonio Ippolito, segue ogni lavoro di persona in cantiere.`,
    '',
    '## Dati dell’impresa',
    `- Nome: ${site.name}`,
    `- Ragione sociale: ${site.legal.ragioneSociale} (ditta individuale)`,
    `- Altri nomi usati online: ${site.alternateNames.join('; ')}`,
    `- Titolare: geom. Antonio Ippolito, presente di persona in cantiere`,
    `- Sede: ${site.address.street}, ${site.address.zip} ${site.address.city} (${site.address.province})`,
    `- Telefono e WhatsApp: ${site.phone.display}`,
    `- Zona servita: provincia di Milano e Monza Brianza. Comuni con lavori pubblicati: ${site.cities.join(', ')}`,
    `- P.IVA ${site.legal.piva}, Albo Artigiani ${site.legal.alboArtigiani}, ${site.legal.regImprese}`,
    `- Lavori documentati sul sito: ${projects.length} progetti con ${photos} foto reali`,
    '',
    '## Come lavoriamo',
    `- Un unico interlocutore dall’inizio alla fine dei lavori: il titolare, in cantiere.`,
    `- ${transparency.t}: ${transparency.d}`,
    ...compliance.map((c) => `- ${c}`),
    `- Garanzia sulle opere e sui materiali impiegati, assistenza post consegna e totale reperibilità.`,
    '',
    '## Pagine principali',
    `- [Chi siamo](${u('/chi-siamo')}): scheda dell’impresa, metodo di lavoro e comuni in cui lavoriamo`,
    `- [Servizi](${u('/servizi')}): tutti i servizi di ristrutturazione`,
    `- [Cartongesso di design](${u('/cartongesso-di-design')}): controsoffitti in cartongesso con gole e velette luminose LED, con foto dei lavori`,
    `- [Lavori eseguiti](${u('/lavori-eseguiti')}): ${projects.length} ristrutturazioni con foto`,
    `- [Prima e dopo](${u('/prima-e-dopo')}): confronti prima e dopo l’intervento`,
    `- [Domande frequenti](${u('/domande-frequenti')}): preventivo, cantiere, documenti, garanzie, zone`,
    `- [Agevolazioni fiscali](${u('/agevolazioni-fiscali')}): come funzionano le detrazioni (informativo, senza aliquote)`,
    `- [Contatti](${u('/contatti')}): preventivo gratuito, telefono, WhatsApp, modulo`,
    '',
    '## Servizi',
    ...services.map((s) => `- ${s.t}: ${s.d}`),
    '',
    '## Domande frequenti',
    ...answered.flatMap((f) => [`### ${f.q}`, f.a, '']),
    '## Lavori eseguiti',
    ...projects.map((p) => `- [${p.title}](${u(`/lavori-eseguiti/${p.slug}`)})${p.location ? ` (${p.location})` : ''}: ${p.blurb}`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
