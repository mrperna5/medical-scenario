export class MedicalOption {
    constructor(
      public rubrik: string,             // The category, e.g., "Anamnese", "Untersuchung", etc.
      public code: string,               // The code, e.g., "1.1", "2.3", etc.
      public gewaehlt: number,           // Whether the option is selected (0 or 1)
      public item: string,               // The item description
      public aerztlicheArbeitszeit: number,  // Doctor's working time in minutes
      public behandlungszeit: number,    // Treatment time in minutes
      public behandlungskosten: number,   // Treatment cost in EURO
      public results?: string[]
    ) {}
  }
  