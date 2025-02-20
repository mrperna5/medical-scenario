import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScenarioService } from '../scenario.service';

@Component({
  selector: 'app-scenario',
  standalone: true,
  imports: [],
  templateUrl: './scenario.component.html',
  styleUrl: './scenario.component.css'
})
export class ScenarioComponent implements OnInit{
  patientScenario: any;
  scenarioNumber!: number;

  private router = inject(Router);

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.patientScenario = this.scenarioService.getPatientScenario();
    this.scenarioNumber = this.scenarioService.getSelectedScenario();
  }

  startScenario(): void {
    this.router.navigate(['/medical-history']);
  }
}