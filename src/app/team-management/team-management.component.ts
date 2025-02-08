import { Component, inject, input, OnInit, output, signal, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ScenarioService } from '../scenario.service';

@Component({
  selector: 'app-team-management',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './team-management.component.html',
  styleUrl: './team-management.component.css',
})
export class TeamManagementComponent implements OnInit {
  private router = inject(Router);
  private scenarioService = inject(ScenarioService)

  teamName = signal<string>('');
  teamPlaceholder = signal<string>('');
  teamMembers = signal<string[]>([]);
  newMember = signal<string>('');

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

  get teamNameValue(): string {
    return this.teamName(); // Read from the signal
  }

  set teamNameValue(value: string) {
    this.teamName.set(value); // Update the signal
  }

  get newMemberValue(): string {
    return this.newMember();
  }

  set newMemberValue(value: string) {
    this.newMember.set(value)
  }

  ngOnInit(): void {
    this.teamPlaceholder.set(this.teamNames[Math.floor(Math.random() * this.teamNames.length)])      
    const savedTeamName = this.scenarioService.getTeamName();
    if (savedTeamName) {
      this.teamName.set(savedTeamName);
      this.teamMembers.set(this.scenarioService.getTeamMembers(this.teamName()));
    }
  }

  onSubmit(): void {
    if (!this.teamName() || this.teamName().trim() === '' || this.teamMembers().length === 0) {
      alert('Bitte geben Sie einen gültigen Teamnamen ein!'); // Display an alert or validation message
      return; // Prevent submission
    }
    this.scenarioService.saveTeamName(this.teamName().trim());
    this.teamMembers.set(this.scenarioService.getTeamMembers(this.teamName()));
    this.router.navigate(['/introduction']);
  }

  addMember(memberName: string): void {
    if (!memberName || memberName.trim() === '') return;
    this.scenarioService.addTeamMember(this.teamName(), memberName.trim());
    this.teamMembers.set(this.scenarioService.getTeamMembers(this.teamName()));
    this.newMember.set(''); 
  }

  removeMember(memberName: string): void {
    this.teamMembers.set(this.teamMembers().filter((member) => member !== memberName));
    this.scenarioService.saveTeamMembers(this.teamName(), this.teamMembers());
  }
  
}
