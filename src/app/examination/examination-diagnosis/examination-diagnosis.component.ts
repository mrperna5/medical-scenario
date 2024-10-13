import { Component, inject } from '@angular/core';
import { ScenarioService } from '../../scenario.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-examination-diagnosis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './examination-diagnosis.component.html',
  styleUrl: './examination-diagnosis.component.css'
})
export class ExaminationDiagnosisComponent {
  examinationDiagnosisGuesses: string[] = ['', '', '', '', ''];  // Array to store guesses
  private router = inject(Router)

  constructor(private scenarioService: ScenarioService) {}

  // Save the guesses to the service
  onSubmit(): void {
    const filteredGuesses = this.examinationDiagnosisGuesses.filter(guess => guess.trim() !== ''); // Remove empty guesses
    this.scenarioService.saveExaminationDiagnosisGuesses(filteredGuesses);
    console.log('Diagnosis guesses saved:', filteredGuesses);

    this.router.navigate(['/laboratory']);
  }
}