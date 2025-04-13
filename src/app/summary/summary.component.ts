import { Component, inject, OnInit, signal } from '@angular/core';
import { ScenarioService } from '../scenario.service';
import { CommonModule } from '@angular/common';
import { MedicalOption } from '../scenario/scenario-data/medical-option.model';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
})
export class SummaryComponent implements OnInit {
  teamName = signal<string>('');
  teamMembers = signal<string[]>([]);
  selectedMedicalHistories = signal<MedicalOption[]>([]);
  selectedExaminations = signal<MedicalOption[]>([]);
  selectedLaboratories = signal<MedicalOption[]>([]);
  selectedFollowUps = signal<MedicalOption[]>([]);

  medicalHistoryDiagnosisGuesses = signal<string[]>([]);
  examinationDiagnosisGuesses = signal<string[]>([]);
  laboratoryDiagnosisGuesses = signal<string[]>([]);
  followUpDiagnosisGuesses = signal<string[]>([]);

  private router = inject(Router);
  private http = inject(HttpClient);

  constructor(private scenarioService: ScenarioService) {}

  ngOnInit(): void {
    const currentTeamName = this.scenarioService.getTeamName();
    this.teamName.set(currentTeamName);
    const members = this.scenarioService.getTeamMembers(currentTeamName);
    this.teamMembers.set(members);

    console.log('TEAM NAME =>', currentTeamName);
    console.log('TEAM MEMBERS =>', members);

    this.selectedMedicalHistories.set(
      this.scenarioService.getSelectedHistories()
    );
    this.selectedExaminations.set(
      this.scenarioService.getSelectedExaminations()
    );
    this.selectedLaboratories.set(
      this.scenarioService.getSelectedLaboratories()
    );
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

  getAllItems() {
    return [
      ...this.selectedMedicalHistories().map((i) => ({ section: 'Anamnese', item: i })),
      ...this.selectedExaminations().map((i) => ({ section: 'Untersuchung', item: i })),
      ...this.selectedLaboratories().map((i) => ({ section: 'Labordiagnostik', item: i })),
      ...this.selectedFollowUps().map((i) => ({ section: 'Weitere Diagnostik', item: i })),
    ];
  }


  saveSummaryToBackend(): void {
    const payload = {
      teamName: this.teamName(),
      finalDiagnosis: this.followUpDiagnosisGuesses()[0] || '',
      finalTherapy: this.followUpDiagnosisGuesses()[1] || '',
      totalCost: this.getTotalOverallCost(),
      totalDoctorTime: this.getTotalOverallDoctorTime(),
      totalPatientTime: this.getTotalOverallPatientTime(),
    };

    this.http.post('/api/summary', payload).subscribe({
      next: () => console.log('Summary saved successfully'),
      error: (err) => console.error('Error saving summary:', err),
    });
  }
  

  saveToBackend() {
    this.saveSummaryToBackend();
  }

  
  printThenRestart() {
    const afterPrint = () => {
      // Navigate to the start page after the print dialog closes
      this.router.navigate(['/title']);
      window.removeEventListener('afterprint', afterPrint);
    };
    window.addEventListener('afterprint', afterPrint);

    // Show print dialog
    window.print();
  }
}
