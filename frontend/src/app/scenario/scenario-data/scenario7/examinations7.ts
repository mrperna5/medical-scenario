import { MedicalOption } from "../medical-option.model";

export const examinations7: MedicalOption[] = [
  {
    rubrik: 'Untersuchung',
    code: '2.1.',
    gewaehlt: 1,
    item: 'AZ & EZ',
    aerztlicheArbeitszeit: 1,
    behandlungszeit: 1,
    behandlungskosten: 0.7,
    results: ['Patient in leicht reduziertem AZ',
      'Patient mit übergewichtigem EZ: 168cm, 80 kg KG, BMI 28,3 kg/m2'
    ]
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
    results: ['38,4°C']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.4.',
    gewaehlt: 0,
    item: 'Temperatur (Rektal)',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 5,
    behandlungskosten: 3.3,
    results: ['38,6°C']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.5.',
    gewaehlt: 1,
    item: 'Blutdruck',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 1,
    behandlungskosten: 0.3,
    results: ['Am rechten Arm gemessen 110/80 mmHg']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.6.',
    gewaehlt: 1,
    item: 'Herzfrequenz',
    aerztlicheArbeitszeit: 0,
    behandlungszeit: 1,
    behandlungskosten: 0.3,
    results: ['98/min, regelmäßig']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.7.',
    gewaehlt: 0,
    item: 'Kradiale Untersuchung',
    aerztlicheArbeitszeit: 3,
    behandlungszeit: 3,
    behandlungskosten: 2,
    results: ['Puls kräftig, Herzfrequenz 98/min, regelmäßig',
      'Herztöne rein',
      'Kein Herzgeräusch',
      'Keine epigastrische Pulsationen',
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
      'Beidseits keine Nebengeräusche']
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
      'Rektale digitale Untersuchung unauffällig']
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
      'Inguinalregion mit intertriginöser Pigmentvermehrung',
      'Genitalien inspektorisch unauffällig ']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.11.',
    gewaehlt: 1,
    item: 'Untersuchung des Bewegungsapparats',
    aerztlicheArbeitszeit: 5,
    behandlungszeit: 5,
    behandlungskosten: 3.3,
    results: ['Inspektorisch Schwellung des gesamten rechten Oberschenkels, jedoch keine Rötung oder Überwärmung',
      'Klopfschmerz bzw. Druckschmerz über der LWS, beiden ISG, der rechten Hüfte, der Muskulatur des gesamten rechten Oberschenkels',
      'Rechte Hüfte und Knie: passive Bewegung sehr schmerzhaft',
      'Keine Arthritis-typischen Befunde im Bereich der Hände und Füße']
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
      'Inguinal beidseits je 2 LK mit ca. 2 cm Durchmesser',
      'da gesamte Hüft- und Oberschenkelregion druckschmerzhaft, kann die Druckschmerzhaftigkeit der LK nicht erhoben werden'
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
      'keine lokalen Rötungen oder Exantheme']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.14.',
    gewaehlt: 1,
    item: 'kleine Neurologische Untersuchung',
    aerztlicheArbeitszeit: 3,
    behandlungszeit: 5,
    behandlungskosten: 2.3,
    results: ['Patient ist orientiert',
      'Pupillen isokor',
      'Kein Meningismus',
      'MER seitengleich lebhaft auslösbar',
      'Babinski beidseits negativ',
      'Orientierend Kraft seitengleich in allen Extremitäten',
      'Bei Schmerzen aber nur kurzfristiger Stand auf rechter Extremität möglich']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.15.',
    gewaehlt: 0,
    item: 'ausführliche neurologische Untersuchung',
    aerztlicheArbeitszeit: 6,
    behandlungszeit: 6,
    behandlungskosten: 4,
    results: ['Patient ist vollständig zu Ort, Zeit, eigener Person und Situation orientiert',
      'Kein Meningismus, Brudszinski- und Kernig-Zeichen negativ, Lasegue rechts bei 45° positiv',
      'Hirnnerven II-XII o.p.B.',
      'Pupillen isokor, LR positiv beidseits (ind./dir.)',
      'MER und Kraft beidseits seitengleich ',
      'Babinski beidseits nicht auslösbar',
      'Hypästhesie Dermatom L5 und S1 rechts, keine weiteren Sensibilitätsstörungen']
  },
  {
    rubrik: 'Untersuchung',
    code: '2.16.',
    gewaehlt: 0,
    item: 'Schellongtest',
    aerztlicheArbeitszeit: 15,
    behandlungszeit: 15,
    behandlungskosten: 10,
    results: ['Patient verweigert nach 1 Minute Stehen bei starken Schmerzen in der rechten Hüfte die Fortführung des Tests']
  }
];
