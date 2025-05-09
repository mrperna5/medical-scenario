import { computed, Injectable, signal } from '@angular/core';
import { MedicalOption } from './scenario/scenario-data/medical-option.model';
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
import { patientScenario5 } from "./scenario/scenario-data/scenario5/patient-scenario5";
import { medicalHistories5 } from "./scenario/scenario-data/scenario5/medical-histories5";
import { examinations5 } from "./scenario/scenario-data/scenario5/examinations5";
import { laboratories5 } from "./scenario/scenario-data/scenario5/laboratories5";
import { followups5 } from './scenario/scenario-data/scenario5/follow-ups5';
import { patientScenario7 } from './scenario/scenario-data/scenario7/patient-scenario7';
import { medicalHistories7 } from "./scenario/scenario-data/scenario7/medical-histories7";
import { examinations7 } from "./scenario/scenario-data/scenario7/examinations7";
import { laboratories7 } from "./scenario/scenario-data/scenario7/laboratories7";
import { followups7 } from "./scenario/scenario-data/scenario7/follow-ups7";
import { patientScenario9 } from "./scenario/scenario-data/scenario9/patient-scenario9";
import { medicalHistories9 } from "./scenario/scenario-data/scenario9/medical-histories9";
import { examinations9 } from "./scenario/scenario-data/scenario9/examinations9";
import { followups9 } from "./scenario/scenario-data/scenario9/follow-ups9";
import { patientScenario11 } from "./scenario/scenario-data/scenario11/patient-scenario11";
import { laboratories9 } from "./scenario/scenario-data/scenario9/laboratories9";
import { medicalHistories11 } from "./scenario/scenario-data/scenario11/medical-histories11";
import { examinations11 } from "./scenario/scenario-data/scenario11/examinations11";
import { laboratories11 } from "./scenario/scenario-data/scenario11/laboratories11";
import { followups11 } from "./scenario/scenario-data/scenario11/follow-ups11";

@Injectable({
  providedIn: 'root',
})
export class ScenarioService {
  private teamNameKey = 'teamName';
  private teamMembersKey = 'teamMembers';
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

  private lockedPhasesKey = 'lockedPhases';
  private lockedPhases = signal<{ [phaseName: string]: boolean }>({});

  private activePatientScenario = signal<any>(null);
  private activeMedicalHistories = signal<MedicalOption[]>([]);
  private activeExaminations = signal<MedicalOption[]>([]);
  private activeLaboratories = signal<MedicalOption[]>([]);
  private activeFollowUps = signal<MedicalOption[]>([]);

  private lockedRounds = signal<{ [roundName: string]: boolean }>({});

  private totalCost = computed(() => {
    return (
      this.activeMedicalHistories().reduce(
        (sum, item) => sum + item.behandlungskosten,
        0
      ) +
      this.activeExaminations().reduce(
        (sum, item) => sum + item.behandlungskosten,
        0
      ) +
      this.activeLaboratories().reduce(
        (sum, item) => sum + item.behandlungskosten,
        0
      ) +
      this.activeFollowUps().reduce(
        (sum, item) => sum + item.behandlungskosten,
        0
      )
    );
  });

  private totalDoctorTime = computed(() => {
    return (
      this.activeMedicalHistories().reduce(
        (sum, item) => sum + item.aerztlicheArbeitszeit,
        0
      ) +
      this.activeExaminations().reduce(
        (sum, item) => sum + item.aerztlicheArbeitszeit,
        0
      ) +
      this.activeLaboratories().reduce(
        (sum, item) => sum + item.aerztlicheArbeitszeit,
        0
      ) +
      this.activeFollowUps().reduce(
        (sum, item) => sum + item.aerztlicheArbeitszeit,
        0
      )
    );
  });

  private totalPatientTime = computed(() => {
    return (
      this.activeMedicalHistories().reduce(
        (sum, item) => sum + item.behandlungszeit,
        0
      ) +
      this.activeExaminations().reduce(
        (sum, item) => sum + item.behandlungszeit,
        0
      ) +
      this.activeLaboratories().reduce(
        (sum, item) => sum + item.behandlungszeit,
        0
      ) +
      this.activeFollowUps().reduce(
        (sum, item) => sum + item.behandlungszeit,
        0
      )
    );
  });

  constructor() {
    // Load existing locks (selection & diagnosis) from local storage
    const locks = localStorage.getItem(this.lockedPhasesKey);
    if (locks) {
      this.lockedPhases.set(JSON.parse(locks));
    }
  }

