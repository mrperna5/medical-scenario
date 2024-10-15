
import { MedicalOption } from "../../../option.model";

export const laboratories2: MedicalOption[] = [
    new MedicalOption('Labordiagnostik', '3.1.', 1, 'BB', 0, 0.5, 1.6, 
      ['Leukozytose (14.500/µl), normozytäre Anämie (Hb 9.8 g/dl)']
    ),
    new MedicalOption('Labordiagnostik', '3.2.', 1, 'Diff. BB', 0, 0.5, 1.0, 
      ['Keine Blasten, leicht erhöhte Eosinophilenwerte']
    ),
    new MedicalOption('Labordiagnostik', '3.3.', 1, 'Na+, K+, Glukose', 0, 0.5, 2.8, 
      ['Hyponatriämie, Hypoglykämie (Glukose 45 mg/dl)']
    )
];
