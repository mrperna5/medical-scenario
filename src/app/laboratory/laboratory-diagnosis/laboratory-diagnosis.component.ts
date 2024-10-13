import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ScenarioService } from '../../scenario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-laboratory-diagnosis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './laboratory-diagnosis.component.html',
  styleUrl: './laboratory-diagnosis.component.css'
})
export class LaboratoryDiagnosisComponent {
  laboratoryDiagnosisGuesses: string[] = ['', '', '', '', ''];  // Array to store guesses
  private router = inject(Router)

  constructor(private scenarioService: ScenarioService) {}

  // Save the guesses to the service
  onSubmit(): void {
    const filteredGuesses = this.laboratoryDiagnosisGuesses.filter(guess => guess.trim() !== ''); // Remove empty guesses
    this.scenarioService.saveLaboratoryDiagnosisGuesses(filteredGuesses);
    console.log('Diagnosis guesses saved:', filteredGuesses);

    this.router.navigate(['/follow-up']);
  }
}