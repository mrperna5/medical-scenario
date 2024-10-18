import { PatientScenario } from "../patient-scenario.model";

export const patientScenario2: PatientScenario = {
    mysteryCase: `
      Ein 45-jähriger männlicher Patient mit bekannter Diabetes Typ 2 wurde am 10.04.2022 in die Notaufnahme eingeliefert.
      Der Patient klagt über starke Bauchschmerzen und hat in der Vorgeschichte mehrere Hyperglykämie-Episoden erlitten.
    `,
    developments: [
      {
        stage: 'Weiterer Verlauf (I)',
        description: `
          Klinisch zeigt sich eine deutliche Druckempfindlichkeit im Oberbauch sowie Übelkeit.
        `,
      },
      {
        stage: 'Weiterer Verlauf (II)',
        description: `
          Der Patient wird zur Beobachtung auf die Intensivstation verlegt.
        `,
      },
    ],
};
