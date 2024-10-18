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
            'Glasgow Coma Scale 15'
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
        results: ['120/70 mmHg']
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
        results: ['Keine Auffälligkeiten']
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
            'Kein Stridor, keine groben Rasselgeräusche',
            'Vesikuläres Atemgeräusch'
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
        results: ['Abdomen weich, keine Druckschmerzen, keine Abwehrspannung']
    },
    {
        rubrik: 'Untersuchung',
        code: '2.10.',
        gewaehlt: 1,
        item: 'Untersuchung Urogenitalsystem',
        aerztlicheArbeitszeit: 2,
        behandlungszeit: 4,
        behandlungskosten: 2.6,
        results: ['Keine Auffälligkeiten']
    },
    {
        rubrik: 'Untersuchung',
        code: '2.11.',
        gewaehlt: 1,
        item: 'Rektale Untersuchung',
        aerztlicheArbeitszeit: 5,
        behandlungszeit: 5,
        behandlungskosten: 3.3,
        results: ['Normale Rektalbefunde, keine Auffälligkeiten']
    },
    {
        rubrik: 'Untersuchung',
        code: '2.12.',
        gewaehlt: 0,
        item: 'Lymphknotenstatus',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 3,
        behandlungskosten: 2,
        results: ['Keine tastbaren Lymphknotenvergrößerungen']
    },
    {
        rubrik: 'Untersuchung',
        code: '2.13.',
        gewaehlt: 1,
        item: 'Inspektion der Haut',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 4,
        behandlungskosten: 2.6,
        results: ['Keine Auffälligkeiten']
    },
    {
        rubrik: 'Untersuchung',
        code: '2.14.',
        gewaehlt: 1,
        item: 'kleine Neurologische Untersuchung',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 4,
        behandlungskosten: 2.3,
        results: ['Normale Befunde']
    },
    {
        rubrik: 'Untersuchung',
        code: '2.15.',
        gewaehlt: 0,
        item: 'ausführliche neurologische Untersuchung',
        aerztlicheArbeitszeit: 6,
        behandlungszeit: 6,
        behandlungskosten: 4,
        results: ['Nicht erforderlich']
    },
    {
        rubrik: 'Untersuchung',
        code: '2.16.',
        gewaehlt: 0,
        item: 'Schellongtest',
        aerztlicheArbeitszeit: 15,
        behandlungszeit: 15,
        behandlungskosten: 10,
        results: ['Nicht durchgeführt']
    }
];
