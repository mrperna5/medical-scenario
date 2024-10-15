import { MedicalOption } from "../../../option.model";

export const medicalHistories2: MedicalOption[] = [
    new MedicalOption('Anamnese', '1.1.', 1, 'Aktuelle Beschwerden', 3, 3, 2.0, 
        [
          'Seit zwei Tagen anhaltende Bauchschmerzen und Übelkeit',
          'Starkes Schwitzen, Müdigkeit',
          'Der Patient berichtet über eine kürzliche Hyperglykämie (Blutzucker über 400 mg/dl)'
        ]
    ),
    new MedicalOption('Anamnese', '1.2.', 1, 'Vorerkrankungen', 2, 2, 1.5, 
        [
          'Diabetes Typ 2 seit 15 Jahren',
          'Leichte arterielle Hypertonie'
        ]
    )
];
