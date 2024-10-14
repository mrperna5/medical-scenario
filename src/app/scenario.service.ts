import { Injectable } from '@angular/core';
import { MedicalOption } from './option.model';
import { medicalHistories } from './data/medical-histories';
import { examinations } from './data/examinations';
import { laboratories } from './data/laboratories';
import { followups } from './data/follow-ups';

@Injectable({
  providedIn: 'root',
})
export class ScenarioService {
  // private selectedMedicalHistories: MedicalOption[] = [];  // To store selected items
  // private medicalHistoryDiagnosisGuesses: string[] = []; // To store the five guesses

  // private selectExaminations: MedicalOption[] = [];  // To store selected items
  // private examinationDiagnosisGuesses: string[] = []; // To store the five guesses

  // private selectLaboratories: MedicalOption[] = [];  // To store selected items
  // private laboratoryDiagnosisGuesses: string[] = []; // To store the five guesses

  // private selectFollowUps: MedicalOption[] = [];  // To store selected items
  // private followUpDiagnosisGuesses: string[] = []; // To store the five guesses

  private teamNameKey = 'teamName';

  private selectedMedicalHistoriesKey = 'selectedMedicalHistories';
  private medicalHistoryDiagnosisGuessesKey = 'medicalHistoryDiagnosisGuesses';

  private selectedExaminationsKey = 'selectedExaminations';
  private examinationDiagnosisGuessesKey = 'examinationDiagnosisGuesses';

  private selectedLaboratoriesKey = 'selectedLaboratories';
  private laboratoryDiagnosisGuessesKey = 'laboratoryDiagnosisGuesses';

  private selectedFollowUpsKey = 'selectedFollowUps';
  private followUpDiagnosisGuessesKey = 'followUpDiagnosisGuesses';

  constructor() {}
  /* Introduction Methods*/
  saveTeamName(teamName: string): void {
    localStorage.setItem(this.teamNameKey, teamName);
  }

  getTeamName(): string {
    const data = localStorage.getItem(this.teamNameKey);
    return data ? data : '';
  }

  /* Medical History (Anamnese) Methods*/
  // Get all medical history options (Anamnese round)
  getMedicalHistories(): MedicalOption[] {
    return medicalHistories;
  }

  // Save selected items after form submission
  saveSelectedHistories(selectedItems: MedicalOption[]): void {
    // this.selectedMedicalHistories = [...selectedItems];
    localStorage.setItem(
      this.selectedMedicalHistoriesKey,
      JSON.stringify(selectedItems)
    );
  }

  // Get selected items for review
  getSelectedHistories(): MedicalOption[] {
    // return this.selectedMedicalHistories;
    const data = localStorage.getItem(this.selectedMedicalHistoriesKey);
    return data ? JSON.parse(data) : [];
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
    return examinations;
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
    return laboratories;
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
    return followups;
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
