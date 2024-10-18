import { MedicalOption } from "../medical-option.model";

export const examinations2: MedicalOption[] = [
    {
        rubrik: 'Untersuchung',
        code: '2.1.',
        gewaehlt: 1,
        item: 'AZ & EZ',
        aerztlicheArbeitszeit: 1,
        behandlungszeit: 1,
        behandlungskosten: 0.8,
        results: ['Patient in stark reduziertem AZ, normaler EZ (175cm, 90kg)']
    },
    {
        rubrik: 'Untersuchung',
        code: '2.2.',
        gewaehlt: 1,
        item: 'Orientierung & GCS',
        aerztlicheArbeitszeit: 2,
        behandlungszeit: 2,
        behandlungskosten: 1.4,
        results: [
            'Patient ist orientierungslos, reagiert auf Schmerzreize',
            'Glasgow Coma Scale 9'
        ]
    },
    {
        rubrik: 'Untersuchung',
        code: '2.3.',
        gewaehlt: 1,
        item: 'Temperatur',
        aerztlicheArbeitszeit: 0,
        behandlungszeit: 0.5,
        behandlungskosten: 0.5,
        results: ['Körpertemperatur 38.7°C']
    }
];
