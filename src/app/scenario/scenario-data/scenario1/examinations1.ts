import { MedicalOption } from "../../../option.model";


export const examinations1: MedicalOption[] = [
    new MedicalOption('Untersuchung', '2.1.', 1, 'AZ & EZ', 1, 1, 0.7, 
      ['Patient in reduziertem AZ, normaler EZ (178cm, 77kg)']
    ),
    new MedicalOption('Untersuchung', '2.2.', 1, 'Orientierung & GCS', 2, 2, 1.3, 
      [
        'Patient ist zu Ort, Zeit und Person orientiert',
        'Glasgow Coma Scale 15'
      ]
    ),
    new MedicalOption('Untersuchung', '2.3.', 1, 'Temperatur (Ohr)', 0, 1, 0.7, 
      ['39,5°C']
    ),
    new MedicalOption('Untersuchung', '2.4.', 0, 'Temperatur (Rektal)', 0, 5, 3.3, 
      ['39,6°C']
    ),
    new MedicalOption('Untersuchung', '2.5.', 1, 'Blutdruck', 0, 1, 0.3, 
      ['120/70 mmHg']
    ),
    new MedicalOption('Untersuchung', '2.6.', 1, 'Herzfrequenz', 0, 1, 0.3, 
      ['88/min, regelmäßig']
    ),
    new MedicalOption('Untersuchung', '2.7.', 0, 'Kradiale Untersuchung', 3, 3, 2, 
      ['Keine Auffälligkeiten']
    ),
    new MedicalOption('Untersuchung', '2.8.', 1, 'Pulmonale Untersuchung', 3, 3, 2, 
      [
        'Kein Stridor, keine groben Rasselgeräusche',
        'Vesikuläres Atemgeräusch'
      ]
    ),
    new MedicalOption('Untersuchung', '2.9.', 1, 'Abdominelle Untersuchung', 3, 3, 2, 
      ['Abdomen weich, keine Druckschmerzen, keine Abwehrspannung']
    ),
    new MedicalOption('Untersuchung', '2.10.', 1, 'Untersuchung Urogenitalsystem', 2, 4, 2.6, 
      ['Keine Auffälligkeiten']
    ),
    new MedicalOption('Untersuchung', '2.11.', 1, 'Rektale Untersuchung', 5, 5, 3.3, 
      ['Normale Rektalbefunde, keine Auffälligkeiten']
    ),
    new MedicalOption('Untersuchung', '2.12.', 0, 'Lymphknotenstatus', 3, 3, 2, 
      ['Keine tastbaren Lymphknotenvergrößerungen']
    ),
    new MedicalOption('Untersuchung', '2.13.', 1, 'Inspektion der Haut', 3, 4, 2.6, 
      ['Keine Auffälligkeiten']
    ),
    new MedicalOption('Untersuchung', '2.14.', 1, 'kleine Neurologische Untersuchung', 3, 4, 2.3, 
      ['Normale Befunde']
    ),
    new MedicalOption('Untersuchung', '2.15.', 0, 'ausführliche neurologische Untersuchung', 6, 6, 4, 
      ['Nicht erforderlich']
    ),
    new MedicalOption('Untersuchung', '2.16.', 0, 'Schellongtest', 15, 15, 10, 
      ['Nicht durchgeführt']
    )
  ];