import { Component } from '@angular/core';
import { RoundDiagnosisComponent } from "../../shared/round-diagnosis/round-diagnosis.component";

@Component({
  selector: 'app-medical-history-diagnosis',
  standalone: true,
  imports: [RoundDiagnosisComponent],
  templateUrl: './medical-history-diagnosis.component.html',
  styleUrl: './medical-history-diagnosis.component.css'
})
export class MedicalHistoryDiagnosisComponent {
  medicalHistoryDiagnosisGuesses: string[] = ['', '', '', '', '']; 
}