import { Component, OnInit } from '@angular/core';
import { MedicalOption } from '../scenario/scenario-data/medical-option.model';
import { ScenarioService } from '../scenario.service';
import { RoundSelectionComponent } from '../shared/round-selection/round-selection.component';

@Component({
  selector: 'app-medical-history',
  standalone: true,
  imports: [RoundSelectionComponent],
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.css',
})
export class MedicalHistoryComponent implements OnInit {
  medicalHistories: MedicalOption[] = [];

  constructor(private scenarioService: ScenarioService) {}

  ngOnInit(): void {
    this.medicalHistories = this.scenarioService.getMedicalHistories();
  }
}
