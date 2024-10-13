import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ScenarioService } from '../../scenario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-follow-up-diagnosis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './follow-up-diagnosis.component.html',
  styleUrl: './follow-up-diagnosis.component.css'
})
export class FollowUpDiagnosisComponent {
  followUpDiagnosisGuesses: string[] = ['', '', '', '', ''];  // Array to store guesses
  private router = inject(Router)

  constructor(private scenarioService: ScenarioService) {}

  // Save the guesses to the service
  onSubmit(): void {
    const filteredGuesses = this.followUpDiagnosisGuesses.filter(guess => guess.trim() !== ''); // Remove empty guesses
    this.scenarioService.saveFollowUpsDiagnosisGuesses(filteredGuesses);
    console.log('Diagnosis guesses saved:', filteredGuesses);

    this.router.navigate(['/summary']);
  }
}