// Prezzi e tempi INDICATIVI forniti dal titolare (questionario compilato, ottobre 2026).
// Fonte unica per /prezzi-ristrutturazione, /cartongesso-di-design e llms.txt: i numeri vanno
// cambiati solo qui. Il prezzo vero resta quello del preventivo dopo il sopralluogo gratuito.
export const aggiornato = { label: 'ottobre 2026', iso: '2026-10-07' };

// nota da mettere in fondo a ogni sezione con i prezzi (richiesta del titolare)
export const notaIndicativi = 'Prezzi indicativi: servono a farsi un’idea. Il prezzo esatto è quello del preventivo voce per voce, dopo il sopralluogo gratuito.';

export type Range = { min: number; max: number | null; plus?: boolean };
// punto delle migliaia sempre, anche a 4 cifre (toLocaleString it-IT scrive "7500" ma "10.000")
export const euro = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
// intervalli di giorni (senza simbolo dell'euro): "8-15"
export const giorni = (r: Range) => `${r.min}-${r.max ?? r.min}`;
export const range = (r: Range, unit = '') => {
  const u = unit ? ` ${unit}` : '';
  if (r.max == null) return `oltre ${euro(r.min)} €${u}`;
  return `${euro(r.min)}-${euro(r.max)} €${r.plus ? ' e oltre' : ''}${u}`;
};

// Ristrutturazione appartamento, euro al metro quadro
export const appartamento: { t: string; r: Range; d: string }[] = [
  { t: 'Leggera / restyling', r: { min: 400, max: 600 }, d: 'Tinteggiatura, posa di nuovi pavimenti sopra quelli esistenti, sostituzione dei sanitari e piccoli interventi estetici.' },
  { t: 'Media / integrale', r: { min: 600, max: 1000 }, d: 'Rifacimento parziale o totale degli impianti elettrico e idrico, modifiche leggere ai tramezzi interni, rinnovo di bagno e cucina.' },
  { t: 'Pesante / profonda', r: { min: 1000, max: 1500 }, d: 'Demolizioni e ricostruzioni complete, rifacimento dei massetti, nuovi impianti certificati, infissi e finiture di ottima qualità.' },
];

// Bagno completo, prezzo a corpo
export const bagno: { t: string; r: Range; d: string }[] = [
  { t: 'Fascia economica', r: { min: 7500, max: 8500 }, d: 'Materiali standard e finiture di base.' },
  { t: 'Fascia media', r: { min: 8500, max: 10500 }, d: 'Ottimo rapporto qualità-prezzo: gres porcellanato e sanitari di marca.' },
  { t: 'Fascia alta o di pregio', r: { min: 10500, max: 13000, plus: true }, d: 'Materiali di design, modifiche importanti agli impianti e finiture di lusso.' },
];

// Controsoffitti in cartongesso, euro al metro quadro posa inclusa (prezzi aggiornati dal titolare il 7/10/2026)
export const cartongesso: { t: string; r: Range; d: string; extra?: boolean }[] = [
  { t: 'Lineare o piano con faretti', r: { min: 65, max: 80 }, d: 'Lastra standard con i fori per i faretti LED da incasso.' },
  { t: 'Con velette o gole luminose', r: { min: 75, max: 110 }, d: 'Struttura a doppio livello con tagli di luce o retroilluminazione perimetrale per strisce LED.' },
  { t: 'Design complesso o curvo', r: { min: 80, max: 140 }, d: 'Sagomature particolari realizzate in opera, adatte ad ambienti di pregio.' },
  { t: 'Isolamento termoacustico', r: { min: 15, max: 30 }, d: 'Lana di roccia o di vetro nell’intercapedine: si aggiunge al prezzo base.', extra: true },
];

