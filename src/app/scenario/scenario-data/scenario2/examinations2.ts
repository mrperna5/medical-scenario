
import { MedicalOption } from "../../../option.model";

export const examinations2: MedicalOption[] = [
    new MedicalOption('Untersuchung', '2.1.', 1, 'AZ & EZ', 1, 1, 0.8, 
      ['Patient in stark reduziertem AZ, normaler EZ (175cm, 90kg)']
    ),
    new MedicalOption('Untersuchung', '2.2.', 1, 'Orientierung & GCS', 2, 2, 1.4, 
      [
        'Patient ist orientierungslos, reagiert auf Schmerzreize',
        'Glasgow Coma Scale 9'
      ]
    ),
    new MedicalOption('Untersuchung', '2.3.', 1, 'Temperatur', 0, 0.5, 0.5, 
      ['Körpertemperatur 38.7°C']
    )
];
