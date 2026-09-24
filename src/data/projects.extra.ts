// Progetti recuperati dalle pagine 2-4 dell'indice "lavori eseguiti" del vecchio sito
// (controllo totale 2026-09-24): 23 schede non portate nel primo import.
// Descrizioni e "interventi" ricavati SOLO da dati reali: didascalie e tag della sorgente,
// oppure ciò che è visibile nelle foto quando la scheda non aveva testo.
type ExtraMeta = {
  slug: string;
  title: string;
  location: string | null;
  category: string;
  blurb: string;
  scope: string[];
  coverIndex?: number;
  coverName?: string;
};

export const extraMeta: ExtraMeta[] = [
  {
    slug: 'appartamento-milano-grande', title: 'Ristrutturazione appartamento, Milano', location: 'Milano', category: 'Appartamenti completi', coverIndex: 29,
    blurb: 'Ristrutturazione completa, dallo stato di fatto alla consegna: rimozione e rifacimento degli intonaci, controsoffitti, pavimento in gres porcellanato effetto legno, bagni con sanitari sospesi e lavabo a bacinella, cucina con piano a induzione. Durante le demolizioni è riaffiorato l’arco della porta in stile milanese, lasciato a vista.',
    scope: ['Rifacimento intonaci', 'Controsoffitti', 'Gres effetto legno', 'Sanitari sospesi', 'Arco a vista'],
  },
  {
    slug: 'appartamento-viale-jenner', title: 'Appartamento viale Jenner, Milano', location: 'Milano', category: 'Appartamenti completi', coverIndex: 28,
    blurb: 'Demolizioni e nuovi divisori, controsoffitti e condizionamento canalizzato, controtelai Scrigno per le porte scorrevoli, cabina armadio in cartongesso, bagno con rivestimenti Cesi e pavimento Mutina, parquet Bauwerk, porte Ferrero Legno e tinteggiatura bicolore.',
    scope: ['Condizionamento canalizzato', 'Controsoffitti', 'Parquet Bauwerk', 'Bagno Cesi e Mutina', 'Porte Ferrero Legno'],
  },
  {
    slug: 'ristrutturazione-bresso', title: 'Ristrutturazione, Bresso', location: 'Bresso (MI)', category: 'Appartamenti completi', coverIndex: 12,
    blurb: 'Bagno con vasca idromassaggio Glass e rivestimenti Mariner Glossy tortora, pavimenti Mariner 60x60 e parquet in rovere fumé, porta blindata e porte interne Ferrero Legno, nuova cucina con piano a induzione, controsoffitto in gesso con faretti incassati.',
    scope: ['Vasca idromassaggio', 'Rivestimenti Mariner', 'Parquet rovere fumé', 'Porte Ferrero Legno', 'Faretti incassati'],
  },
  {
    slug: 'appartamento-lambrate', title: 'Appartamento, Lambrate', location: 'Milano · Lambrate', category: 'Appartamenti completi', coverIndex: 1,
    blurb: 'Demolizioni, controsoffitto portante, pavimento in legno Bauwerk, nicchia ripostiglio, cucina, camera ragazzi e cabina armadio con porta scorrevole in vetro.',
    scope: ['Demolizioni', 'Controsoffitto portante', 'Parquet Bauwerk', 'Cabina armadio', 'Cucina'],
  },
  {
    slug: 'appartamento-senago', title: 'Appartamento, Senago', location: 'Senago (MI)', category: 'Appartamenti completi', coverIndex: 7,
    blurb: 'Bagni con rivestimenti effetto marmo, vasca freestanding e lavabo d’appoggio su mensola in legno, doccia in vetro e pavimenti in legno.',
    scope: ['Bagni effetto marmo', 'Vasca freestanding', 'Doccia in vetro', 'Pavimenti in legno'],
  },
  {
    slug: 'appartamento-milano-bocconi', title: 'Appartamento, Milano (zona Bocconi)', location: 'Milano', category: 'Appartamenti completi', coverIndex: 16,
    blurb: 'Ambienti luminosi con pavimento in legno, cucina aperta sulla zona giorno, camera padronale e bagno con doccia.',
    scope: ['Pavimento in legno', 'Cucina', 'Camera padronale', 'Bagno con doccia'],
  },
  {
    slug: 'appartamento-novate', title: 'Appartamento, Novate Milanese', location: 'Novate Milanese (MI)', category: 'Appartamenti completi', coverIndex: 13,
    blurb: 'Controtelaio per doppia porta scorrevole, livellina, doccia impermeabilizzata con seduta, vaso a terra filo muro, pavimento in legno e cucina.',
    scope: ['Porte scorrevoli', 'Doccia con seduta', 'Pavimento in legno', 'Cucina'],
  },
  {
    slug: 'mansarda-paderno', title: 'Mansarda, Paderno Dugnano', location: 'Paderno Dugnano (MI)', category: 'Appartamenti completi', coverIndex: 7,
    blurb: 'Recupero del sottotetto con opere in cartongesso e controsoffitti, finestre per tetti Velux e nuovo bagno sotto le falde.',
    scope: ['Cartongesso', 'Controsoffitti', 'Velux', 'Bagno'],
  },
  {
    slug: 'ristrutturazione-taverna', title: 'Ristrutturazione taverna', location: null, category: 'Appartamenti completi', coverIndex: 6,
    blurb: 'Taverna con riscaldamento a pavimento, bagno con doccia, parete attrezzata e zona pranzo.',
    scope: ['Riscaldamento a pavimento', 'Bagno con doccia', 'Parete attrezzata'],
  },

  {
    slug: 'ristrutturazione-villa', title: 'Ristrutturazione villa', location: null, category: 'Ville e case', coverIndex: 2,
    blurb: 'Soggiorno e zona giorno con pavimenti in gres porcellanato, cucina e bagni rinnovati.',
    scope: ['Soggiorno', 'Gres porcellanato', 'Cucina', 'Bagni'],
  },
  {
    slug: 'villa-bollate', title: 'Villa, Bollate', location: 'Bollate (MI)', category: 'Ville e case', coverIndex: 10,
    blurb: 'Bagni con rivestimenti a mosaico e lavabi d’appoggio, cucina, zona giorno e sottotetto con pavimento in legno.',
    scope: ['Bagni a mosaico', 'Cucina', 'Zona giorno', 'Sottotetto'],
  },
  {
    slug: 'ampliamento-villa-novate', title: 'Ampliamento villa, Novate', location: 'Novate Milanese (MI)', category: 'Ville e case', coverIndex: 14,
    blurb: 'Ampliamento della villa: scavi e fondazioni, strutture in cemento armato, murature e finitura delle facciate.',
    scope: ['Scavi e fondazioni', 'Cemento armato', 'Murature', 'Facciate'],
  },

  {
    slug: 'ristrutturazione-bagno', title: 'Ristrutturazione bagno', location: null, category: 'Bagni', coverIndex: 6,
    blurb: 'Bagno con doccia: nuovi rivestimenti, rubinetteria a incasso, mobile lavabo e sanitari.',
    scope: ['Doccia', 'Rivestimenti', 'Rubinetteria a incasso', 'Sanitari'],
  },
  {
    slug: 'bagno-bollate', title: 'Bagno, Bollate', location: 'Bollate (MI)', category: 'Bagni', coverIndex: 2,
    blurb: 'Bagno con rivestimenti in ceramica, doccia, termoarredo e sanitari.',
    scope: ['Rivestimenti in ceramica', 'Doccia', 'Sanitari'],
  },
  {
    slug: 'bagno-bollate-2', title: 'Ristrutturazione bagno, Bollate', location: 'Bollate (MI)', category: 'Bagni', coverIndex: 7,
    blurb: 'Dalle tracce degli impianti alla posa: grandi lastre grigie, lavabo d’appoggio su mensola in legno, doccia a filo pavimento, sanitari sospesi e vano lavatrice.',
    scope: ['Impianti', 'Grandi lastre', 'Doccia a filo', 'Sanitari sospesi'],
  },
  {
    slug: 'bagni-cormano', title: 'Bagni, Cormano', location: 'Cormano (MI)', category: 'Bagni', coverIndex: 4,
    blurb: 'Due bagni, uno con finestra e uno cieco: rivestimenti, piatto doccia, mobili sospesi e sanitari.',
    scope: ['Bagno con finestra', 'Bagno cieco', 'Mobili sospesi', 'Sanitari'],
  },
  {
    slug: 'bagno-settimo-milanese', title: 'Bagno, Settimo Milanese', location: 'Settimo Milanese (MI)', category: 'Bagni', coverIndex: 6,
    blurb: 'Rivestimenti effetto pietra, lavabo d’appoggio su top, doccia a filo con soffione e sanitari sospesi.',
    scope: ['Effetto pietra', 'Lavabo d’appoggio', 'Doccia a filo', 'Sanitari sospesi'],
  },
  {
    slug: 'bagno-taverna', title: 'Bagno in taverna', location: null, category: 'Bagni', coverIndex: 2,
    blurb: 'Rivestimenti effetto pietra, mobile con lavabo curvo, specchio e box doccia in vetro.',
    scope: ['Effetto pietra', 'Mobile lavabo', 'Box doccia'],
  },
  {
    slug: 'bagno-in-marmo', title: 'Bagno in marmo', location: null, category: 'Bagni', coverIndex: 3,
    blurb: 'Bagno rivestito in marmo con doppio lavabo su top in marmo, decoro a parete e doccia.',
    scope: ['Marmo', 'Doppio lavabo', 'Doccia'],
  },
  {
    slug: 'bagno-moderno', title: 'Bagno moderno', location: null, category: 'Bagni', coverIndex: 1,
    blurb: 'Rivestimenti scuri abbinati all’effetto legno, mobile lavabo sospeso e sanitari sospesi.',
    scope: ['Rivestimenti scuri', 'Mobile sospeso', 'Sanitari sospesi'],
  },
  {
    slug: 'bagno-e-lavanderia', title: 'Bagno e lavanderia', location: null, category: 'Bagni', coverIndex: 1,
    blurb: 'Bagno con doccia e lavabo d’appoggio su mobile, più zona lavanderia con lavatoio e colonna attrezzata.',
    scope: ['Doccia', 'Lavabo d’appoggio', 'Lavanderia'],
  },
  {
    slug: 'bagno-in-muratura', title: 'Bagno con opere in muratura', location: null, category: 'Bagni', coverIndex: 1,
    blurb: 'Piano lavabo realizzato in muratura, nicchie e seduta in muratura, rivestimenti e sanitari sospesi.',
    scope: ['Piano lavabo in muratura', 'Nicchie', 'Sanitari sospesi'],
  },
  {
    slug: 'bagno-triangolare', title: 'Bagno con disegno triangolare', location: null, category: 'Bagni', coverIndex: 3,
    blurb: 'Rivestimento a disegno geometrico triangolare, box doccia in vetro e mobile lavabo.',
    scope: ['Disegno geometrico', 'Box doccia', 'Mobile lavabo'],
  },
];
