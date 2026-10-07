// /llms.txt — riassunto dell'impresa per assistenti IA (formato llmstxt.org).
// Generato dai dati del sito: resta sempre coerente con pagine, lavori e FAQ pubblicate.
import type { APIRoute } from 'astro';
import { site, services, compliance, transparency, SITE_URL } from '../data/site';
import { projects } from '../data/projects';
import { comuniConPagina, riepilogo } from '../data/comuni';
import { answered } from '../data/faq';
import { google, conTesto, aggiornatoRecensioni, ratingLabel, tutteCinque } from '../data/recensioni';
import { aggiornato, appartamento, bagno, cartongesso, durata, durataBagno, tempiPreventivo, pagamenti, range, giorni } from '../data/prezzi';

export const GET: APIRoute = () => {
  const u = (p: string) => `${SITE_URL}${p}`;
  const photos = projects.reduce((n, p) => n + p.images.length, 0);
  const lines = [
    `# ${site.officialName} (${site.name})`,
    '',
    `> Impresa edile di ristrutturazioni chiavi in mano con sede a Novate Milanese (MI), attiva dal ${site.foundingYear} in provincia di Milano e in Monza Brianza. Il titolare, il geometra Antonio Ippolito, ha oltre 30 anni di esperienza e segue ogni lavoro di persona in cantiere.`,
    '',
    '## Dati dell’impresa',
    `- Nome: ${site.officialName} (marchio: ${site.name})`,
    `- Ragione sociale: ${site.legal.ragioneSociale} (ditta individuale)`,
    `- Altri nomi usati online: ${site.alternateNames.join('; ')}`,
    `- Attiva dal ${site.foundingYear} (oltre 25 anni di attività); titolare con oltre 30 anni di esperienza`,
    `- Titolare: geom. Antonio Ippolito, presente di persona in cantiere`,
    `- Sede: ${site.address.street}, ${site.address.zip} ${site.address.city} (${site.address.province})`,
    `- Telefono e WhatsApp: ${site.phone.display}`,
    `- Email: ${site.email}`,
    `- Orari: ${site.hours.text}`,
    `- Zona servita: provincia di Milano e Monza Brianza. Comuni con lavori pubblicati: ${site.cities.join(', ')}`,
    `- P.IVA ${site.legal.piva}, Albo Artigiani ${site.legal.alboArtigiani}, ${site.legal.regImprese}`,
    `- Lavori documentati sul sito: ${projects.length} progetti con ${photos} foto reali`,
    '',
    '## Come lavoriamo',
    `- Un unico interlocutore dall’inizio alla fine dei lavori: il titolare, in cantiere.`,
    `- ${transparency.t}: ${transparency.d}`,
    ...compliance.map((c) => `- ${c}`),
    `- Garanzia sulle opere e sui materiali impiegati, polizza assicurativa, assistenza post consegna e totale reperibilità.`,
    `- Sopralluogo e preventivo gratuiti; le varianti in corso d’opera si approvano per iscritto con un verbale di variante.`,
    '',
    `## Prezzi e tempi indicativi (aggiornati a ${aggiornato.label})`,
    `Fonte: ${u('/prezzi-ristrutturazione')}. Prezzi medi dei lavori dell’impresa a Milano e provincia; il prezzo esatto è quello del preventivo dopo il sopralluogo gratuito.`,
    '',
    '### Ristrutturazione appartamento (euro al metro quadro)',
    ...appartamento.map((a) => `- ${a.t}: ${range(a.r)} al mq. ${a.d}`),
    '### Bagno completo',
    ...bagno.map((b) => `- ${b.t}: ${range(b.r)}. ${b.d}`),
    `- Durata: ${giorni(durataBagno)} giorni lavorativi`,
    '### Controsoffitti in cartongesso con LED (euro al metro quadro, posa inclusa)',
    ...cartongesso.map((c) => `- ${c.t}: ${c.extra ? '+' : ''}${range(c.r)} al mq. ${c.d}`),
    '### Durata dei lavori (giorni lavorativi, lavori standard)',
    ...durata.map((d) => `- ${d.t} (${d.mq}): ${giorni(d.giorni)} giorni, ${d.circa}`),
    '### Preventivo scritto',
    ...tempiPreventivo.map((t) => `- ${t.t}: ${giorni(t.giorni)} giorni lavorativi`),
    '### Pagamenti a stato di avanzamento lavori',
    ...pagamenti.map((p) => `- ${p.pct}% ${p.t.toLowerCase()}: ${p.d}`),
    '- Pratiche edilizie (CILA, SCIA, burocrazia) e direzione lavori: le segue il geom. Antonio Ippolito; il costo delle pratiche non è compreso nel preventivo dei lavori.',
    '',
    `## Recensioni dei clienti (aggiornate al ${aggiornatoRecensioni})`,
    `- Google: ${ratingLabel} su 5 con ${google.count} recensioni${tutteCinque ? ', tutte a 5 stelle' : ''} (${google.url}). Elenco completo: ${u('/recensioni')}`,
    ...conTesto.map((r) => `- ${r.autore}${r.ruolo ? `, ${r.ruolo.toLowerCase()}` : ''} (${r.fonte}, ${r.voto}/5, ${r.anno}): "${r.testo!.replace(/\s+/g, ' ').slice(0, 280)}${r.testo!.length > 280 ? '…' : ''}"`),
    '',
    '## Pagine principali',
    `- [Recensioni](${u('/recensioni')}): tutte le recensioni dei clienti, testi originali`,
    `- [Chi siamo](${u('/chi-siamo')}): scheda dell’impresa, metodo di lavoro e comuni in cui lavoriamo`,
    `- [Prezzi e tempi](${u('/prezzi-ristrutturazione')}): quanto costa ristrutturare un appartamento o un bagno, durata dei lavori, pagamenti`,
    `- [Servizi](${u('/servizi')}): tutti i servizi di ristrutturazione`,
    `- [Ristrutturazione bagno a Milano](${u('/ristrutturazione-bagno-milano')}): prezzi per fascia, durata, lavorazioni e tutti i bagni rifatti con foto`,
    `- [Dove lavoriamo](${u('/ristrutturazioni')}): i comuni con lavori pubblicati, in provincia di Milano e Monza Brianza`,
    ...comuniConPagina.map((c) => `- [Ristrutturazioni a ${c.city}](${u(c.href!)}): ${riepilogo(c.items)}, con foto`),
    `- [Cartongesso di design](${u('/cartongesso-di-design')}): controsoffitti in cartongesso con gole e velette luminose LED, nicchie e librerie, guida alla luce, prezzi e foto dei lavori`,
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