// Durata del cantiere, giorni lavorativi (lavori standard)
export const durata: { t: string; mq: string; giorni: Range; circa: string; d: string }[] = [
  { t: 'Appartamento piccolo', mq: '40-60 mq', giorni: { min: 35, max: 50 }, circa: 'circa 1 mese e mezzo', d: 'Lo spazio ridotto spesso non permette a più artigiani, per esempio elettricista e piastrellista, di lavorare insieme.' },
  { t: 'Appartamento medio', mq: '70-100 mq', giorni: { min: 60, max: 80 }, circa: 'circa 3 mesi o 3 mesi e mezzo', d: 'Il cantiere classico, in cui le lavorazioni si sovrappongono in modo efficiente.' },
  { t: 'Appartamento grande', mq: 'oltre 120 mq', giorni: { min: 75, max: 100 }, circa: '4 mesi o più', d: 'Soprattutto con più di due bagni, impianti complessi (canalizzati o radianti a pavimento) o modifiche strutturali che richiedono la SCIA.' },
];
export const durataBagno: Range = { min: 8, max: 15 };

// Tempi del preventivo scritto, giorni lavorativi
export const tempiPreventivo = [
  { t: 'Lavori semplici', es: 'per esempio solo un bagno o una tinteggiatura', giorni: { min: 3, max: 5 } as Range },
  { t: 'Ristrutturazione completa', es: 'un intero appartamento, con spostamento di tramezzi e impianti', giorni: { min: 7, max: 14 } as Range },
];

// Pagamenti a stato di avanzamento lavori
export const pagamenti = [
  { pct: 30, t: 'Acconto alla firma', d: 'Copre allestimento del cantiere, sicurezza, protezione delle parti comuni e avvio delle demolizioni.' },
  { pct: 30, t: 'Primo SAL', d: 'A demolizioni, smaltimento delle macerie e nuovi tramezzi interni completati.' },
  { pct: 30, t: 'Secondo SAL', d: 'A impianti completati (tubi idraulici, corrugati elettrici, riscaldamento) e nuovo massetto steso.' },
  { pct: 10, t: 'Saldo a fine lavori', d: 'Dopo pavimenti, porte, tinteggiatura e frutti elettrici, con il collaudo finale insieme al cliente.' },
];

// ---- Totali calcolati dalle fasce: usati in sintesi, descrizioni per Google, FAQ e llms.txt ----
const span = (list: { r: Range; extra?: boolean }[]): Range => {
  const l = list.filter((x) => !x.extra);
  return { min: Math.min(...l.map((x) => x.r.min)), max: Math.max(...l.map((x) => x.r.max ?? x.r.min)), plus: l.some((x) => x.r.plus) };
};
export const totAppartamento = span(appartamento);
export const totBagno = span(bagno);
export const totCartongesso = span(cartongesso);
// "7.500-13.000 €+" (compatto, per la sintesi)
export const breve = (r: Range, unit = '') => `${euro(r.min)}-${euro(r.max ?? r.min)} €${r.plus ? '+' : ''}${unit ? `/${unit}` : ''}`;
// "da 7.500 a 13.000 euro e oltre" (discorsivo, per testi e FAQ)
export const daA = (r: Range) => `da ${euro(r.min)} a ${euro(r.max ?? r.min)} euro${r.plus ? ' e oltre' : ''}`;

// Risposte FAQ generate dagli stessi numeri delle tabelle
export const faqBagno = () =>
  `Indicativamente un bagno completo costa ${daA(bagno[0].r)} nella fascia economica, con materiali standard e finiture di base; ${daA(bagno[1].r)} nella fascia media, con gres porcellanato e sanitari di marca e un ottimo rapporto qualità-prezzo; ${daA(bagno[2].r)} nella fascia alta, con materiali di design, modifiche importanti agli impianti e finiture di lusso. Sono prezzi indicativi, utili per farsi un’idea: il prezzo esatto lo trovate nel preventivo dopo il sopralluogo gratuito.`;
export const faqCartongesso = () =>
  `Prezzi medi al metro quadro, posa inclusa: ${daA(cartongesso[0].r)} per una struttura lineare o piana con faretti (lastra standard con i fori per i faretti LED da incasso); ${daA(cartongesso[1].r)} con velette o gole luminose per strisce LED (struttura a doppio livello con tagli di luce o retroilluminazione perimetrale); ${daA(cartongesso[2].r)} per un design complesso o curvo, con sagomature realizzate in opera. L’isolamento termoacustico, con lana di roccia o di vetro nell’intercapedine, aggiunge ${daA(cartongesso[3].r)} al metro quadro. Sono prezzi indicativi, utili per farsi un’idea.`;
