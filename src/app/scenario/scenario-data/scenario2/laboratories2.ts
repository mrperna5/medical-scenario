import { MedicalOption } from "../medical-option.model";

export const laboratories2: MedicalOption[] = [
    {
        rubrik: 'Labordiagnostik',
        code: '3.1.',
        gewaehlt: 1,
        item: 'BB',
        aerztlicheArbeitszeit: 0,
        behandlungszeit: 0.5,
        behandlungskosten: 1.6,
        results: [
            'Leukozytose (14.500/µl), normozytäre Anämie (Hb 9.8 g/dl)'
        ]
    },
    {
        rubrik: 'Labordiagnostik',
        code: '3.2.',
        gewaehlt: 1,
        item: 'Diff. BB',
        aerztlicheArbeitszeit: 0,
        behandlungszeit: 0.5,
        behandlungskosten: 1.0,
        results: [
            'Keine Blasten, leicht erhöhte Eosinophilenwerte'
        ]
    },
    {
        rubrik: 'Labordiagnostik',
        code: '3.3.',
        gewaehlt: 1,
        item: 'Na+, K+, Glukose',
        aerztlicheArbeitszeit: 0,
        behandlungszeit: 0.5,
        behandlungskosten: 2.8,
        results: [
            'Hyponatriämie, Hypoglykämie (Glukose 45 mg/dl)'
        ]
    }
];
