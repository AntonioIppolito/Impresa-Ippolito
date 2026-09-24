// Domande frequenti (ricerca SEO/GEO 2026-09-24: domande reali trovate su FAQ concorrenti,
// forum e guide). REGOLA: una risposta si pubblica solo se viene da testi reali già approvati
// o dal titolare. Le domande con a = null restano NASCOSTE finché Ippolito non risponde
// (vedi questionario). `hint` = cosa deve contenere la risposta del titolare.
export type Faq = {
  q: string;
  a: string | null;
  tema: 'Preventivo e costi' | 'Tempi e cantiere' | 'Pratiche e documenti' | 'Garanzie' | 'Zona e servizi';
  hint?: string;
  home?: boolean; // mostrata anche nell'estratto
};

export const faqs: Faq[] = [
  // ---- Preventivo e costi ----
  {
    q: 'Il preventivo è gratuito?',
    a: 'Sì, il preventivo è gratuito. Potete chiamarci o scriverci su WhatsApp al 339 533 0704, oppure compilare il modulo nella pagina Contatti descrivendo il lavoro.',
    tema: 'Preventivo e costi', home: true,
    hint: 'Confermare se anche il SOPRALLUOGO è gratuito, chi viene (il geom. Ippolito?) e in quanti giorni arriva il preventivo scritto.',
  },
  {
    q: 'Il preventivo è dettagliato? Il prezzo può cambiare durante i lavori?',
    a: 'Il preventivo è voce per voce, con un computo metrico chiaro e dettagliato: niente costi nascosti o voci ambigue. Quello che firmate è ciò che pagate, e ci impegniamo al massimo nel rispetto degli accordi presi.',
    tema: 'Preventivo e costi', home: true,
    hint: 'Aggiungere come vengono gestite e approvate per iscritto le eventuali varianti chieste dal cliente in corso d’opera.',
  },
  {
    q: 'Quanto costa ristrutturare un appartamento?',
    a: null, tema: 'Preventivo e costi',
    hint: 'Un range in euro al metro quadro per livello di intervento (leggero, medio, completo) basato sui vostri lavori, e i 3-4 fattori che lo fanno salire o scendere.',
  },
  {
    q: 'Quanto costa rifare un bagno completo?',
    a: null, tema: 'Preventivo e costi',
    hint: 'Un range di prezzo per un bagno tipo (indicarne i metri quadri), cosa è incluso (demolizione, impianti, piastrelle, sanitari) e cosa no.',
  },
  {
    q: 'Quanto costa un controsoffitto in cartongesso con luci LED?',
    a: null, tema: 'Preventivo e costi',
    hint: 'Un range indicativo in euro al metro quadro o a metro lineare per gola/veletta, e cosa lo fa variare (forma, numero di livelli, impianto elettrico).',
  },
  {
    q: 'Come funzionano acconto e pagamenti?',
    a: null, tema: 'Preventivo e costi',
    hint: 'La struttura reale: acconto alla firma (percentuale?), pagamenti a stato avanzamento lavori, saldo alla consegna; tutto scritto nel contratto.',
  },

  // ---- Tempi e cantiere ----
  {
    q: 'Devo coordinare io i vari artigiani?',
    a: 'No. Avete un unico interlocutore dall’inizio alla fine dei lavori: il titolare, il geometra Antonio Ippolito, che segue il cantiere di persona e coordina un’equipe di artigiani e professionisti di fiducia.',
    tema: 'Tempi e cantiere', home: true,
  },
  {
    q: 'Quanto durano i lavori per un appartamento completo?',
    a: null, tema: 'Tempi e cantiere',
    hint: 'La durata tipica del cantiere per un appartamento di una certa metratura, separata dai tempi di pratiche e scelta dei materiali.',
  },
  {
    q: 'Quanto tempo ci vuole per rifare un bagno?',
    a: null, tema: 'Tempi e cantiere',
    hint: 'Un range di giorni lavorativi per un bagno standard e cosa li allunga (spostamento degli scarichi, consegna dei materiali).',
  },
  {
    q: 'Posso restare in casa durante i lavori?',
    a: null, tema: 'Tempi e cantiere',
    hint: 'In quali lavori è possibile (per esempio organizzando per fasi o stanze) e in quali conviene spostarsi.',
  },
  {
    q: 'Come gestite pulizia e tempi di consegna?',
    a: 'Rispettiamo i luoghi di lavoro, li teniamo puliti e rispettiamo le tempistiche di consegna concordate.',
    tema: 'Tempi e cantiere',
    hint: 'Si può ampliare: protezioni per polvere e rumore, pulizia di fine giornata, orari del condominio, avviso all’amministratore, cronoprogramma.',
  },

  // ---- Pratiche e documenti ----
  {
    q: 'Servono CILA o SCIA? Chi si occupa delle pratiche?',
    a: null, tema: 'Pratiche e documenti',
    hint: 'In quali lavori serve la CILA o la SCIA, chi le prepara e le presenta (il titolare è geometra), e se il costo è incluso nel preventivo.',
  },
  {
    q: 'Rilasciate DURC e certificazioni degli impianti?',
    a: 'Sì. Prima di iniziare i lavori rilasciamo il DURC (Documento Unico di Regolarità Contributiva), necessario anche per accedere alle detrazioni fiscali, e consegniamo solo impianti con regolare certificazione, conformi alle norme C.E.I. e alla legge 46/90.',
    tema: 'Pratiche e documenti', home: true,
  },
  {
    q: 'Mi aiutate a capire se posso usare i bonus per la ristrutturazione?',
    a: 'Le agevolazioni cambiano ogni anno, quindi non promettiamo cifre: verifichiamo insieme il vostro caso. Da parte nostra rilasciamo il DURC e le certificazioni degli impianti, spesso richiesti per accedere alle detrazioni. Per gli aspetti fiscali fanno fede le fonti ufficiali dell’Agenzia delle Entrate e il vostro professionista di fiducia.',
    tema: 'Pratiche e documenti',
  },

  // ---- Garanzie ----
  {
    q: 'Che garanzie date sui lavori?',
    a: 'Diamo garanzia sulle opere e sui materiali impiegati e restiamo a disposizione anche dopo la consegna, con assistenza post consegna.',
    tema: 'Garanzie',
    hint: 'Aggiungere la durata della garanzia, eventuale polizza assicurativa e come si segnala un difetto.',
  },
  {
    q: 'Se dopo la consegna c’è un problema, vi trovo?',
    a: 'Sì: garantiamo totale reperibilità e siamo pronti a intervenire in caso di necessità.',
    tema: 'Garanzie',
  },

  // ---- Zona e servizi ----
  {
    q: 'In quali zone lavorate?',
    a: 'Siamo a Novate Milanese, in Via Monte Bianco 25, e lavoriamo in tutta la provincia di Milano e in Monza Brianza. Tra i lavori pubblicati sul sito ci sono interventi a Milano, Novate Milanese, Bollate, Cormano, Bresso, Senago, Paderno Dugnano, Arese, Settimo Milanese, Brugherio e Monza.',
    tema: 'Zona e servizi', home: true,
    hint: 'Eventuale distanza massima o comuni in cui NON lavorate.',
  },
  {
    q: 'Realizzate controsoffitti in cartongesso con luci LED?',
    a: 'Sì. Realizziamo cartongesso di design: gole e velette luminose, controsoffitti sagomati e boiserie con luci a LED e faretti, per valorizzare i volumi degli ambienti. Nella pagina dedicata trovate le foto dei nostri lavori.',
    tema: 'Zona e servizi',
  },
  {
    q: 'Fate anche solo il bagno o la cucina, o solo ristrutturazioni complete?',
    a: 'Eseguiamo ristrutturazioni parziali, complete e chiavi in mano di appartamenti, case indipendenti, uffici e negozi: dal rifacimento del solo bagno o della cucina fino all’intervento completo, interno ed esterno.',
    tema: 'Zona e servizi',
  },
];

export const answered = faqs.filter((f): f is Faq & { a: string } => !!f.a);
export const pending = faqs.filter((f) => !f.a);
export const temi = ['Preventivo e costi', 'Tempi e cantiere', 'Pratiche e documenti', 'Garanzie', 'Zona e servizi'] as const;
