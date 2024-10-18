import { MedicalOption } from "../medical-option.model";

export const medicalHistories1: MedicalOption[] = [
    {
        rubrik: 'Anamnese',
        code: '1.1.',
        gewaehlt: 1,
        item: 'Aktuelle Beschwerden',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 3,
        behandlungskosten: 2,
        results: [
            'Am Vortag sei einmalig Fieber von 39°C gemessen worden',
            'Aktuell keine Schmerzen',
            'Vor Verständigung des NA sei es zu einer inneren Unruhe und Zittern am ganzen Körper gekommen',
            'Der Patient hat den Verdacht auf einen drohenden epileptischen Krampfanfall'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.2.',
        gewaehlt: 1,
        item: 'Bekannte Vorerkrankungen allgemein',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 3,
        behandlungskosten: 2,
        results: [
            'Seit 1995 Epilepsie bekannt, seit Einstellung auf Ergenyl (Valproinsäure) 1996 keine generalisierten Anfälle mehr',
            'Am 7.8.2000 Autounfall in Rumänien mit HWK 5/6 Luxationsfraktur, die am 11.8.2000 im Uniklinikum Regensburg operativ versorgt wurde',
            'Seither hoher Querschnitt (C6 abwärts)'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.3.',
        gewaehlt: 1,
        item: 'Infektionen in der Vorgeschichte',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 3,
        behandlungskosten: 2,
        results: [
            'Z. n. Intertrigo mit MRSA-Isolation',
            'MRSA in einem Nasenabstrich und im Urin (12/2000)',
            'Negativer Leistenabstrich vor 6 Wochen, Aufhebung der Isolationsmaßnahmen',
            'Seit der Querschnittslähmung 2 Harnwegsinfekte, jeweils mit oralen Antibiotika behandelt'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.4.',
        gewaehlt: 1,
        item: 'Voroperationen',
        aerztlicheArbeitszeit: 1,
        behandlungszeit: 1,
        behandlungskosten: 0.7,
        results: [
            'Operative Versorgung der HWK 5/6 Luxationsfraktur (8/2000)',
            'Keine weiteren Operationen in der Vorgeschichte'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.5.',
        gewaehlt: 1,
        item: 'Aktuelle Dauermedikation',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 3,
        behandlungskosten: 2,
        results: [
            'Methionin (Acimethin®) 500mg 2-2-2',
            'Trospiumchlorid (Spasmex®) 15mg 1-1-1',
            'Methenaminhippurat (Urotractan®) 1g 1-0-1',
            'Valproinsäure (Ergenyl® ret.) 300mg 1-0-1½'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.6.',
        gewaehlt: 1,
        item: 'Allergien',
        aerztlicheArbeitszeit: 2,
        behandlungszeit: 2,
        behandlungskosten: 1.3,
        results: [
            'Kontaktallergien auf Tulol und Kolophonium',
            'Fragliche Allergie auf Latex',
            'Keine Medikamentenallergien bekannt'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.7.',
        gewaehlt: 1,
        item: 'Vegetative Anamnese',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 3,
        behandlungskosten: 2,
        results: [
            'Körperliche Leistungsfähigkeit: normal',
            'Miktion durch Blasenmassage ohne Katheterisierung, trägt einen Condom-Katheter'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.8.',
        gewaehlt: 1,
        item: 'Kardiovaskuläre Risikofaktoren',
        aerztlicheArbeitszeit: 2,
        behandlungszeit: 2,
        behandlungskosten: 1.3,
        results: [
            'Kein Nikotinabusus',
            'Kein arterieller Hypertonus',
            'Keine Hyperlipidämie'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.9.',
        gewaehlt: 1,
        item: 'Soziale Anamnese',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 3,
        behandlungskosten: 2,
        results: [
            'Patient in Reha seit 12/00, zur Wohnungssuche auf Wochendausgang'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.10.',
        gewaehlt: 0,
        item: 'Reiseanamnese',
        aerztlicheArbeitszeit: 2,
        behandlungszeit: 2,
        behandlungskosten: 1.3,
        results: [
            'Verunfallt in Rumänien, seitdem keine weiteren Reisen'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.11.',
        gewaehlt: 1,
        item: 'Tierkontakt',
        aerztlicheArbeitszeit: 1,
        behandlungszeit: 1,
        behandlungskosten: 0.7,
        results: [
            'Keine Haustiere, kein Kontakt zu Gefahrstoffen'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.12.',
        gewaehlt: 1,
        item: 'Impfanamnese',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 3,
        behandlungskosten: 2,
        results: [
            'Alle Kinderimpfungen erfolgt, Impfpass nicht vorhanden'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.13.',
        gewaehlt: 0,
        item: 'Antibiotika letzte Woche',
        aerztlicheArbeitszeit: 1,
        behandlungszeit: 1,
        behandlungskosten: 0.7,
        results: [
            'Keine Antibiotikabehandlung in den letzten 7 Tagen'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.14.',
        gewaehlt: 0,
        item: 'Antibiotika letzte 3 Monate',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 3,
        behandlungskosten: 2,
        results: [
            'Zweimaliger Harnwegsinfekt in der Reha, Antibiotikatherapie, Name des Antibiotikums nicht erinnerlich'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.15.',
        gewaehlt: 0,
        item: 'Familienanamnese',
        aerztlicheArbeitszeit: 3,
        behandlungszeit: 3,
        behandlungskosten: 2,
        results: [
            'Keine relevanten Erkrankungen in der Familie'
        ]
    },
    {
        rubrik: 'Anamnese',
        code: '1.16.',
        gewaehlt: 0,
        item: 'Fremdanamnese Partnerin',
        aerztlicheArbeitszeit: 6,
        behandlungszeit: 6,
        behandlungskosten: 4,
        results: [
            'Partnerin sehr besorgt, möchte, dass der Patient sofort in die Reha zurückkehrt'
        ]
    }
];
