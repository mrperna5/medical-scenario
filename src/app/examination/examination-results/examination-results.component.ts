import { Component } from '@angular/core';
import { MedicalOption } from '../../scenario/scenario-data/medical-option.model';
import { ScenarioService } from '../../scenario.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RoundResultsComponent } from "../../shared/round-results/round-results.component";

@Component({
  selector: 'app-examination-results',
  standalone: true,
  imports: [CommonModule, RouterLink, RoundResultsComponent],
  templateUrl: './examination-results.component.html',
  styleUrl: './examination-results.component.css'
})
export class ExaminationResultsComponent {
  selectedItems: MedicalOption[] = [];

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.selectedItems = this.scenarioService.getSelectedExaminations(); 
  }
}