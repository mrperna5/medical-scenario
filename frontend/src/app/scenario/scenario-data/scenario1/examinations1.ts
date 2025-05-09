import { MedicalOption } from "../medical-option.model";

export const examinations1: MedicalOption[] = [
  {
    rubrik: 'Untersuchung',
    code: '2.1.',
    gewaehlt: 1,
    item: 'AZ & EZ',
    aerztlicheArbeitszeit: 1,
    behandlungszeit: 1,
    behandlungskosten: 0.7,
    results: ['Patient in reduziertem AZ, normaler EZ (178cm, 77kg)']
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
      'Patient ist zu Ort, Zeit und Person orientiert',
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
    results: ['39,5°C']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.4.',
    gewaehlt: 0,
    item: 'Temperatur (Rektal)',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 5,
    behandlungskosten: 3.3,
    results: ['39,6°C']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.5.',
    gewaehlt: 1,
    item: 'Blutdruck',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 1,
    behandlungskosten: 0.3,
    results: ['Am rechten Arm gemessen 120/70 mmHg']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.6.',
    gewaehlt: 1,
    item: 'Herzfrequenz',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 1,
    behandlungskosten: 0.3,
    results: ['88/min, regelmäßig']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.7.',
    gewaehlt: 0,
    item: 'Kradiale Untersuchung',
    aerztlicheArbeitszeit: 3,
    behandlungszeit: 3,
    behandlungskosten: 2,
    results: ['Puls kräftig, Herzfrequenz 88/min, regelmäßig',
      'Herztöne rein',
      'Kein Herzgeräusch',
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
      'Keine Dyspnoe, keine Zyanose, kein Husten',
      'Lungenperkussion mit Normalbefund',
      'Beidseits vesikuläres Atemgeräusch',
      'Beidseits keine Nebengeräusche'

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
      'Kein Psoasschmerz'
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
      'Patient trägt einen Condom-Katheter',
      'Im Kathererbeutel viel „Gries“, keine Makrohämaturie',
      'Inguinalregion und Genitalien inspektorisch unauffällig'
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
    results: ['Anus ispektorisch unauffällig',
      'Normal gefärbter Stuhl am Fingerling',
      'Kein rektaler Tumor tastbar',
      'Test auf okkultes Blut negativ'
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
    results: ['Submandibulär beidseits kleiner LK tastbar, nicht druckschmerzhaft, gut verschieblich',
      'Am restlichen Hals keine LK tastbar',
      'Axillär keine LK tastbar',
      'Inguinal beidseits je 2 LK mit ca. 1 cm Durchmesser, nicht druckschmerzhaft, tastbar'
    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.13.',
    gewaehlt: 1,
    item: 'Inspektion der Haut',
    aerztlicheArbeitszeit: 3,
    behandlungszeit: 4,
    behandlungskosten: 2.6,
    results: ['Kein Ikterus',
      'Keine Exantheme',
      'Keine Endokarditis-Hautzeichen',
      'Haut eher trocken',
      'Keine akrale Zyanose'
    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.14.',
    gewaehlt: 1,
    item: 'kleine Neurologische Untersuchung',
    aerztlicheArbeitszeit: 3,
    behandlungszeit: 4,
    behandlungskosten: 2.3,
    results: ['Patient ist orientiert',
      'Pupillen isokor',
      'Kein Meningismus',
      'MER beidseits nicht auslösbar',
      'Babinski beidseits auslösbar'
    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.15.',
    gewaehlt: 0,
    item: 'ausführliche neurologische Untersuchung',
    aerztlicheArbeitszeit: 6,
    behandlungszeit: 6,
    behandlungskosten: 4,
    results: ['Patient orientiert, kein Meningismus',
      'Hirnnerven II-XII o.B.',
      'Pupillen isokor, LR positiv beidseits (ind./dir.)',
      'MER beidseits nicht auslösbar',
      'Babinski beidseits auslösbar',
      'Restsensibilität an beiden Armen vorhanden',
      'Hände mit spastischer Lähmung und beginnenden sekundären Veränderungen'
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
    results: ['Nicht verwertbar, da Patient nur aufgesetzt werden kann, aber nicht stehen kann']
  }
];
