import { Component } from '@angular/core';
import { MedicalOption } from '../../scenario/scenario-data/medical-option.model';
import { ScenarioService } from '../../scenario.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RoundResultsComponent } from '../../shared/round-results/round-results.component';

@Component({
  selector: 'app-laboratory-results',
  standalone: true,
  imports: [CommonModule, RouterLink, RoundResultsComponent],
  templateUrl: './laboratory-results.component.html',
  styleUrl: './laboratory-results.component.css',
})
export class LaboratoryResultsComponent {
  selectedItems: MedicalOption[] = [];

  constructor(private scenarioService: ScenarioService) {}

  ngOnInit(): void {
    this.selectedItems = this.scenarioService.getSelectedLaboratories();
  }
}
