import { MedicalOption } from "../medical-option.model";

export const followups1: MedicalOption[] = [
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.1.',
    gewaehlt: 0,
    item: 'Blutkultur, 1 Paar',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 3,
    behandlungskosten: 62.7,
    results: ['Blutkultur wird bebrütet, Ergebnis noch ausstehend']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.2.',
    gewaehlt: 0,
    item: 'Blutkultur, 1 aerobe Flasche',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 3,
    behandlungskosten: 31.3,
    results: ['Blutkultur wird bebrütet, Ergebnis noch ausstehend'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.3.',
    gewaehlt: 1,
    item: 'Blutkultur, 2 Paare',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 6,
    behandlungskosten: 125.3,
    results: ['Blutkulturen werden bebrütet, Ergebnis noch ausstehend'
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
    results: ['Urikult wird bebrütet, Ergebnis noch ausstehend']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.5.',
    gewaehlt: 1,
    item: 'Gramfärbung Urin',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 5,
    behandlungskosten: 6.3,
    results: ['Das Mikrobiologische Labor meldet sich telefonisch in der NA: Gramfärbung des Urin zeigt:',
      '+++ gramnegative Stäbchen',
      '+++ Leukozyten']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.6.',
    gewaehlt: 0,
    item: 'Gramfärbung Sputum',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 2,
    behandlungskosten: 6.3,
    results: ['Plattenepithelien  		+++',
      'Leukozyten			(+)',
      'Grampositive Kokken 	(+)'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.7.',
    gewaehlt: 0,
    item: 'Rachenabstrich',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 2,
    behandlungskosten: 121,
    results: ['Mikroskopie:',
      'Plattenepitelien  		+++',
      'Leukozyten			(+)',
      'Grampositive Kokken 	(+)',
      'Kulturergebnisse noch ausstehend'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.8.',
    gewaehlt: 0,
    item: 'Hautabstriche auf MRSA',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 5,
    behandlungskosten: 49,
    results: ['Abstrichkulturen angelegt, Ergebnis noch ausstehend']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.9.',
    gewaehlt: 0,
    item: 'Ausstrich auf Plasmodien',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 2,
    behandlungskosten: 14.2,
    results: ['Ausstrich auf Plasmodien ist negativ']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.10.',
    gewaehlt: 1,
    item: 'Röntgen Thorax',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 15,
    behandlungskosten: 50,
    results: ['Bettlunge im Liegen:',
      'Herzkonfiguration normal',
      'Keine Infiltrate abgrenzbar',
      'Keine Stauung',
      'Keine Ergüsse',
      'Kein Pneumothorax']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.11.',
    gewaehlt: 1,
    item: 'Abdomensonographie',
    aerztlicheArbeitszeit: 20,
    behandlungszeit: 30,
    behandlungskosten: 50,
    results: ['Normalbefunde für Leber, Gallenblase und Gallenwege',
      'Milz normal groß',
      'Beide Nieren normal groß, keine Konkremente, kein Harnstau, Harnblase entleert',
      'Keine freie Flüssigkeit intraabdominell',
      'Keine pathologischen LK abgrenzbar'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.12.',
    gewaehlt: 0,
    item: 'Ausscheidungsurogramm',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 60,
    behandlungskosten: 80,
    results: ['Der Radiologe fragt verärgert: „Muss das denn wirklich sein?“',
      'Kein Harnaufstau beidseits',
      'Keine Kelch- oder Ureterkonkremente',
      'Adäquate KM-Ausscheidung'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.13.',
    gewaehlt: 0,
    item: 'CT-Abdomen',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 120,
    behandlungskosten: 300,
    results: ['Alle intraabdominellen Organe morphologisch unauffällig',
      'Organperfusion normal',
      'Keine Abszessformationen',
      'Kein Aszites']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.14.',
    gewaehlt: 0,
    item: 'MRT-Nieren',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 120,
    behandlungskosten: 500,
    results: ['Beide Nieren MR-morphologisch unauffällig',
      'Kein Hinweis für eine Nierenarterienstenose'
    ]
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.15.',
    gewaehlt: 0,
    item: 'Granulozyten-Szintigraphie',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 300,
    behandlungskosten: 1500,
    results: ['Der Patient ist für 5 Stunden in der Abteilung für Nuklearmedizin verschollen',
      'Es zeigen sich Mehranreicherungen im Bereich beider Nieren, der Harnblase, der Gallenblase, der Nasennebenhöhlen und der Milz, die Interpretation der Ergebnisse fällt selbst den Nuklearmedizinern schwer']
  },
  {
    rubrik: 'Weitere Diagnostik',
    code: '4.16.',
    gewaehlt: 1,
    item: 'Neurologisches Konsil',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 30,
    behandlungskosten: 100,
    results: ['Bekanntes Krampfleiden',
      'Bekannter hoher Querschnitt C6',
      'Kein Hinweis für eine Meningitis',
      'Fortführung der Dauermedikation mit Ergenyl indiziert, Dosisanpassung nach Talspiegel empfehlenswert']
  }
];
