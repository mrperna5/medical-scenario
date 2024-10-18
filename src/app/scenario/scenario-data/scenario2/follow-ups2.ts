import { MedicalOption } from "../medical-option.model";

export const followups2: MedicalOption[] = [
    {
        rubrik: 'Weitere Diagnostik',
        code: '4.1.',
        gewaehlt: 0,
        item: 'Blutkultur, 1 Paar',
        aerztlicheArbeitszeit: 0,
        behandlungszeit: 3,
        behandlungskosten: 65.0,
        results: ['Ergebnisse ausstehend']
    },
    {
        rubrik: 'Weitere Diagnostik',
        code: '4.2.',
        gewaehlt: 0,
        item: 'Urinuntersuchung',
        aerztlicheArbeitszeit: 0,
        behandlungszeit: 2,
        behandlungskosten: 25.0,
        results: ['Verdacht auf Infekt']
    },
    {
        rubrik: 'Weitere Diagnostik',
        code: '4.3.',
        gewaehlt: 1,
        item: 'CT Abdomen',
        aerztlicheArbeitszeit: 0,
        behandlungszeit: 6,
        behandlungskosten: 150.0,
        results: ['Bauchraum unauffällig, keine Anzeichen auf Peritonitis']
    }
];
