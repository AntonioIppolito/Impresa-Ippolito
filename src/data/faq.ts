// Domande frequenti (ricerca SEO/GEO 2026-09-24: domande reali trovate su FAQ concorrenti,
// forum e guide). REGOLA: una risposta si pubblica solo se viene da testi reali già approvati
// o dal titolare. Le domande con a = null restano NASCOSTE finché Ippolito non risponde.
// Risposte del titolare: questionario compilato, ottobre 2026 (prezzi e tempi indicativi forniti da lui).
// `hint` = cosa deve contenere la risposta del titolare.
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
    a: 'Sì, il preventivo è gratuito e lo è anche il sopralluogo, che fa di persona il geom. Antonio Ippolito. Il preventivo scritto arriva in 3-5 giorni lavorativi per i lavori semplici, come un solo bagno o una tinteggiatura, e in 7-14 giorni lavorativi per una ristrutturazione completa, perché calcoliamo il costo di ogni materiale, chiediamo le quotazioni ai fornitori (per esempio per infissi e sanitari) e conteggiamo con precisione le ore di manodopera. Potete chiamarci o scriverci su WhatsApp al 339 533 0704, oppure compilare il modulo nella pagina Contatti.',
    tema: 'Preventivo e costi', home: true,
  },
  {
    q: 'Il preventivo è dettagliato? Il prezzo può cambiare durante i lavori?',
    a: 'Il preventivo è voce per voce, con un computo metrico chiaro e dettagliato: niente costi nascosti o voci ambigue. Quello che firmate è ciò che pagate. Se durante i lavori chiedete una modifica, un’aggiunta o una variante, prima la quantifichiamo noi e poi la approvate voi per iscritto, firmando un verbale di variante.',
    tema: 'Preventivo e costi', home: true,
  },
  {
    q: 'Quanto costa ristrutturare un appartamento?',
    a: 'Come riferimento indicativo, dai nostri lavori: una ristrutturazione leggera (restyling) costa da 400 a 600 euro al metro quadro e comprende tinteggiatura, nuovi pavimenti posati sopra gli esistenti, sostituzione dei sanitari e piccoli interventi estetici. Una ristrutturazione media o integrale costa da 600 a 1.000 euro al metro quadro, con rifacimento parziale o totale degli impianti elettrico e idrico, modifiche leggere ai tramezzi e rinnovo di bagno e cucina. Una ristrutturazione pesante costa da 1.000 a 1.500 euro al metro quadro, con demolizioni e ricostruzioni complete, rifacimento dei massetti, nuovi impianti certificati, infissi e finiture di ottima qualità. Il prezzo esatto lo trovate nel preventivo, dopo il sopralluogo gratuito.',
    tema: 'Preventivo e costi', home: true,
  },
  {
    q: 'Quanto costa rifare un bagno completo?',
    a: 'Indicativamente un bagno completo costa da 6.000 a 8.000 euro nella fascia economica, con materiali standard e finiture di base; da 8.000 a 10.000 euro nella fascia media, con gres porcellanato e sanitari di marca e un ottimo rapporto qualità-prezzo; da 10.000 a 13.000 euro e oltre nella fascia alta, con materiali di design, modifiche importanti agli impianti e finiture di lusso.',
    tema: 'Preventivo e costi', home: true,
  },
  {
    q: 'Quanto costa un controsoffitto in cartongesso con luci LED?',
    a: 'Prezzi medi al metro quadro, posa inclusa: da 55 a 80 euro per una struttura lineare o piana con faretti (lastra standard con i fori per i faretti LED da incasso); da 65 a 110 euro con velette o gole luminose per strisce LED (struttura a doppio livello con tagli di luce o retroilluminazione perimetrale); da 80 a 140 euro per un design complesso o curvo, con sagomature realizzate in opera. L’isolamento termoacustico, con lana di roccia o di vetro nell’intercapedine, aggiunge da 15 a 30 euro al metro quadro.',
    tema: 'Preventivo e costi',
  },
  {
    q: 'Come funzionano acconto e pagamenti?',
    a: 'Il pagamento è diviso in quattro parti legate all’avanzamento dei lavori: 30% di acconto alla firma del contratto, che copre allestimento del cantiere, sicurezza, protezione delle parti comuni e avvio delle demolizioni; 30% al primo stato di avanzamento (SAL), a demolizioni, smaltimento delle macerie e nuovi tramezzi completati; 30% al secondo SAL, a impianti completati (tubi idraulici, corrugati elettrici, riscaldamento) e nuovo massetto steso; 10% di saldo a fine lavori, dopo pavimenti, porte, tinteggiatura e frutti elettrici, con il collaudo finale insieme a voi.',
    tema: 'Preventivo e costi',
  },

  // ---- Tempi e cantiere ----
  {
    q: 'Devo coordinare io i vari artigiani?',
    a: 'No. Avete un unico interlocutore dall’inizio alla fine dei lavori: il titolare, il geometra Antonio Ippolito, che segue il cantiere di persona e coordina un’equipe di artigiani e professionisti di fiducia.',
    tema: 'Tempi e cantiere', home: true,
  },
  {
    q: 'Quanto durano i lavori per un appartamento completo?',
    a: 'Per lavori standard: un appartamento piccolo (40-60 mq) richiede da 35 a 50 giorni lavorativi, circa un mese e mezzo, perché lo spazio ridotto spesso non permette a più artigiani di lavorare insieme; un appartamento medio (70-100 mq) da 60 a 80 giorni lavorativi, circa 3 mesi o 3 mesi e mezzo, con le lavorazioni sovrapposte in modo efficiente; un appartamento grande (oltre 120 mq) da 75 a 100 giorni lavorativi, 4 mesi o più, soprattutto con più di due bagni, impianti complessi come canalizzati o radianti a pavimento, o modifiche strutturali che richiedono la SCIA.',
    tema: 'Tempi e cantiere',
  },
  {
    q: 'Quanto tempo ci vuole per rifare un bagno?',
    a: 'Per rifare un bagno completo da zero servono mediamente da 8 a 15 giorni lavorativi. I tempi non si possono comprimere più di tanto, perché le lavorazioni seguono una sequenza tecnica precisa con tempi di posa e di asciugatura obbligatori: chi promette un bagno nuovo in meno di 5 giorni lavorativi spesso salta passaggi fondamentali e mette a rischio il risultato.',
    tema: 'Tempi e cantiere',
  },
  {
    q: 'Posso restare in casa durante i lavori?',
    a: null, tema: 'Tempi e cantiere',
    hint: 'In quali lavori è possibile (per esempio organizzando per fasi o stanze) e in quali conviene spostarsi.',
  },
  {
    q: 'Come gestite polvere, rumore e pulizia del cantiere?',
    a: 'Isoliamo le stanze in cui lavoriamo con teli in plastica spessa fissati con nastro di carta professionale e, per il passaggio, montiamo una porta temporanea con cerniera lampo che trattiene la polvere. Copriamo bocchette del condizionatore e radiatori, perché la polvere non entri nei circuiti. Scanalatrici, levigatrici e seghe circolari sono collegate a un aspiratore da cantiere, e chi lavora usa mascherina FFP3 e occhiali sigillati durante demolizioni, tracce e carteggiatura. Rispettiamo gli orari del regolamento condominiale (di solito 8-12 e 13-18), concentrando le lavorazioni più rumorose nelle ore centrali, ed esponiamo nell’androne un avviso con la durata dei lavori e i contatti del capo cantiere. E rispettiamo le tempistiche di consegna concordate.',
    tema: 'Tempi e cantiere',
  },

  // ---- Pratiche e documenti ----
  {
    q: 'Servono CILA o SCIA? Chi si occupa delle pratiche?',
    a: 'Ce ne occupiamo noi: il geom. Antonio Ippolito segue le pratiche edilizie, CILA e SCIA, la burocrazia con il Comune e la direzione dei lavori. Per gli interventi semplici, come tinteggiare le pareti, sostituire i pavimenti o cambiare i sanitari, non serve nessuna pratica: rientrano nell’edilizia libera. Quando serve la CILA o la SCIA (per esempio le modifiche strutturali importanti richiedono la SCIA) un tecnico abilitato redige il progetto e assevera, cioè certifica sotto la propria responsabilità, che i lavori rispettano le norme edilizie, acustiche, di risparmio energetico e di sicurezza. Il costo delle pratiche non è compreso nel preventivo dei lavori e si valuta a parte.',
    tema: 'Pratiche e documenti',
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
    a: 'Diamo garanzia sulle opere e sui materiali impiegati, siamo coperti da una polizza assicurativa e restiamo a disposizione anche dopo la consegna, con assistenza post consegna.',
    tema: 'Garanzie',
    hint: 'Durata della garanzia e come si segnala un difetto (non ancora indicati).',
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
  },
  {
    q: 'Da quanto tempo lavorate?',
    a: 'L’Impresa Edile Ippolito Antonio è attiva dal 2001, quindi da oltre 25 anni, e il titolare, il geom. Antonio Ippolito, ha oltre trent’anni di esperienza nelle ristrutturazioni.',
    tema: 'Zona e servizi',
  },
  {
    q: 'Come vi contatto e in che orari?',
    a: 'Siamo disponibili dal lunedì al venerdì dalle 8 alle 18 e il sabato dalle 8 alle 12. Potete chiamarci o scriverci su WhatsApp al 339 533 0704, scrivere a impresa.ippolito@libero.it oppure compilare il modulo nella pagina Contatti.',
    tema: 'Zona e servizi',
  },
  {
    q: 'Realizzate controsoffitti in cartongesso con luci LED?',
    a: 'Sì. Realizziamo cartongesso di design: controsoffitti con gole luminose, velette decorative, controsoffitti sagomati, nicchie, librerie e pareti attrezzate su misura, con luci a LED e faretti. Seguiamo sia la struttura in cartongesso sia il collegamento elettrico certificato dei LED. Nella pagina dedicata trovate le foto dei nostri lavori.',
    tema: 'Zona e servizi',
  },
  {
    q: 'Luce calda, naturale o fredda: quale scegliere per i LED del controsoffitto?',
    a: 'Dipende dalla stanza. La luce calda (2700-3000 K) è quella del relax: perfetta per le gole luminose del soggiorno, per le nicchie e per la camera da letto. La luce naturale o neutra (4000 K) non altera i colori ed è ideale per le velette sopra il piano della cucina, per il bagno e per la zona studio. La luce fredda (5000-6500 K) in casa si usa pochissimo, quasi solo in garage e lavanderia, perché rende gli ambienti freddi e poco accoglienti.',
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
