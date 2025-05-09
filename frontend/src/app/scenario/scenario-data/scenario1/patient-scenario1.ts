import { PatientScenario } from "../patient-scenario.model";

export const patientScenario1: PatientScenario = {
    mysteryCase: `
      Ein 27-jähriger tetraplegischer Patient (Z. n. Autounfall im Jahr 2023) wird am 13.2.2024 um 20.40 Uhr vom Notarzt
       in Ihre Notaufnahme eingeliefert. Der Notarzt wurde alarmiert, da der Patient abends akut eine „innere Unruhe“ und
       „starkes Zittern“ entwickelt hätte und bei mehreren epileptischen Krampfanfällen in der Vorgeschichte Angst vor einem erneuten drohenden epileptischen Anfall hat.

    `,
    developments: [
      {
        stage: 'Weiterer Verlauf (I)',
        description: `
          Klinisch bei Fieber, Z. n. Harnwegsinfekten und Gries im Katheterschlauch V. a. Pyelonephritis
          Urinstix bestätigt Verdacht
          1 Blutkultur und 1 Urikult werden angelegt
          Uringramfärbung: +++ gramneg. Stäbchen
          Entscheidung zu Ciprofloxacin p.o. als Therapie
          Verlegung des Patienten in ein Einzelzimmer auf Normalstation
          Empfehlung zu MRSA-Abstrichen
        `
      },
      {
        stage: 'Weiterer Verlauf (II)',
        description: `
          Patient hat in der Nacht Fieberspitzen bis 40,3°C
          Am frühen Morgen des 14.2.2024 hat der Patient eine Asystolie und wird nach erfolgreicher Reanimation auf die Intensivstation verlegt
          Der Patient erwickelt ein schwerstes septisches Krankeitsbild mit hoher Katecholaminpflichtigkeit
          Das Ergebnis des initialen Urikults:
          Escherichia coli (>1 Mio Keime/mL)Ciprofloxacin resistent
        `
      },
      {
        stage: 'Weiterer Verlauf (III)',
        description: `
          Die Antibiose wird initial auf der Intensivstation umgestellt auf:
          Piperacillin/Sulbactam/Vancomycin/Fluconazol
          Der Patient ist über 8 Tage intubiert
          Der Patient ist 17 Tage auf der Intensivstation
          Der Patient kann erst nach 30 Tagen wieder in eine Rehaklinik verlegt werden
          Die MRSA Abstriche fallen positiv aus
        `
      }
    ]
  };