  resetGame(): void {
    this.lockedPhases.set({}); // Reset locked phases
    this.activePatientScenario.set(null);
    this.activeMedicalHistories.set([]);
    this.activeExaminations.set([]);
    this.activeLaboratories.set([]);
    this.activeFollowUps.set([]);

    localStorage.clear();
  }

  /* Introduction Methods*/
  public lockPhase(phaseName: string): void {
    const currentLocks = this.lockedPhases();
    const updatedLocks = { ...currentLocks, [phaseName]: true };
    this.lockedPhases.set(updatedLocks);
    localStorage.setItem(this.lockedPhasesKey, JSON.stringify(updatedLocks));
  }

  public isPhaseLocked(phaseName: string): boolean {
    const currentLocks = this.lockedPhases();
    return !!currentLocks[phaseName];
  }

  saveTeamName(teamName: string): void {
    localStorage.setItem(this.teamNameKey, teamName);
  }

  getTeamName(): string {
    const data = localStorage.getItem(this.teamNameKey);
    return data ? data : '';
  }

  private getTeamMembersKey(teamName: string): string {
    return `${teamName}_teamMembers`;
  }

  saveTeamMembers(teamName: string, teamMembers: string[]): void {
    const key = this.getTeamMembersKey(teamName);
    localStorage.setItem(key, JSON.stringify(teamMembers));
  }

  getTeamMembers(teamName: string): string[] {
    const key = this.getTeamMembersKey(teamName);
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  addTeamMember(teamName: string, memberName: string): void {
    const teamMembers = this.getTeamMembers(teamName);
    teamMembers.push(memberName);
    this.saveTeamMembers(teamName, teamMembers);
  }

  removeTeamMember(teamName: string, memberName: string): void {
    const teamMembers = this.getTeamMembers(teamName);
    const updatedMembers = teamMembers.filter(
      (member) => member !== memberName
    );
    this.saveTeamMembers(teamName, updatedMembers);
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
        this.activePatientScenario.set(patientScenario1);
        this.activeMedicalHistories.set(medicalHistories1);
        this.activeExaminations.set(examinations1);
        this.activeLaboratories.set(laboratories1);
        this.activeFollowUps.set(followups1);
        break;
      case 2:
        this.activePatientScenario.set(patientScenario2);
        this.activeMedicalHistories.set(medicalHistories2);
        this.activeExaminations.set(examinations2);
        this.activeLaboratories.set(laboratories2);
        this.activeFollowUps.set(followups2);
        break;
      case 5:
        this.activePatientScenario.set(patientScenario5);
        this.activeMedicalHistories.set(medicalHistories5);
        this.activeExaminations.set(examinations5);
        this.activeLaboratories.set(laboratories5);
        this.activeFollowUps.set(followups5);
        break;
      case 7:
        this.activePatientScenario.set(patientScenario7);
        this.activeMedicalHistories.set(medicalHistories7);
        this.activeExaminations.set(examinations7);
        this.activeLaboratories.set(laboratories7);
        this.activeFollowUps.set(followups7);
        break;
      case 9:
        this.activePatientScenario.set(patientScenario9);
        this.activeMedicalHistories.set(medicalHistories9);
        this.activeExaminations.set(examinations9);
        this.activeLaboratories.set(laboratories9);
        this.activeFollowUps.set(followups9);
        break;
      case 11:
        this.activePatientScenario.set(patientScenario11);
        this.activeMedicalHistories.set(medicalHistories11);
        this.activeExaminations.set(examinations11);
        this.activeLaboratories.set(laboratories11);
        this.activeFollowUps.set(followups11);
        break;
      default:
        break;
    }

    this.saveScenarioData();
  }

  private saveScenarioData(): void {
    localStorage.setItem(
      this.patientScenarioKey,
      JSON.stringify(this.activePatientScenario())
    );
    localStorage.setItem(
      this.activeMedicalHistoriesKey,
      JSON.stringify(this.activeMedicalHistories())
    );
    localStorage.setItem(
      this.activeExaminationsKey,
      JSON.stringify(this.activeExaminations())
    );
    localStorage.setItem(
      this.activeLaboratoriesKey,
      JSON.stringify(this.activeLaboratories())
    );
    localStorage.setItem(
      this.activeFollowUpsKey,
      JSON.stringify(this.activeFollowUps())
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
  getTotalCost() {
    return this.totalCost;
  }

  getTotalDoctorTime() {
    return this.totalDoctorTime;
  }

  getTotalPatientTime() {
    return this.totalPatientTime;
  }
}
