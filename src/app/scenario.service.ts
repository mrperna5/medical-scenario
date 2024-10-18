import { Injectable } from '@angular/core';
import { MedicalOption } from './option.model';
import { patientScenario1 } from './scenario/scenario-data/scenario1/patient-scenario1';
import { medicalHistories1 } from './scenario/scenario-data/scenario1/medical-histories1';
import { examinations1 } from './scenario/scenario-data/scenario1/examinations1';
import { laboratories1 } from './scenario/scenario-data/scenario1/laboratories1';
import { followups1 } from './scenario/scenario-data/scenario1/follow-ups1';
import { examinations2 } from './scenario/scenario-data/scenario2/examinations2';
import { followups2 } from './scenario/scenario-data/scenario2/follow-ups2';
import { laboratories2 } from './scenario/scenario-data/scenario2/laboratories2';
import { medicalHistories2 } from './scenario/scenario-data/scenario2/medical-histories2';
import { patientScenario2 } from './scenario/scenario-data/scenario2/patient-scenario2';

@Injectable({
  providedIn: 'root',
})
export class ScenarioService {
  private teamNameKey = 'teamName';
  private selectedScenarioKey = 'selectedScenario';
  private patientScenarioKey = 'patientScenario';

  private selectedMedicalHistoriesKey = 'selectedMedicalHistories';
  private medicalHistoryDiagnosisGuessesKey = 'medicalHistoryDiagnosisGuesses';

  private selectedExaminationsKey = 'selectedExaminations';
  private examinationDiagnosisGuessesKey = 'examinationDiagnosisGuesses';

  private selectedLaboratoriesKey = 'selectedLaboratories';
  private laboratoryDiagnosisGuessesKey = 'laboratoryDiagnosisGuesses';

  private selectedFollowUpsKey = 'selectedFollowUps';
  private followUpDiagnosisGuessesKey = 'followUpDiagnosisGuesses';

  private activeMedicalHistoriesKey = 'activeMedicalHistories';
  private activeExaminationsKey = 'activeExaminations';
  private activeLaboratoriesKey = 'activeLaboratories';
  private activeFollowUpsKey = 'activeFollowUps';

  private activePatientScenario: any;
  private activeMedicalHistories: MedicalOption[] = [];
  private activeExaminations: MedicalOption[] = [];
  private activeLaboratories: MedicalOption[] = [];
  private activeFollowUps: MedicalOption[] = [];

  constructor() {}
  /* Introduction Methods*/
  saveTeamName(teamName: string): void {
    localStorage.setItem(this.teamNameKey, teamName);
  }

  getTeamName(): string {
    const data = localStorage.getItem(this.teamNameKey);
    return data ? data : '';
  }

  saveSelectedScenario(scenarioNumber: number): void {
    localStorage.setItem(
      this.selectedScenarioKey,
      JSON.stringify(scenarioNumber)
    );
    this.loadScenarioData(scenarioNumber);
  }

  getSelectedScenario(): number {
    const data = localStorage.getItem(this.selectedScenarioKey);
    return data ? JSON.parse(data) : null;
  }

  getPatientScenario(): any {
    const data = localStorage.getItem(this.patientScenarioKey);
    return data ? JSON.parse(data) : null;
  }

  savePatientScenario(patientScenario: any): void {
    // this.selectedMedicalHistories = [...selectedItems];
    localStorage.setItem(
      this.patientScenarioKey,
      JSON.stringify(patientScenario)
    );
  }

  /* Load scenario data based on the selected scenario */
  loadScenarioData(scenarioNumber: number): void {
    switch (scenarioNumber) {
      case 1:
        this.activePatientScenario = patientScenario1;
        this.activeMedicalHistories = medicalHistories1;
        this.activeExaminations = examinations1;
        this.activeLaboratories = laboratories1;
        this.activeFollowUps = followups1;
        break;
      case 2:
        this.activePatientScenario = patientScenario2;
        this.activeMedicalHistories = medicalHistories2;
        this.activeExaminations = examinations2;
        this.activeLaboratories = laboratories2;
        this.activeFollowUps = followups2;
        break;
      default:
        break;
    }

    this.saveScenarioData();
  }

