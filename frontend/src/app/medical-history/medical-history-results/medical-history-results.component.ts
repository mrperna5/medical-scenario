import { Component, OnInit } from '@angular/core';
import { MedicalOption } from '../../scenario/scenario-data/medical-option.model';
import { ScenarioService } from '../../scenario.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RoundResultsComponent } from "../../shared/round-results/round-results.component";

@Component({
  selector: 'app-medical-history-results',
  standalone: true,
  imports: [CommonModule, RouterLink, RoundResultsComponent],
  templateUrl: './medical-history-results.component.html',
  styleUrl: './medical-history-results.component.css'
})
export class MedicalHistoryResultsComponent implements OnInit {
  selectedItems: MedicalOption[] = [];

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.selectedItems = this.scenarioService.getSelectedHistories(); 
  }
}