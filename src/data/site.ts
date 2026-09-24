// Dati aziendali reali (estratti da impresaippolito.it) — fonte unica per SEO/footer/schema.
export const SITE_URL = 'https://impresaippolito.it';
export const ORG_ID = `${SITE_URL}/#impresa`; // @id dell'entità impresa nello schema.org

export const site = {
  name: 'Impresa Ippolito',
  legalName: 'Impresa di Costruzione e Ristrutturazione di A. Ippolito',
  owner: 'Geom. Antonio Ippolito',
  tagline: 'Ristrutturazioni chiavi in mano',
  claim: 'Ristrutturazioni civili a Milano e Monza Brianza da oltre 30 anni.',
  years: '30+',
  areaServed: ['Milano', 'Monza e Brianza'],

  // recapiti (telefono fisso rimosso su richiesta: non più attivo)
  phone: { display: '339 533 0704', href: 'tel:+393395330704' },
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
    ragioneSociale: 'Ippolito Antonio', // ditta individuale (documenti del cliente, 2026-09-20)
  },

  // GEO: nomi con cui l'impresa compare nelle schede online (Google, Facebook, directory),
  // dichiarati come alternateName per far riconoscere alle IA che sono la stessa impresa
  alternateNames: [
    'Ippolito Antonio',
    'Impresa di Costruzione e Ristrutturazione di A. Ippolito',
    'Impresa Edile Antonio Ippolito',
    'Impresa Geom. Ippolito Antonio',
  ],
  instagram: 'https://www.instagram.com/impresa.ippolito/',
  paginegialle: 'https://www.paginegialle.it/impresadicostruzioneeristrutturazionediaippolito-novatemilanese',

  // comuni con lavori reali pubblicati sul sito (zona servita documentata)
  cities: ['Milano', 'Novate Milanese', 'Bollate', 'Cormano', 'Bresso', 'Senago', 'Paderno Dugnano', 'Arese', 'Settimo Milanese', 'Brugherio', 'Monza'],
} as const;

// TrustBar
export const trust = [
  { k: 'Oltre 30 anni', v: 'di attività' },
  { k: 'Titolare in cantiere', v: 'presente di persona sui lavori' },
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
  { t: 'Un solo referente', d: 'Un unico interlocutore dall’inizio alla fine dei lavori, presente di persona in cantiere.' },
  { t: 'Cura delle finiture', d: 'Precisione nella realizzazione, con particolare attenzione ai dettagli.' },
  { t: 'Cantiere pulito e puntuale', d: 'Rispetto dei luoghi di lavoro e delle tempistiche di consegna.' },
  { t: 'Sempre reperibili', d: 'Totale reperibilità: pronti a intervenire in caso di necessità.' },
  { t: 'Assistenza post consegna', d: 'Garanzia sulle opere e sui materiali impiegati anche dopo la consegna.' },
];

// Servizi (voci reali) — indice per griglia bento.
// layout: 'wide' = 2 colonne su desktop · 'feature' = card con foto, 2 colonne da tablet in su
type Service = {
  t: string;
  d: string;
  layout?: 'wide' | 'feature';
  photo?: { slug: string; stem: string; pos?: string };
  href?: string;
};
export const services: Service[] = [
  { t: 'Rifacimento bagni e cucine', d: 'Demolizione, impianti, posa di rivestimenti e sanitari: il bagno o la cucina rifatti a regola d’arte.', layout: 'wide' },
  { t: 'Impianti elettrici e domotica', d: 'Impianti a norma C.E.I. e legge 46/90, con soluzioni domotiche su richiesta.' },
  { t: 'Impianti termoidraulici', d: 'Riscaldamento, idrosanitario e condizionamento, anche canalizzato.' },
  { t: 'Pavimenti e rivestimenti', d: 'Fornitura e posa di ceramica, gres porcellanato e parquet, interni ed esterni.' },
  { t: 'Cartongesso', d: 'Controsoffittature e pareti divisorie, opere da gessista e stuccatore.' },
  {
    t: 'Cartongesso di design',
    d: 'Soluzioni illuminotecniche: gole e velette luminose, controsoffitti sagomati e boiserie con luci a LED e faretti per valorizzare i volumi.',
    layout: 'feature',
    photo: { slug: 'cartongesso-design', stem: 'cartongesso-design-04', pos: '50% 22%' },
    href: '/cartongesso-di-design',
  },
  { t: 'Tinteggiature e decorazioni', d: 'Tinteggiature interne ed esterne, decorazioni su misura.' },
];

// Preventivi trasparenti (richiesta cliente) — punto in evidenza
export const transparency = {
  t: 'Preventivi trasparenti',
  d: 'Niente costi nascosti o voci ambigue: quello che firmi è ciò che paghi, con un computo metrico chiaro e dettagliato.',
};

// Nota trust dai servizi (DURC / certificazioni)
export const compliance = [
  'Prima di iniziare i lavori rilasciamo il DURC (Documento Unico di Regolarità Contributiva), necessario anche per accedere alle detrazioni fiscali.',
  'Consegniamo solo impianti con regolare certificazione, conformi alle norme C.E.I. e alla legge 46/90.',
];

// Nav
export const nav = [
  { label: 'Chi siamo', href: '/chi-siamo' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Lavori', href: '/lavori-eseguiti' },
  { label: 'Prima e dopo', href: '/prima-e-dopo' },
  { label: 'Agevolazioni', href: '/agevolazioni-fiscali' },
  { label: 'FAQ', href: '/domande-frequenti' },
  { label: 'Contatti', href: '/contatti' },
];
