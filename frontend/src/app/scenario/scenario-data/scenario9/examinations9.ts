import { MedicalOption } from "../medical-option.model";

export const examinations9: MedicalOption[] = [
  {
    rubrik: 'Untersuchung',
    code: '2.1.',
    gewaehlt: 1,
    item: 'AZ & EZ',
    aerztlicheArbeitszeit: 1,
    behandlungszeit: 1,
    behandlungskosten: 0.7,
    results: ['Patient in reduziertem AZ, normaler EZ (186cm, 84kg)']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.2.',
    gewaehlt: 1,
    item: 'Orientierung & GCS',
    aerztlicheArbeitszeit: 2,
    behandlungszeit: 2,
    behandlungskosten: 1.3,
    results: [
      'Patient ist zu Ort, Zeit und Person und Situation voll orientiert',
      'Glasgow Coma Scale 15 (Augen 4/4, Verbale Reaktion 5/5, Beste motorische Reaktion 6/6)'
    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.3.',
    gewaehlt: 1,
    item: 'Temperatur (Ohr)',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 1,
    behandlungskosten: 0.7,
    results: ['39,0°C']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.4.',
    gewaehlt: 0,
    item: 'Temperatur (Rektal)',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 5,
    behandlungskosten: 3.3,
    results: ['39,4°C']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.5.',
    gewaehlt: 1,
    item: 'Blutdruck',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 1,
    behandlungskosten: 0.3,
    results: ['Am rechten Arm gemessen 140/80 mmHg']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.6.',
    gewaehlt: 1,
    item: 'Herzfrequenz',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 1,
    behandlungskosten: 0.3,
    results: ['130/min, regelmäßig']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.7.',
    gewaehlt: 0,
    item: 'Kardiale Untersuchung',
    aerztlicheArbeitszeit: 3,
    behandlungszeit: 3,
    behandlungskosten: 2,
    results: ['Puls kräftig, Herzfrequenz 130/min, regelmäßig',
      'Herztöne rein',
      '2/6 Systolikum mit p.m. über ERB',
      'Diskrete epigastrische Pulsationen',
      'Keine peripheren Ödeme',
      'Keine Halsvenenstauung'
    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.8.',
    gewaehlt: 1,
    item: 'Pulmonale Untersuchung',
    aerztlicheArbeitszeit: 3,
    behandlungszeit: 3,
    behandlungskosten: 2,
    results: [
      'Thoraxinspektion unauffällig',
      'Keine Ruhedyspnoe, keine Zyanose',
      'Atemfrequenz 18/min',
      'Immer wieder trockener Husten',
      'Lungenperkussion mit Normalbefund',
      'Beidseits apikal vesikuläres Atemgeräusch',
      'Beidseits basal inspiratorisches feinblasiges Entfaltungsknistern'

    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.9.',
    gewaehlt: 1,
    item: 'Abdominelle Untersuchung',
    aerztlicheArbeitszeit: 3,
    behandlungszeit: 3,
    behandlungskosten: 2,
    results: ['Inspektion des Abdomens unauffällig',
      'Darmgeräusche normal, nicht hochgestellt',
      'Bauchdecken weich, kein Peritonismus',
      'Kein Druckschmerz',
      'Keine Resistenz tastbar',
      'McBurney etc. negativ',
      'Kein Psoasschmerz',
      'Leber und Milz nicht tastbar'
    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.10.',
    gewaehlt: 1,
    item: 'Untersuchung Urogenitalsystem',
    aerztlicheArbeitszeit: 2,
    behandlungszeit: 4,
    behandlungskosten: 2.6,
    results: ['Beide Nierenlager ohne Klopfschmerz',
      'Harnblase nicht tastbar',
      'Genitalien inspektorisch unauffällig, keine genitalen Ulcerationen'
    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.11.',
    gewaehlt: 1,
    item: 'Rektale Untersuchung',
    aerztlicheArbeitszeit: 5,
    behandlungszeit: 5,
    behandlungskosten: 3.3,
    results: ['Inspektion unauffällig',
      'Dunkler Stuhl am Fingerling',
      'Kein rektaler Tumor tastbar',
      'Test auf okkultes Blut schwach positiv'
    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.12.',
    gewaehlt: 0,
    item: 'Lymphknotenstatus',
    aerztlicheArbeitszeit: 3,
    behandlungszeit: 3,
    behandlungskosten: 2,
    results: [
      'Submandibulär beidseits kleiner LK tastbar, nicht druckschmerzhaft, gut verschieblich',
      'Am restlichen Hals keine LK tastbar',
      'Axillär keine LK tastbar',
      'Inguinal beidseits je 2 LK mit ca. 1 cm Durchmesser, nicht druckschmerzhaft, tastbar '

    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.13.',
    gewaehlt: 1,
    item: 'Haut und Schleimhäute',
    aerztlicheArbeitszeit: 5,
    behandlungszeit: 10,
    behandlungskosten: 3.5,
    results: ['Kein Ikterus, keine Zyanose, Haut trocken',
      'Unter dem Nagel Digitus II und V der linken Hand Splinterhämorrhagien',
      'laut Patient seien ihm diese Läsionen schon vor Wochen erstmalig aufgefallen',
      'Vereinzelt livide Maculae an den Extremitäten',
      'ca. jeweils 5 mm Durchmesser',
      'minimal über das Hautniveau erhaben',
      '2-3 Läsionen pro Extremität',
      'An der Uvula punktuelle Einblutung, ansonsten enorale Schleimhäute unauffällig'

    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.14.',
    gewaehlt: 1,
    item: 'kleine Neurologische Untersuchung',
    aerztlicheArbeitszeit: 3,
    behandlungszeit: 5,
    behandlungskosten: 2.3,
    results: ['Patient ist vollständig zur eigenen Person, Ort,  Zeit, und zur Situation orientiert',
      'Pupillen isokor, Lichtreaktion direkt und indirekt beidseits auslöbar',
      'Kein Meningismus',
      'MER seitengleich, Babinski beidseits negativ',
      'Keine Fallneigung',
      'Keine Paresen oder Muskelatrophien'

    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.15.',
    gewaehlt: 0,
    item: 'Gelenkstatus',
    aerztlicheArbeitszeit: 6,
    behandlungszeit: 6,
    behandlungskosten: 4,
    results: ['Beide Sprunggelenksregionen deutlich geschwollen und druckschmerzhaft, aber kein Nachweis von Ödemen',
      'Beidseits V.a. geringen Erguss des Kniegelenks',
      'Ansonsten keine arthritisch veränderten peripheren Gelenke erhebbar',
      'Livide Hauteffloreszenz über dem Fingergrundgelenk DIII der linken Hand, hier aber keine Gelenkschwellung tastbar. ',
      'Gaenselen Zeichen Hände und Füsse negativ',
      'Wirbelsäule nicht klopfschmerzhaft, regelrechte Wirbelsäulenbeweglichkeit'

    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.16.',
    gewaehlt: 0,
    item: 'Schellongtest',
    aerztlicheArbeitszeit: 15,
    behandlungszeit: 15,
    behandlungskosten: 10,
    results: ['Patient ist zu krank, verweigert nach 5 Minuten tapferer Bemühungen durch den PJ-Studenten jede weitere Untersuchung'
    ]
  }
];
