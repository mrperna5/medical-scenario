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
  private router = inject(Router);

  teamName!: string;
  teamPlaceholder: string = '';

  selectedScenarioId!: number;


  cases: string[] = ['Fall 1', 'Fall 2', 'Fall 3', 'Fall 4', 'Fall 5', 'Fall 6', 
    'Fall 7', 'Fall 8', 'Fall 9', 'Fall 10', 'Fall 11', 'Fall 12'];

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
