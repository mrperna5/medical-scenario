import { Component, signal } from '@angular/core';
import { ScenarioService } from '../scenario.service';
import { CommonModule } from '@angular/common';
import { MedicalOption } from '../scenario/scenario-data/medical-option.model';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent {
  teamName = signal<string>('');
  selectedMedicalHistories = signal<MedicalOption[]>([]);
  selectedExaminations = signal<MedicalOption[]>([]);
  selectedLaboratories = signal<MedicalOption[]>([]);
  selectedFollowUps = signal<MedicalOption[]>([]);

  medicalHistoryDiagnosisGuesses = signal<string[]>([]);
  examinationDiagnosisGuesses = signal<string[]>([]);
  laboratoryDiagnosisGuesses = signal<string[]>([]);
  followUpDiagnosisGuesses = signal<string[]>([]);

  constructor(private scenarioService: ScenarioService) {}

  ngOnInit(): void {
    this.teamName.set(this.scenarioService.getTeamName());

    this.selectedMedicalHistories.set(this.scenarioService.getSelectedHistories());
    this.selectedExaminations.set(this.scenarioService.getSelectedExaminations());
    this.selectedLaboratories.set(this.scenarioService.getSelectedLaboratories());
    this.selectedFollowUps.set(this.scenarioService.getSelectedFollowUps());

    this.medicalHistoryDiagnosisGuesses.set(
      this.scenarioService.getMedicalHistoryDiagnosisGuesses()
    );
    this.examinationDiagnosisGuesses.set(
      this.scenarioService.getExaminationDiagnosisGuesses()
    );
    this.laboratoryDiagnosisGuesses.set(
      this.scenarioService.getLaboratoryDiagnosisGuesses()
    );
    this.followUpDiagnosisGuesses.set(
      this.scenarioService.getFollowUpsDiagnosisGuesses()
    );

      console.log(this.selectedMedicalHistories)
      console.log(this.medicalHistoryDiagnosisGuesses)
  }

  // Calculate total cost for a given set of medical options
  getTotalCost(items: MedicalOption[]): number {
    return items.reduce((total, item) => total + item.behandlungskosten, 0);
  }

  // Calculate total doctor time for a given set of medical options
  getTotalDoctorTime(items: MedicalOption[]): number {
    return items.reduce((total, item) => total + item.aerztlicheArbeitszeit, 0);
  }

  // Calculate total patient time for a given set of medical options
  getTotalPatientTime(items: MedicalOption[]): number {
    return items.reduce((total, item) => total + item.behandlungszeit, 0);
  }

  // Calculate overall totals across all sections
  getTotalOverallCost(): number {
    return (
      this.getTotalCost(this.selectedMedicalHistories()) +
      this.getTotalCost(this.selectedExaminations()) +
      this.getTotalCost(this.selectedLaboratories()) +
      this.getTotalCost(this.selectedFollowUps())
    );
  }

  getTotalOverallDoctorTime(): number {
    return (
      this.getTotalDoctorTime(this.selectedMedicalHistories()) +
      this.getTotalDoctorTime(this.selectedExaminations()) +
      this.getTotalDoctorTime(this.selectedLaboratories()) +
      this.getTotalDoctorTime(this.selectedFollowUps())
    );
  }

  getTotalOverallPatientTime(): number {
    return (
      this.getTotalPatientTime(this.selectedMedicalHistories()) +
      this.getTotalPatientTime(this.selectedExaminations()) +
      this.getTotalPatientTime(this.selectedLaboratories()) +
      this.getTotalPatientTime(this.selectedFollowUps())
    );
  }
}
