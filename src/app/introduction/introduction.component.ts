import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ScenarioService } from '../scenario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export class IntroductionComponent {
  private router = inject(Router)
  private scenarioService = inject(ScenarioService)
  selectedScenarioId!: number;

  cases: string[] = ['Fall 1', 'Fall 2', 'Fall 3', 'Fall 4', 'Fall 5', 'Fall 6', 
    'Fall 7', 'Fall 8', 'Fall 9', 'Fall 10', 'Fall 11', 'Fall 12'];

  selectScenario(scenarioId: number): void {
    this.selectedScenarioId = scenarioId;
  }

  onSubmit(): void {
    this.scenarioService.saveSelectedScenario(this.selectedScenarioId);
    this.router.navigate(['/scenario']);
  }

}
