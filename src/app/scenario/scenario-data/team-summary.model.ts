// src/app/scenario/team-summary.model.ts
export interface TeamSummary {
    scenarioId: number;
    teamName: string;
    teamMembers: string[];
    finalDiagnosis: string;
    finalTherapy: string;
    totalCost: number;
    totalDoctorTime: number;
    totalPatientTime: number;
  }
  