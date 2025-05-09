import { MedicalOption } from "../medical-option.model";

export const examinations11: MedicalOption[] = [
  {
    rubrik: 'Untersuchung',
    code: '2.1.',
    gewaehlt: 1,
    item: 'AZ & EZ',
    aerztlicheArbeitszeit: 1,
    behandlungszeit: 1,
    behandlungskosten: 0.7,
    results: ['Patientin in leicht reduziertem AZ',
      'Patientin mit übergewichtigem EZ: 168cm, 80 kg KG, BMI 28,3 kg/m2 ']
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
      'Patientin ist zu Ort, Situation, Zeit und eigener Person orientiert',
      'Glasgow Coma Scale 15',
      'Augen 				4/4',
      'Verbale Reaktion 		5/5',
      'Beste motorische Reaktion	6/6'

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
    results: ['39,2°C']
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
    results: ['Am rechten Arm gemessen: 101/61 mmHg']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.6.',
    gewaehlt: 1,
    item: 'Herzfrequenz',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 1,
    behandlungskosten: 0.3,
    results: ['102/min, regelmäßig']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.7.',
    gewaehlt: 0,
    item: 'Kradiale Untersuchung',
    aerztlicheArbeitszeit: 3,
    behandlungszeit: 3,
    behandlungskosten: 2,
    results: ['Puls kräftig, Herzfrequenz 102/min, regelmäßig, allerdings gelegentliche Extrasystolen',
      'Herztöne rein, allerdings Herztöne sehr leise',
      'Kein Herzgeräusch',
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
      'Keine Dyspnoe in Ruhe, keine Zyanose',
      'Lungenperkussion mit Normalbefund',
      'Beidseits vesikuläres Atemgeräusch ',
      'dorsal evtl. leichtes Giemen bds. '
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
      'Rektale digitale Untersuchung wird nicht durchgeführt'
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
      'Harnblase nicht tastbar'
      ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.11.',
    gewaehlt: 1,
    item: 'Untersuchung des Bewegungsapparats',
    aerztlicheArbeitszeit: 5,
    behandlungszeit: 5,
    behandlungskosten: 3.3,
    results: ['Kein Klopfschmerz über der WS auslösbar, Schmerzen der HWS v.a. bei Bewegung, keine Rötung der Haut erkennbar',
      'Rechte Hüfte und Knie: Bewegung nur leicht eingeschränkt',
      'Unauffällige, gut verheilte Narbenverhältnisse im Bereich der Knie bds. (bei Z.n. Knie-TEP bds.) '
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
    results: ['Nuchal kleine LKs tastbar, nicht schmerzhaft',
      'Am restlichen Hals keine LK tastbar',
      'Axillär keine LK tastbar',
      'Inguinal rechts 2 LK mit ca. 1,5 cm Durchmesser, kein Druckschmerz'
    ]
  },
  {
    rubrik: 'Untersuchung',
    code: '2.13.',
    gewaehlt: 1,
    item: 'Inspektion der Haut',
    aerztlicheArbeitszeit: 5,
    behandlungszeit: 10,
    behandlungskosten: 3.5,
    results: ['Kein Ikterus',
      'Keine typischen Endokarditis-Hautzeichen',
      'Haut eher trocken',
      'Keine akrale Zyanose',
      'Keine lokalen Rötungen oder Exantheme'
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
    results: ['Patientin ist orientiert',
      'Pupillen isokor',
      'Kein Meningismus (wobei die Beweglichkeit der HWS eingeschränkt ist, nicht gut beurteilbar) ',
      'MER seitengleich lebhaft auslösbar',
      'Orientierend Kraft seitengleich in allen Extremitäten',
      'HWS Beweglichkeit aufgrund der Schmerzen eingeschränkt'
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
    results: ['Patientin ist vollständig zu Ort, Zeit, eigener Person und Situation orientiert',
      'Kein Meningismus, Brudszinski- und Kernig-Zeichen negativ, Lasegue rechts bei 45° positiv',
      'Hirnnerven II-XII o.p.B. ',
      'Pupillen isokor, LR positiv beidseits (ind./dir.) ',
      'MER und Kraft beidseits seitengleich ',
      'Babinski beidseits nicht auslösbar',
      'Hypästhesie Dermatom L5 und S1 rechts, keine weiteren Sensibilitätsstörungen',
      'Fazit: Insg. kein harter H.a. Meningitis, bei bestehendem Verdacht LP erwägen'
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
    results: ['Die Patientin verweigert den Test, da das Stehen sie doch sehr anstrengt']
  }
];
