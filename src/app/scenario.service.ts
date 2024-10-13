import { Injectable } from '@angular/core';
import { MedicalOption } from './option.model';
import { medicalHistories } from './data/medical-histories';
import { examinations } from './data/examinations';
import { laboratories } from './data/laboratories';
import { followups } from './data/follow-ups';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {

  private selectedMedicalHistories: MedicalOption[] = [];  // To store selected items
  private medicalHistoryDiagnosisGuesses: string[] = []; // To store the five guesses

  private selectExaminations: MedicalOption[] = [];  // To store selected items
  private examinationDiagnosisGuesses: string[] = []; // To store the five guesses

  private selectLaboratories: MedicalOption[] = [];  // To store selected items
  private laboratoryDiagnosisGuesses: string[] = []; // To store the five guesses

  private selectFollowUps: MedicalOption[] = [];  // To store selected items
  private followUpDiagnosisGuesses: string[] = []; // To store the five guesses

  constructor() { }

  /* Medical History (Anamnese) Methods*/
  // Get all medical history options (Anamnese round)
  getMedicalHistories(): MedicalOption[] {
    return medicalHistories;
  }

  // Save selected items after form submission
  saveSelectedHistories(selectedItems: MedicalOption[]): void {
    this.selectedMedicalHistories = [...selectedItems];
  }

  // Get selected items for review
  getSelectedHistories(): MedicalOption[] {
    return this.selectedMedicalHistories;
  }

  // Method to save medical history diagnostic guesses
  saveMedicalHistoryDiagnosisGuesses(guesses: string[]): void {
    this.medicalHistoryDiagnosisGuesses = [...guesses];
  }

  // Get the medical history diagnosis guesses
  getMedicalHistoryDiagnosisGuesses(): string[] {
    return this.medicalHistoryDiagnosisGuesses;
  }


  /* Examination (Untersuchung) Methods*/
  // Get all examination options (Untersuchung round)
  getExaminations(): MedicalOption[] {
    return examinations;
  }

  // Save selected items after form submission
  saveSelectedExaminations(selectedItems: MedicalOption[]): void {
    this.selectExaminations = [...selectedItems];
  }

  // Get selected items for review
  getSelectedExaminations(): MedicalOption[] {
    return this.selectExaminations;
  }

  // Method to save medical history diagnostic guesses
  saveExaminationDiagnosisGuesses(guesses: string[]): void {
    this.examinationDiagnosisGuesses = [...guesses];
  }

  // Get the medical history diagnosis guesses
  getExaminationDiagnosisGuesses(): string[] {
    return this.examinationDiagnosisGuesses;
  }


  /* Laboratories (Labordiagnostik) Methods*/
  // Get all examination options (Untersuchung round)
  getLaboratories(): MedicalOption[] {
    return laboratories;
  }

  // Save selected items after form submission
  saveSelectedLaboratories(selectedItems: MedicalOption[]): void {
    this.selectLaboratories = [...selectedItems];
  }

  // Get selected items for review
  getSelectedLaboratories(): MedicalOption[] {
    return this.selectLaboratories;
  }

  // Method to save medical history diagnostic guesses
  saveLaboratoryDiagnosisGuesses(guesses: string[]): void {
    this.laboratoryDiagnosisGuesses = [...guesses];
  }

  // Get the medical history diagnosis guesses
  getLaboratoryDiagnosisGuesses(): string[] {
    return this.laboratoryDiagnosisGuesses;
  }


  /* Follow-Ups (Weitere Diagnostik) Methods*/
  // Get all examination options (Untersuchung round)
  getFollowUps(): MedicalOption[] {
    return followups;
  }

  // Save selected items after form submission
  saveSelectedFollowUps(selectedItems: MedicalOption[]): void {
    this.selectFollowUps = [...selectedItems];
  }

  // Get selected items for review
  getSelectedFollowUps(): MedicalOption[] {
    return this.selectFollowUps;
  }

  // Method to save medical history diagnostic guesses
  saveFollowUpsDiagnosisGuesses(guesses: string[]): void {
    this.followUpDiagnosisGuesses = [...guesses];
  }

  // Get the medical history diagnosis guesses
  getFollowUpsDiagnosisGuesses(): string[] {
    return this.followUpDiagnosisGuesses;
  }


  /* Summary Methods */
  // Calculate the total cost of all selected items
  getTotalCost(): number {
    let medicalHistoryCost = this.selectedMedicalHistories.reduce((sum, item) => sum + item.behandlungskosten, 0);
    let examinationCost = this.selectExaminations.reduce((sum, item) => sum + item.behandlungskosten, 0);
    let laboratoryCost = this.selectLaboratories.reduce((sum, item) => sum + item.behandlungskosten, 0);
    let followUpCost = this.selectFollowUps.reduce((sum, item) => sum + item.behandlungskosten, 0);

    return medicalHistoryCost + examinationCost + laboratoryCost + followUpCost;
  }

  // Calculate the total doctor's time for all selected items
  getTotalDoctorTime(): number {
    let medicalHistoryTime = this.selectedMedicalHistories.reduce((sum, item) => sum + item.aerztlicheArbeitszeit, 0);
    let examinationTime = this.selectExaminations.reduce((sum, item) => sum + item.aerztlicheArbeitszeit, 0);
    let laboratoryTime = this.selectLaboratories.reduce((sum, item) => sum + item.aerztlicheArbeitszeit, 0);
    let followUpTime = this.selectFollowUps.reduce((sum, item) => sum + item.aerztlicheArbeitszeit, 0);

    return medicalHistoryTime + examinationTime + laboratoryTime + followUpTime;
  }

  // Calculate the total patient's time for all selected items
  getTotalPatientTime(): number {
    let medicalHistoryTime = this.selectedMedicalHistories.reduce((sum, item) => sum + item.behandlungszeit, 0);
    let examinationTime = this.selectExaminations.reduce((sum, item) => sum + item.behandlungszeit, 0);
    let laboratoryTime = this.selectLaboratories.reduce((sum, item) => sum + item.behandlungszeit, 0);
    let followUpTime = this.selectFollowUps.reduce((sum, item) => sum + item.behandlungszeit, 0);

    return medicalHistoryTime + examinationTime + laboratoryTime + followUpTime;
  }
}
