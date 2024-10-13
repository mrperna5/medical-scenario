import { Component, inject } from '@angular/core';
import { ScenarioService } from '../../scenario.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-history-diagnosis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './medical-history-diagnosis.component.html',
  styleUrl: './medical-history-diagnosis.component.css'
})
export class MedicalHistoryDiagnosisComponent {
  medicalHistoryDiagnosisGuesses: string[] = ['', '', '', '', ''];  // Array to store guesses
  private router = inject(Router)

  constructor(private scenarioService: ScenarioService) {}

  // Save the guesses to the service
  onSubmit(): void {
    const filteredGuesses = this.medicalHistoryDiagnosisGuesses.filter(guess => guess.trim() !== ''); // Remove empty guesses
    this.scenarioService.saveMedicalHistoryDiagnosisGuesses(filteredGuesses);
    console.log('Diagnosis guesses saved:', filteredGuesses);

    this.router.navigate(['/examination']);
  }
}