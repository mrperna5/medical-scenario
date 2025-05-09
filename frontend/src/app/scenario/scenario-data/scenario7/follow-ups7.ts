import { MedicalOption } from "../medical-option.model";

export const followups7: MedicalOption[] = [
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.1.',
    gewaehlt: 0,
    item: 'Blutkultur, 1 Paar',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 3,
    behandlungskosten: 62.7,
    results: ['Blutkultur nach 48h steril',
      'Bebrütung wird fortgesetzt']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.2.',
    gewaehlt: 0,
    item: 'Blutkulturen, 2 Flaschen',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 6,
    behandlungskosten: 125,
    results: ['Blutkulturen nach 48h steril',
      'werden weiter bebrütet']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.3.',
    gewaehlt: 1,
    item: 'RF und ANA Titer',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 2,
    behandlungskosten: 22,
    results: ['RF negativ',
      'ANA Titer <1:100 im NB']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.4.',
    gewaehlt: 1,
    item: 'Urinkultur (Urikult)',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 5,
    behandlungskosten: 77,
    results: [' Gramfärbung ohne Nachweis von Bakterienmorphologien',
      'Urikult wird bebrütet, Ergebnis noch ausstehend']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.5.',
    gewaehlt: 1,
    item: 'Lumbalpunktion',
    aerztlicheArbeitszeit: 30,
    behandlungszeit: 15,
    behandlungskosten: 100,
    results: ['Gramfärbung Liquor',
      'Keine Leukozyten',
      'Keine Bakterienmorphologien',
      'Zellzahl (Zytologie)',
      '2 Zellen/µL, 80% Lymphozyten',
      'Liquorkultur',
      'noch ausstehend',
      'Klinisch-chemische Untersuchung',
      'Eiweiss, Glukose, Laktat allesamt im NB']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.6.',
    gewaehlt: 0,
    item: 'Borrelien Serologie',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 3,
    behandlungskosten: 50,
    results: ['ELISA',
      'IgG positiv',
      'IgM negativ',
      'Westernblot: Ergebnisse noch ausstehend'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.7.',
    gewaehlt: 0,
    item: 'Anforderung alter Arztbriefe',
    aerztlicheArbeitszeit: 30,
    behandlungszeit: 0,
    behandlungskosten: 30,
    results: ['Nachdem Sie dreimal die Hausarztpraxis des Patienten angerufen haben, erbarmt sich die Sprechstundenhilfe und faxt Ihnen eine schlecht leserliche Kopie eines chirurgischen Entlassbriefes von 1971',
      'Hier wird neben der Behandlung der komplizierten Becken- und Oberschenkelfraktur eine „Wundheilungsstörung“ oberhalb des rechten Knies erwähnt. Der Wundabstrich ergab kulturell den Nachweis von S. aureus, Penicillin sensibel. Die Wunde heilt erst nach Entfernung des Osteosynthesematerials unter einer antibiotischen Therapie mit Ampicillin i.v. ab.'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.8.',
    gewaehlt: 0,
    item: 'Malaria Test',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 5,
    behandlungskosten: 49,
    results: ['Ausstrich und dicker Tropfen sind für Plasmodien negativ',
      'Malaria-Quick-Test ist ebenfalls negativ'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.9.',
    gewaehlt: 0,
    item: 'Röntgen Thorax',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 15,
    behandlungskosten: 50,
    results: ['Bettlunge im Liegen:',
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
    aerztlicheArbeitszeit: 20,
    behandlungszeit: 30,
    behandlungskosten: 50,
    results: ['Leberparenchymschaden (V.a. Steatosis hepatitis)',
      'Normalbefunde für Gallenblase und Gallenwege',
      'Keine Splenomegalie',
      'Beide Nieren normal groß, Rucksackzyste rechts, keine Konkremente, kein Harnstau, Harnblase entleert',
      'Nebennieren beidseits schemenhaft, soweit unauffällig',
      'Keine freie Flüssigkeit intraabdominell',
      'Keine pathologischen LK abgrenzbar',
      'Kein infektiöser Fokus intraabdominell abgrenzbar']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.11.',
    gewaehlt: 1,
    item: 'Echokardiographie (TTE)',
    aerztlicheArbeitszeit: 30,
    behandlungszeit: 30,
    behandlungskosten: 80,
    results: ['Normale Pumpfunktion',
      'Keine regionalen Wandbewegungsstörungnen',
      'Mittelgradige Mitralinsuffizienz, ansonsten keine Klappenvitien',
      'Kein Perikarderguss',
      'Transthorakal keine Vegetationen darstellbar']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.12.',
    gewaehlt: 0,
    item: 'Röntgen rechts Hüfte in 2 Ebenen',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 15,
    behandlungskosten: 80,
    results: ['Zustand nach komplexer Beckenfraktur',
      'Keine frische Fraktur nachweisbar',
      'Keine Osteolysen, abgebildete Kortikalis regelrecht',
      'Ausgeprägte Coxarthrose rechts',
      'Keine arthritistypischen Veränderungen'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.13.',
    gewaehlt: 0,
    item: 'Röntgen rechtes Knie in 2 Ebenen',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 15,
    behandlungskosten: 80,
    results: ['Zeichen einer medial betonten Gonarthrose',
      'Keine arthritistypischen Veränderungen',
      'Keine Fraktur der miterfassten Knochen',
      'Kranial der ehemaligen Epiphysenfuge zeigt sich die Kortikalis des Femurs zum "Markraum auffallend unregelmäßig"',
      'Keine Osteolysen der miterfassten Knochen']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.14.',
    gewaehlt: 0,
    item: 'CT Becken und OS mit KM',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 120,
    behandlungskosten: 300,
    results: ['Ödematöse Veränderung des M. quadrizeps rechts und der Subcutis mit p.m. Übergang mittleres zu distalem Femurdrittel',
      'Im mittleren und distalen Femurdrittel zeigt sich eine KM-aufnehmende Weichteilformation die nahezu den gesamten Markraum ausfüllt',
      'Keine Arthritis der angrenzenden Gelenke',
      'Ausgeprägte Cox- und Gonarthrose'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.15.',
    gewaehlt: 0,
    item: 'Skelett-Szintigraphie',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 180,
    behandlungskosten: 300,
    results: ['In 3-Phasen-Technik',
      'Perfusionsaufnahme',
      'Hyperämie im lateralen OS rechts',
      'Frühstatische Ganzkörperaufnahme',
      'Deutliche Mehrspeicherung des mittleren und distalen Femurschaftes rechts',
      'Mineralisationsphase',
      'Deutliche Mehrspeicherung des mittleren und distalen Femurschaftes rechts']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.16.',
    gewaehlt: 1,
    item: 'Ganzkörper F-18-FDG PET',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 120,
    behandlungskosten: 1200,
    results: ['Indikation laut Anforderung: unklares Fieber',
      'Aufnahmen vom Scheitel bis zur Leiste',
      'Physiologische Glukose-Utilisation des abgebildeten Ganzkörpers',
      'Kein Hinweis für einen infektiösen Fokus'

    ]
  }
];
