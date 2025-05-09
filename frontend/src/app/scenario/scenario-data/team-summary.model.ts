export interface TeamSummary {
    id: number;
    scenarioId: number;
    teamName: string;
    teamMembers: string[];
    finalDiagnosis: string;
    finalTherapy: string;
    totalCost: number;
    totalDoctorTime: number;
    totalPatientTime: number;
    completedDateTime: Date;
  }