  private saveScenarioData(): void {
    localStorage.setItem(
      this.patientScenarioKey,
      JSON.stringify(this.activePatientScenario)
    );
    localStorage.setItem(
      this.activeMedicalHistoriesKey,
      JSON.stringify(this.activeMedicalHistories)
    );
    localStorage.setItem(
      this.activeExaminationsKey,
      JSON.stringify(this.activeExaminations)
    );
    localStorage.setItem(
      this.activeLaboratoriesKey,
      JSON.stringify(this.activeLaboratories)
    );
    localStorage.setItem(
      this.activeFollowUpsKey,
      JSON.stringify(this.activeFollowUps)
    );
  }

  /* Medical History (Anamnese) Methods*/
  // Get all medical history options (Anamnese round)
  getMedicalHistories(): MedicalOption[] {
    const data = localStorage.getItem(this.activeMedicalHistoriesKey);
    return data ? JSON.parse(data) : [];
  }

  // Save selected items after form submission
  saveSelectedHistories(selectedItems: MedicalOption[]): void {
    // this.selectedMedicalHistories = [...selectedItems];
    localStorage.setItem(
      this.selectedMedicalHistoriesKey,
      JSON.stringify(selectedItems)
    );
    console.log('Saved Histories: ' + selectedItems);
  }

  // Get selected items for review
  getSelectedHistories(): MedicalOption[] {
    // return this.selectedMedicalHistories;
    const data = localStorage.getItem(this.selectedMedicalHistoriesKey);
    return data ? JSON.parse(data) : [];
    console.log('Got Histores' + data);
  }

  // Method to save medical history diagnostic guesses
  saveMedicalHistoryDiagnosisGuesses(guesses: string[]): void {
    // this.medicalHistoryDiagnosisGuesses = [...guesses];
    localStorage.setItem(
      this.medicalHistoryDiagnosisGuessesKey,
      JSON.stringify(guesses)
    );
  }

  // Get the medical history diagnosis guesses
  getMedicalHistoryDiagnosisGuesses(): string[] {
    // return this.medicalHistoryDiagnosisGuesses;
    const data = localStorage.getItem(this.medicalHistoryDiagnosisGuessesKey);
    return data ? JSON.parse(data) : [];
  }

  /* Examination (Untersuchung) Methods*/
  // Get all examination options (Untersuchung round)
  getExaminations(): MedicalOption[] {
    const data = localStorage.getItem(this.activeExaminationsKey);
    return data ? JSON.parse(data) : [];
  }

  // Save selected items after form submission
  saveSelectedExaminations(selectedItems: MedicalOption[]): void {
    localStorage.setItem(
      this.selectedExaminationsKey,
      JSON.stringify(selectedItems)
    );
  }

  // Get selected items for review
  getSelectedExaminations(): MedicalOption[] {
    const data = localStorage.getItem(this.selectedExaminationsKey);
    return data ? JSON.parse(data) : [];
  }

  // Method to save medical history diagnostic guesses
  saveExaminationDiagnosisGuesses(guesses: string[]): void {
    localStorage.setItem(
      this.examinationDiagnosisGuessesKey,
      JSON.stringify(guesses)
    );
  }

  // Get the medical history diagnosis guesses
  getExaminationDiagnosisGuesses(): string[] {
    const data = localStorage.getItem(this.examinationDiagnosisGuessesKey);
    return data ? JSON.parse(data) : [];
  }

  /* Laboratories (Labordiagnostik) Methods*/
  // Get all examination options (Untersuchung round)
  getLaboratories(): MedicalOption[] {
    const data = localStorage.getItem(this.activeLaboratoriesKey);
    return data ? JSON.parse(data) : [];
  }

  // Save selected items after form submission
  saveSelectedLaboratories(selectedItems: MedicalOption[]): void {
    localStorage.setItem(
      this.selectedLaboratoriesKey,
      JSON.stringify(selectedItems)
    );
  }

