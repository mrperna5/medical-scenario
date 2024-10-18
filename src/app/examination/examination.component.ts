import { Component, OnInit } from '@angular/core';
import { MedicalOption } from '../scenario/scenario-data/medical-option.model';
import { ScenarioService } from '../scenario.service';
import { RoundSelectionComponent } from "../shared/round-selection/round-selection.component";

@Component({
  selector: 'app-examination',
  standalone: true,
  imports: [RoundSelectionComponent],
  templateUrl: './examination.component.html',
  styleUrl: './examination.component.css'
})
export class ExaminationComponent implements OnInit{
  examinations: MedicalOption[] = [];

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.examinations = this.scenarioService.getExaminations();
  }
}