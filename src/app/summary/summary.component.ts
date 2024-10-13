import { Component } from '@angular/core';
import { ScenarioService } from '../scenario.service';
import { CommonModule } from '@angular/common';
import { MedicalOption } from '../option.model';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  selectedMedicalHistories: MedicalOption[] = [];
  selectedExaminations: MedicalOption[] = [];
  selectedLaboratories: MedicalOption[] = [];
  selectedFollowUps: MedicalOption[] = [];
  
  medicalHistoryDiagnosisGuesses: string[] = [];
  examinationDiagnosisGuesses: string[] = [];
  laboratoryDiagnosisGuesses: string[] = [];
  followUpDiagnosisGuesses: string[] = [];

  constructor(private scenarioService: ScenarioService) {}

  ngOnInit(): void {
    // Retrieve the selected items and diagnosis guesses for each section
    this.selectedMedicalHistories = this.scenarioService.getSelectedHistories();
    this.selectedExaminations = this.scenarioService.getSelectedExaminations();
    this.selectedLaboratories = this.scenarioService.getSelectedLaboratories();
    this.selectedFollowUps = this.scenarioService.getSelectedFollowUps();

    this.medicalHistoryDiagnosisGuesses = this.scenarioService.getMedicalHistoryDiagnosisGuesses();
    this.examinationDiagnosisGuesses = this.scenarioService.getExaminationDiagnosisGuesses();
    this.laboratoryDiagnosisGuesses = this.scenarioService.getLaboratoryDiagnosisGuesses();
    this.followUpDiagnosisGuesses = this.scenarioService.getFollowUpsDiagnosisGuesses();
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
    return this.getTotalCost(this.selectedMedicalHistories) + 
           this.getTotalCost(this.selectedExaminations) + 
           this.getTotalCost(this.selectedLaboratories) + 
           this.getTotalCost(this.selectedFollowUps);
  }

  getTotalOverallDoctorTime(): number {
    return this.getTotalDoctorTime(this.selectedMedicalHistories) +
           this.getTotalDoctorTime(this.selectedExaminations) +
           this.getTotalDoctorTime(this.selectedLaboratories) +
           this.getTotalDoctorTime(this.selectedFollowUps);
  }

  getTotalOverallPatientTime(): number {
    return this.getTotalPatientTime(this.selectedMedicalHistories) +
           this.getTotalPatientTime(this.selectedExaminations) +
           this.getTotalPatientTime(this.selectedLaboratories) +
           this.getTotalPatientTime(this.selectedFollowUps);
  }
}
