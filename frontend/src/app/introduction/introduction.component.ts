import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ScenarioService } from '../scenario.service';
import { FormsModule } from '@angular/forms';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export class IntroductionComponent {
  private router = inject(Router);
  private scenarioService = inject(ScenarioService);
  private controlService = inject(ControlService)
  selectedScenarioId!: number;

  unlockedIds: number[] = [];

  cases: string[] = [
    'Fall 1',
    'Fall 2',
    'Fall 3',
    'Fall 4',
    'Fall 5',
    'Fall 6',
    'Fall 7',
    'Fall 8',
    'Fall 9',
    'Fall 10',
    'Fall 11',
    'Fall 12',
  ];

  ngOnInit(): void {
    this.controlService.getUnlockedScenarioIds().subscribe((ids) => {
      this.unlockedIds = ids;
    });
  }

  selectScenario(scenarioId: number): void {
    this.selectedScenarioId = scenarioId;
  }

  isUnlocked(index: number): boolean {
    return this.unlockedIds.includes(index + 1);
  }

  onSubmit(): void {
    this.scenarioService.saveSelectedScenario(this.selectedScenarioId);
    this.router.navigate(['/scenario']);
  }
}
