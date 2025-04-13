import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MedicalOption } from "../../scenario/scenario-data/medical-option.model";
import { ScenarioService } from "../../scenario.service";
import { RoundResultsComponent } from "../../shared/round-results/round-results.component";


@Component({
  selector: 'app-follow-up-results',
  standalone: true,
  imports: [CommonModule, RoundResultsComponent],
  templateUrl: './follow-up-results.component.html',
  styleUrl: './follow-up-results.component.css'
})
export class FollowUpResultsComponent {
  selectedItems: MedicalOption[] = [];

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.selectedItems = this.scenarioService.getSelectedFollowUps(); 
  }
}