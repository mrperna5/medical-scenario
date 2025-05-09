import { Component, inject, input, model, OnInit } from '@angular/core';
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
export class RoundDiagnosisComponent implements OnInit {
  guesses = model.required<string[]>();
  roundName = input.required<
    'medical-history' | 'laboratory' | 'examination' | 'follow-up'
  >();

  navigateto = input.required<string>();
  private router = inject(Router);

  isLocked = false;

  constructor(private scenarioService: ScenarioService) {}

  ngOnInit(): void {
    this.isLocked = this.scenarioService.isPhaseLocked(
      this.roundName() + '-diagnosis'
    );

    let savedGuesses: string[] = [];
    switch (this.roundName()) {
      case 'medical-history':
        savedGuesses = this.scenarioService.getMedicalHistoryDiagnosisGuesses();
        break;
      case 'laboratory':
        savedGuesses = this.scenarioService.getLaboratoryDiagnosisGuesses();
        break;
      case 'examination':
        savedGuesses = this.scenarioService.getExaminationDiagnosisGuesses();
        break;
      case 'follow-up':
        savedGuesses = this.scenarioService.getFollowUpsDiagnosisGuesses();
        break;
      default:
        throw new Error('Invalid round name');
    }

    if (savedGuesses?.length) {
      this.guesses.set(savedGuesses);
    }
  }

  onSubmit(): void {
    if (this.isLocked) {
      if (this.navigateto()) {
        this.router.navigate([this.navigateto()]);
      }
      return;
    }

    let filteredGuesses: string[] = [];

    if (this.roundName() === 'follow-up') {
      const finale = this.guesses()[0] ? this.guesses()[0].trim() : '';
      const therapie = this.guesses()[1] ? this.guesses()[1].trim() : '';
      if (finale === '' || therapie === '') {
        alert('Bitte geben Sie sowohl Ihre finale Diagnose als auch Ihre Therapie ein, bevor Sie fortfahren.');
        return;
      }
      filteredGuesses = [finale, therapie];
    } else {

      filteredGuesses = this.guesses().filter(guess => guess.trim() !== '');
      if (filteredGuesses.length === 0) {
        alert('Bitte geben Sie mindestens eine Diagnose ein, bevor Sie fortfahren.');
        return;
      }
    }


    switch (this.roundName()) {
      case 'medical-history':
        this.scenarioService.saveMedicalHistoryDiagnosisGuesses(
          filteredGuesses
        );
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

    this.scenarioService.lockPhase(this.roundName() + '-diagnosis');
    this.isLocked = true;

    if (this.navigateto()) {
      this.router.navigate([this.navigateto()]);
    }
  }
}
