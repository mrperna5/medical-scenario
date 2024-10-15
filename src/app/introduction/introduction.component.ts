import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ScenarioService } from '../scenario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.css',
})
export class IntroductionComponent {
  private router = inject(Router);

  teamName!: string;
  teamPlaceholder: string = '';

  selectedScenarioId!: number;

  // Array of fun team names from Regensburg University
  teamNames: string[] = [
    'Team Stethoskop', // Team Stethoscope
    'Die Blutwerte-Gurus', // The Bloodwork Gurus
    'Die Sezierer', // The Dissectors
    'Die Radiologie-Experten', // The Radiology Experts
    'Die Medizindetektive', // The Medicine Detectives
    'Die Neurologie-Ninjas', // The Neurology Ninjas
    'Die Herzchirurgen', // The Heart Surgeons
    'Team Puls-Profis', // Team Pulse Professionals
    'Die Ultraschallhelden', // The Ultrasound Heroes
  ];

  constructor(private scenarioService: ScenarioService) {}

  ngOnInit(): void {
    localStorage.clear;
    this.teamPlaceholder =
      this.teamNames[Math.floor(Math.random() * this.teamNames.length)];
  }

  selectScenario(scenarioId: number): void {
    this.selectedScenarioId = scenarioId;
  }

  onSubmit(): void {
    if (!this.teamName) {
      this.teamName = this.teamPlaceholder;
    }
    this.scenarioService.saveTeamName(this.teamName);
    this.scenarioService.saveSelectedScenario(this.selectedScenarioId);
    this.router.navigate(['/scenario']);
  }
}
