import { Component, OnInit } from '@angular/core';
import { MedicalOption } from '../scenario/scenario-data/medical-option.model';
import { ScenarioService } from '../scenario.service';
import { RoundSelectionComponent } from "../shared/round-selection/round-selection.component";

@Component({
  selector: 'app-laboratory',
  standalone: true,
  imports: [RoundSelectionComponent],
  templateUrl: './laboratory.component.html',
  styleUrl: './laboratory.component.css'
})
export class LaboratoryComponent implements OnInit{
  laboratories: MedicalOption[] = [];

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.laboratories = this.scenarioService.getLaboratories();
  }
}