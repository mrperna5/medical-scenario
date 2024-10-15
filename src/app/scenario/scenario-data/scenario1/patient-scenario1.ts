export const patientScenario1 = {
    mysteryCase: `
      Ein 27-jähriger tetraplegischer Patient (Zustand nach Autounfall im Jahr 2000) wird am 13.02.2001 um 20:40 Uhr vom Notarzt in Ihre Notaufnahme eingeliefert.
      Der Patient entwickelte akut eine „innere Unruhe“ und „starkes Zittern“ und hat in der Vorgeschichte mehrere epileptische Anfälle erlitten.
    `,
    developments: [
      {
        stage: 'Weiterer Verlauf (I)',
        description: `
          Klinisch deutet Fieber sowie ein Verdacht auf Pyelonephritis (Harnwegsinfektion) hin, basierend auf der Vorgeschichte von Harnwegsinfektionen und Gries im Katheterschlauch. Ein Urinstix bestätigt diesen Verdacht.
        `
      },
      {
        stage: 'Weiterer Verlauf (II)',
        description: `
          In der Nacht entwickelt der Patient Fieberspitzen bis 40.3°C und erleidet eine Asystolie, wird erfolgreich reanimiert und auf die Intensivstation verlegt.
          Das Ergebnis der Blutkultur zeigt Escherichia coli, resistent gegen Ciprofloxacin.
        `
      },
      {
        stage: 'Weiterer Verlauf (III)',
        description: `
          Die Antibiotika-Therapie wird auf Piperacillin/Sulbactam/Vancomycin/Fluconazol umgestellt. Der Patient bleibt 17 Tage auf der Intensivstation und wird nach 30 Tagen in eine Rehaklinik verlegt.
          Die MRSA-Abstriche fallen positiv aus.
        `
      }
    ]
  };
  