import { MedicalOption } from "../medical-option.model";

export const followups11: MedicalOption[] = [
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.1.',
    gewaehlt: 0,
    item: 'Blutkultur, 1 Paar',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 3,
    behandlungskosten: 62.7,
    results: ['Blutkulturen nach 9h positiv',
      'Mikroskopie: Grampositive Haufenkokken',
      'PCR: S. aureus positiv'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.2.',
    gewaehlt: 0,
    item: 'Blutkultur, 2 Paare',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 3,
    behandlungskosten: 125,
    results: ['Blutkulturen nach 9h positiv',
      'Mikroskopie: Grampositive Haufenkokken',
      'PCR: S. aureus positiv' ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.3.',
    gewaehlt: 1,
    item: 'RF und ANA-Titer',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 6,
    behandlungskosten: 80,
    results: ['RF negativ',
      'ANA Titer <1:100 im NB'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.4.',
    gewaehlt: 1,
    item: 'Urinkultur (Urikult)',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 5,
    behandlungskosten: 77,
    results: ['Gramfärbung ohne Nachweis von Bakterienmorphologien',
      'Urinkultur bislang negativ, wird aber noch, finales Ergebnis noch ausstehend'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.5.',
    gewaehlt: 1,
    item: 'Lumbalpunktion',
    aerztlicheArbeitszeit: 30,
    behandlungszeit: 15,
    behandlungskosten: 50,
    results: ['Patientin: „Muss das wirklich sein?“ ',
      'Gramfärbung Liquor',
      'Keine Leukozyten',
      'Keine Bakterienmorphologien',
      'Zellzahl (Zytologie) ',
      '1 Zelle/µL, 100% Lymphozyten',
      'Liquorkultur',
      'noch ausstehend',
      'Klinisch-chemische Untersuchung',
      'Eiweiss, Glukose, Laktat allesamt im NB'
      ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.6.',
    gewaehlt: 0,
    item: 'Borrelien Serologie',
    aerztlicheArbeitszeit: 15,
    behandlungszeit: 15,
    behandlungskosten: 80,
    results: ['ELISA',
      'IgG negativ',
      'IgM negativ',
      'Westernblot',
      'Nicht durchgeführt bei negativem ELISA'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.7.',
    gewaehlt: 0,
    item: 'HIV Test',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 2,
    behandlungskosten: 20,
    results: ['HIV/p24 Antigen Test: nicht reaktiv'

    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.8.',
    gewaehlt: 0,
    item: 'SARS-CoV-2 Abstrich',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 5,
    behandlungskosten: 40,
    results: ['PCR Schnelltest: negativ']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.9.',
    gewaehlt: 0,
    item: 'Röntgen Thorax',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 15,
    behandlungskosten: 50,
    results: ['Bettlunge im Liegen: ',
      'Herzschatten gering über der Norm',
      'Kein Infiltrat',
      'Keine Stauung',
      'Keine Ergüsse',
      'Kein Pneumothorax'
      ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.10.',
    gewaehlt: 1,
    item: 'Abdomensonographie',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 15,
    behandlungskosten: 50,
    results: ['Leberparenchymschaden (V.a. Steatosis hepatitis) ',
      'Normalbefunde für Gallenblase und Gallenwege',
      'Keine Splenomegalie',
      'Beide Nieren normal groß, keine Konkremente, kein Harnstau, Harnblase entleert',
      'Nebennieren nicht darstellbar',
      'Etwas freie Flüssigkeit im Douglasraum',
      'Keine pathologischen LK abgrenzbar',
      'Kein infektiöser Fokus intraabdominell abgrenzbar'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.11.',
    gewaehlt: 1,
    item: 'Echokardiographie (TTE)',
    aerztlicheArbeitszeit: 20,
    behandlungszeit: 15,
    behandlungskosten: 100,
    results: ['Normale systolische Funktion (EF 62%) des normdimensionierten und –konfigurierten linken Ventrikels',
      'keine eindeutigen regionalen Wandbewegungsstörungen',
      'Linkes Atrium und rechte Herzhöhlen normdimensioniert. RV-Kontraktilität erhalten. Hinweis auf diastolische Dysfunktion',
      'Leichtgradige Mitral- und Trikuspidalklappeninsuffizienz'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.12.',
    gewaehlt: 0,
    item: 'Echokardiographie (TEE)',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 30,
    behandlungskosten: 150,
    results: ['Visuell normale systolische linksventrikuläre Funktion. ',
      'Mitralklappe leicht sklerosiert (v.a. am PML) mit leichtgradiger Insuffizienz. Leichtgradige Trikuspidalklappeninsuffizienz. Kein relevantes Pulmonalklappenvitium. ',
      'Aortenklappe trikuspide angelegt, leicht sklerosiert mit adäquater Öffnungsbewegung und kompetent. Hier kein Hinweis einer Endokarditis'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.13.',
    gewaehlt: 0,
    item: 'Röntgen Wirbelsäule',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 10,
    behandlungskosten: 40,
    results: ['Osteochondrotische Veränderungen in den Segmenten LWK 4-SWK 1. ',
      'Ansonsten altersgemäßer Knochenstatus']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.14.',
    gewaehlt: 0,
    item: 'CT Thorax und Abdomen',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 120,
    behandlungskosten: 300,
    results: ['Dorsobasale Dystelektasen und Plattenatelektasen. ',
      'Keine pneumonietypischen Konsolidierungen. ',
      'Vorbehaltlich eingeschränkte Beurteilbarkeit bei Nativuntersuchung, unauffällige Darstellung des Abdomens ohne entzündliche Foci. ',
      'Osteochondrotische Veränderungen in den Segmenten LWK 4-SWK 1. Eindeutige Stigmata einer Spondylodiszitis finden sich nicht. ',
      'V.a. Psoasabszess rechts (2,3 x 1,2cm) '

    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.15.',
    gewaehlt: 0,
    item: 'Unfallchirurgisches Konsil',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 15,
    behandlungskosten: 150,
    results: ['Antibiotische Therapie weiter (bitte RS mit den Kollegen der Infektiologie &#x263A;)',
      'Je nach weiterer Diagnostik ggf. chirurgische Entlastung notwendig'

    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.16.',
    gewaehlt: 1,
    item: 'Ganzkörper-F-18-FDG PET/CT',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 120,
    behandlungskosten: 500,
    results: ['Nachweis eines Spondylodiszitis HWK ½, ',
      'zudem Psoasabszess rechts',
      'Arthritis Schultergelenk rechts',
      'Geringgradige Pneumonie links basal'

    ]
  }
];
