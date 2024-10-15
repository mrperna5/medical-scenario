
import { MedicalOption } from "../../../option.model";

export const followups2: MedicalOption[] = [
    new MedicalOption('Weitere Diagnostik', '4.1.', 0, 'Blutkultur, 1 Paar', 0, 3, 65.0, 
      ['Ergebnisse ausstehend']
    ),
    new MedicalOption('Weitere Diagnostik', '4.2.', 0, 'Urinuntersuchung', 0, 2, 25.0, 
      ['Verdacht auf Infekt']
    ),
    new MedicalOption('Weitere Diagnostik', '4.3.', 1, 'CT Abdomen', 0, 6, 150.0, 
      ['Bauchraum unauffällig, keine Anzeichen auf Peritonitis']
    )
];
