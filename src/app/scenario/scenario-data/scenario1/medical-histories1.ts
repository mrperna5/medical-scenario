import { MedicalOption } from "../../../option.model";

export const medicalHistories1: MedicalOption[] = [
    new MedicalOption('Anamnese', '1.1.', 1, 'Aktuelle Beschwerden', 3, 3, 2, 
        [
          'Am Vortag sei einmalig Fieber von 39°C gemessen worden',
          'Aktuell keine Schmerzen',
          'Vor Verständigung des NA sei es zu einer inneren Unruhe und Zittern am ganzen Körper gekommen',
          'Der Patient hat den Verdacht auf einen drohenden epileptischen Krampfanfall'
        ]
      ),
      new MedicalOption('Anamnese', '1.2.', 1, 'Bekannte Vorerkrankungen allgemein', 3, 3, 2, 
        [
          'Seit 1995 Epilepsie bekannt, seit Einstellung auf Ergenyl (Valproinsäure) 1996 keine generalisierten Anfälle mehr',
          'Am 7.8.2000 Autounfall in Rumänien mit HWK 5/6 Luxationsfraktur, die am 11.8.2000 im Uniklinikum Regensburg operativ versorgt wurde',
          'Seither hoher Querschnitt (C6 abwärts)'
        ]
      ),
      new MedicalOption('Anamnese', '1.3.', 1, 'Infektionen in der Vorgeschichte', 3, 3, 2, 
        [
          'Z. n. Intertrigo mit MRSA-Isolation',
          'MRSA in einem Nasenabstrich und im Urin (12/2000)',
          'Negativer Leistenabstrich vor 6 Wochen, Aufhebung der Isolationsmaßnahmen',
          'Seit der Querschnittslähmung 2 Harnwegsinfekte, jeweils mit oralen Antibiotika behandelt'
        ]
      ),
      new MedicalOption('Anamnese', '1.4.', 1, 'Voroperationen', 1, 1, 0.7, 
        [
          'Operative Versorgung der HWK 5/6 Luxationsfraktur (8/2000)',
          'Keine weiteren Operationen in der Vorgeschichte'
        ]
      ),
      new MedicalOption('Anamnese', '1.5.', 1, 'Aktuelle Dauermedikation', 3, 3, 2, 
        [
          'Methionin (Acimethin®) 500mg 2-2-2',
          'Trospiumchlorid (Spasmex®) 15mg 1-1-1',
          'Methenaminhippurat (Urotractan®) 1g 1-0-1',
          'Valproinsäure (Ergenyl® ret.) 300mg 1-0-1½'
        ]
      ),
      new MedicalOption('Anamnese', '1.6.', 1, 'Allergien', 2, 2, 1.3, 
        [
          'Kontaktallergien auf Tulol und Kolophonium',
          'Fragliche Allergie auf Latex',
          'Keine Medikamentenallergien bekannt'
        ]
      ),
      new MedicalOption('Anamnese', '1.7.', 1, 'Vegetative Anamnese', 3, 3, 2, 
        [
          'Körperliche Leistungsfähigkeit: normal',
          'Miktion durch Blasenmassage ohne Katheterisierung, trägt einen Condom-Katheter'
        ]
      ),
      new MedicalOption('Anamnese', '1.8.', 1, 'Kardiovaskuläre Risikofaktoren', 2, 2, 1.3, 
        [
          'Kein Nikotinabusus',
          'Kein arterieller Hypertonus',
          'Keine Hyperlipidämie'
        ]
      ),
      new MedicalOption('Anamnese', '1.9.', 1, 'Soziale Anamnese', 3, 3, 2, 
        [
          'Patient in Reha seit 12/00, zur Wohnungssuche auf Wochendausgang'
        ]
      ),
      new MedicalOption('Anamnese', '1.10.', 0, 'Reiseanamnese', 2, 2, 1.3, 
        [
          'Verunfallt in Rumänien, seitdem keine weiteren Reisen'
        ]
      ),
      new MedicalOption('Anamnese', '1.11.', 1, 'Tierkontakt', 1, 1, 0.7, 
        [
          'Keine Haustiere, kein Kontakt zu Gefahrstoffen'
        ]
      ),
      new MedicalOption('Anamnese', '1.12.', 1, 'Impfanamnese', 3, 3, 2, 
        [
          'Alle Kinderimpfungen erfolgt, Impfpass nicht vorhanden'
        ]
      ),
      new MedicalOption('Anamnese', '1.13.', 0, 'Antibiotika letzte Woche', 1, 1, 0.7, 
        [
          'Keine Antibiotikabehandlung in den letzten 7 Tagen'
        ]
      ),
      new MedicalOption('Anamnese', '1.14.', 0, 'Antibiotika letzte 3 Monate', 3, 3, 2, 
        [
          'Zweimaliger Harnwegsinfekt in der Reha, Antibiotikatherapie, Name des Antibiotikums nicht erinnerlich'
        ]
      ),
      new MedicalOption('Anamnese', '1.15.', 0, 'Familienanamnese', 3, 3, 2, 
        [
          'Keine relevanten Erkrankungen in der Familie'
        ]
      ),
      new MedicalOption('Anamnese', '1.16.', 0, 'Fremdanamnese Partnerin', 6, 6, 4, 
        [
          'Partnerin sehr besorgt, möchte, dass der Patient sofort in die Reha zurückkehrt'
        ]
      )
    ];