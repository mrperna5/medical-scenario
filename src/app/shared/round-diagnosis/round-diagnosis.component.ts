import { Component, inject, input, model } from '@angular/core';
import { Router } from '@angular/router';
import { ScenarioService } from '../../scenario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-round-diagnosis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './round-diagnosis.component.html',
  styleUrl: './round-diagnosis.component.css',
})
export class RoundDiagnosisComponent {
  guesses = model.required<string[]>();
  roundName = input.required<'medical-history' | 'laboratory' | 'examination' | 'follow-up'>()

  navigateto = input.required<string>()
  private router = inject(Router);

  constructor(private scenarioService: ScenarioService) {}

  onSubmit(): void {
    const filteredGuesses = this.guesses().filter(
      (guess) => guess.trim() !== ''
    );
    switch (this.roundName()) {
      case 'medical-history':
        this.scenarioService.saveMedicalHistoryDiagnosisGuesses(filteredGuesses);
        break;
      case 'laboratory':
        this.scenarioService.saveLaboratoryDiagnosisGuesses(filteredGuesses);
        break;
      case 'examination':
        this.scenarioService.saveExaminationDiagnosisGuesses(filteredGuesses);
        break;
      case 'follow-up':
        this.scenarioService.saveFollowUpsDiagnosisGuesses(filteredGuesses);
        break;
      default:
        throw new Error('Invalid round name');
    }

    this.router.navigate([this.navigateto()]);
  }
}