  // Get selected items for review
  getSelectedLaboratories(): MedicalOption[] {
    const data = localStorage.getItem(this.selectedLaboratoriesKey);
    return data ? JSON.parse(data) : [];
  }

  // Method to save medical history diagnostic guesses
  saveLaboratoryDiagnosisGuesses(guesses: string[]): void {
    localStorage.setItem(
      this.laboratoryDiagnosisGuessesKey,
      JSON.stringify(guesses)
    );
  }

  // Get the medical history diagnosis guesses
  getLaboratoryDiagnosisGuesses(): string[] {
    const data = localStorage.getItem(this.laboratoryDiagnosisGuessesKey);
    return data ? JSON.parse(data) : [];
  }

  /* Follow-Ups (Weitere Diagnostik) Methods*/
  // Get all examination options (Untersuchung round)
  getFollowUps(): MedicalOption[] {
    const data = localStorage.getItem(this.activeFollowUpsKey);
    return data ? JSON.parse(data) : [];
  }

  // Save selected items after form submission
  saveSelectedFollowUps(selectedItems: MedicalOption[]): void {
    localStorage.setItem(
      this.selectedFollowUpsKey,
      JSON.stringify(selectedItems)
    );
  }

  // Get selected items for review
  getSelectedFollowUps(): MedicalOption[] {
    const data = localStorage.getItem(this.selectedFollowUpsKey);
    return data ? JSON.parse(data) : [];
  }

  // Method to save medical history diagnostic guesses
  saveFollowUpsDiagnosisGuesses(guesses: string[]): void {
    localStorage.setItem(
      this.followUpDiagnosisGuessesKey,
      JSON.stringify(guesses)
    );
  }

  // Get the medical history diagnosis guesses
  getFollowUpsDiagnosisGuesses(): string[] {
    const data = localStorage.getItem(this.followUpDiagnosisGuessesKey);
    return data ? JSON.parse(data) : [];
  }

  /* Summary Methods */
  // Calculate the total cost of all selected items
  getTotalCost(): number {
    let medicalHistoryCost = this.getSelectedHistories().reduce(
      (sum, item) => sum + item.behandlungskosten,
      0
    );
    let examinationCost = this.getSelectedExaminations().reduce(
      (sum, item) => sum + item.behandlungskosten,
      0
    );
    let laboratoryCost = this.getSelectedLaboratories().reduce(
      (sum, item) => sum + item.behandlungskosten,
      0
    );
    let followUpCost = this.getSelectedFollowUps().reduce(
      (sum, item) => sum + item.behandlungskosten,
      0
    );

    return medicalHistoryCost + examinationCost + laboratoryCost + followUpCost;
  }

  // Calculate the total doctor's time for all selected items
  getTotalDoctorTime(): number {
    let medicalHistoryTime = this.getSelectedHistories().reduce(
      (sum, item) => sum + item.aerztlicheArbeitszeit,
      0
    );
    let examinationTime = this.getSelectedExaminations().reduce(
      (sum, item) => sum + item.aerztlicheArbeitszeit,
      0
    );
    let laboratoryTime = this.getSelectedLaboratories().reduce(
      (sum, item) => sum + item.aerztlicheArbeitszeit,
      0
    );
    let followUpTime = this.getSelectedFollowUps().reduce(
      (sum, item) => sum + item.aerztlicheArbeitszeit,
      0
    );

    return medicalHistoryTime + examinationTime + laboratoryTime + followUpTime;
  }

  // Calculate the total patient's time for all selected items
  getTotalPatientTime(): number {
    let medicalHistoryTime = this.getSelectedHistories().reduce(
      (sum, item) => sum + item.behandlungszeit,
      0
    );
    let examinationTime = this.getSelectedExaminations().reduce(
      (sum, item) => sum + item.behandlungszeit,
      0
    );
    let laboratoryTime = this.getSelectedLaboratories().reduce(
      (sum, item) => sum + item.behandlungszeit,
      0
    );
    let followUpTime = this.getSelectedFollowUps().reduce(
      (sum, item) => sum + item.behandlungszeit,
      0
    );

    return medicalHistoryTime + examinationTime + laboratoryTime + followUpTime;
  }
}
