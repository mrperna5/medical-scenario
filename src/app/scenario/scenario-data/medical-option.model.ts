export interface MedicalOption {
  rubrik: string;
  code: string;
  gewaehlt: number;
  item: string;
  aerztlicheArbeitszeit: number;
  behandlungszeit: number;
  behandlungskosten: number;
  results?: string[];
}
