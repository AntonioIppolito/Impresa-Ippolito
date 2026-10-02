// Prezzi e tempi INDICATIVI forniti dal titolare (questionario compilato, ottobre 2026).
// Fonte unica per /prezzi-ristrutturazione, /cartongesso-di-design e llms.txt: i numeri vanno
// cambiati solo qui. Il prezzo vero resta quello del preventivo dopo il sopralluogo gratuito.
export const aggiornato = { label: 'ottobre 2026', iso: '2026-10-02' };

export type Range = { min: number; max: number | null; plus?: boolean };
export const euro = (n: number) => n.toLocaleString('it-IT');
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
  { t: 'Fascia economica', r: { min: 6000, max: 8000 }, d: 'Materiali standard e finiture di base.' },
  { t: 'Fascia media', r: { min: 8000, max: 10000 }, d: 'Ottimo rapporto qualità-prezzo: gres porcellanato e sanitari di marca.' },
  { t: 'Fascia alta o di pregio', r: { min: 10000, max: 13000, plus: true }, d: 'Materiali di design, modifiche importanti agli impianti e finiture di lusso.' },
];

// Controsoffitti in cartongesso, euro al metro quadro posa inclusa
export const cartongesso: { t: string; r: Range; d: string; extra?: boolean }[] = [
  { t: 'Lineare o piano con faretti', r: { min: 55, max: 80 }, d: 'Lastra standard con i fori per i faretti LED da incasso.' },
  { t: 'Con velette o gole luminose', r: { min: 65, max: 110 }, d: 'Struttura a doppio livello con tagli di luce o retroilluminazione perimetrale per strisce LED.' },
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
