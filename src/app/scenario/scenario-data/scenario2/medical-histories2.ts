import { MedicalOption } from "../medical-option.model";

export const medicalHistories2: MedicalOption[] = [
    {
        rubrik: 'Anamnese',
        code: '1.1.',
        gewaehlt: 1,
        item: 'Aktuelle Beschwerden',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 3,
        behandlungskosten: 2.0,
        results: [
            'Seit zwei Tagen anhaltende Bauchschmerzen und Übelkeit',
            'Starkes Schwitzen, Müdigkeit',
            'Der Patient berichtet über eine kürzliche Hyperglykämie (Blutzucker über 400 mg/dl)'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.2.',
        gewaehlt: 1,
        item: 'Vorerkrankungen',
        aerztlicheArbeitszeit: 2,
        behandlungszeit: 2,
        behandlungskosten: 1.5,
        results: [
            'Diabetes Typ 2 seit 15 Jahren',
            'Leichte arterielle Hypertonie'
        ]
    }
];
