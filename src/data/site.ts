// Dati aziendali reali (estratti da impresaippolito.it) — fonte unica per SEO/footer/schema.
export const site = {
  name: 'Impresa Ippolito',
  legalName: 'Impresa di Costruzione e Ristrutturazione di A. Ippolito',
  owner: 'Geom. Antonio Ippolito',
  tagline: 'Ristrutturazioni chiavi in mano',
  claim: 'Ristrutturazioni civili a Milano e Monza Brianza da oltre 30 anni.',
  years: '30+',
  areaServed: ['Milano', 'Monza e Brianza'],

  // recapiti
  phone: { display: '02 2416 6266', href: 'tel:+390224166266' },
  mobile: { display: '339 533 0704', href: 'tel:+393395330704' },
  whatsapp: 'https://wa.me/393395330704',
  email: null as string | null, // ASSENTE sul vecchio sito — TODO cliente
  facebook: 'https://www.facebook.com/impresaippolito/',

  // sede
  address: {
    street: 'Via Monte Bianco 25',
    zip: '20026',
    city: 'Novate Milanese',
    province: 'MI',
    geo: { lat: 45.53898, lng: 9.1302613 },
    maps: 'https://www.google.com/maps/place/Via+Monte+Bianco,+25,+20026+Novate+Milanese+MI',
  },

  // dati legali (fedeli)
  legal: {
    alboArtigiani: '353500',
    piva: '13285520154',
    regImprese: 'Reg. Imprese Milano 1635875',
  },
} as const;

// TrustBar
export const trust = [
  { k: 'Oltre 30 anni', v: 'di attività' },
  { k: 'Unico interlocutore', v: 'dal preventivo alla consegna' },
  { k: 'Garanzia', v: 'su opere e materiali' },
  { k: 'Albo Artigiani 353500', v: 'P.I. 13285520154' },
];

// I 10 punti "NOI GARANTIAMO" (testo reale) → "Perché sceglierci"
export const guarantees = [
  { t: 'Accordi rispettati', d: 'Massimo impegno nel rispetto degli accordi, preventivati in modo dettagliato.' },
  { t: 'Materiali di qualità', d: 'Materiali scelti da società leader nel settore.' },
  { t: 'Maestranze specializzate', d: 'In regola con le normative su sicurezza e regolarità contributiva.' },
  { t: 'Capacità tecnica', d: 'Esperienza diretta su ogni tipo di intervento, interno ed esterno.' },
  { t: 'Flessibilità', d: 'Vi affianchiamo in tutte le fasi lavorative, adattandoci alle esigenze.' },
  { t: 'Un solo referente', d: 'Un unico interlocutore dall’inizio alla fine dei lavori.' },
  { t: 'Cura delle finiture', d: 'Precisione nella realizzazione, con particolare attenzione ai dettagli.' },
  { t: 'Cantiere pulito e puntuale', d: 'Rispetto dei luoghi di lavoro e delle tempistiche di consegna.' },
  { t: 'Sempre reperibili', d: 'Totale reperibilità: pronti a intervenire in caso di necessità.' },
  { t: 'Assistenza post consegna', d: 'Garanzia sulle opere e sui materiali impiegati anche dopo la consegna.' },
];

// Servizi (voci reali) — indice per griglia
export const services = [
  { t: 'Rifacimento bagni e cucine', d: 'Demolizione, impianti, posa di rivestimenti e sanitari: il bagno o la cucina rifatti a regola d’arte.' },
  { t: 'Impianti elettrici e domotica', d: 'Impianti a norma C.E.I. e legge 46/90, con soluzioni domotiche su richiesta.' },
  { t: 'Impianti termoidraulici', d: 'Riscaldamento, idrosanitario e condizionamento, anche canalizzato.' },
  { t: 'Pavimenti e rivestimenti', d: 'Fornitura e posa di ceramica, gres porcellanato e parquet, interni ed esterni.' },
  { t: 'Cartongesso', d: 'Controsoffittature e pareti divisorie, opere da gessista e stuccatore.' },
  { t: 'Tinteggiature e decorazioni', d: 'Tinteggiature interne ed esterne, decorazioni su misura.' },
  { t: 'Tetti e coperture', d: 'Rifacimento tetti, coperture e impermeabilizzazioni.' },
  { t: 'Facciate e cappotto', d: 'Rifacimento facciate tradizionali o a cappotto termico.' },
];

// Nota trust dai servizi (DURC / certificazioni)
export const compliance = [
  'Prima di iniziare i lavori rilasciamo il DURC — Documento Unico di Regolarità Contributiva, necessario anche per accedere alle detrazioni fiscali.',
  'Consegniamo solo impianti con regolare certificazione, conformi alle norme C.E.I. e alla legge 46/90.',
];

// Nav
export const nav = [
  { label: 'Servizi', href: '/servizi' },
  { label: 'Lavori', href: '/lavori-eseguiti' },
  { label: 'Prima e dopo', href: '/prima-e-dopo' },
  { label: 'Agevolazioni', href: '/agevolazioni-fiscali' },
  { label: 'Contatti', href: '/contatti' },
];
