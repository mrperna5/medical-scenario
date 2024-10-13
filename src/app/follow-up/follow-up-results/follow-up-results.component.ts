import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { MedicalOption } from "../../option.model";
import { ScenarioService } from "../../scenario.service";


@Component({
  selector: 'app-follow-up-results',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './follow-up-results.component.html',
  styleUrl: './follow-up-results.component.css'
})
export class FollowUpResultsComponent {
  selectedItems: MedicalOption[] = [];

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.selectedItems = this.scenarioService.getSelectedFollowUps();  // Get selected items
  }

  // Calculate total cost, doctor's time, and patient's time
  getTotalCost(): number {
    return this.selectedItems.reduce((sum, item) => sum + item.behandlungskosten, 0);
  }

  getTotalDoctorTime(): number {
    return this.selectedItems.reduce((sum, item) => sum + item.aerztlicheArbeitszeit, 0);
  }

  getTotalPatientTime(): number {
    return this.selectedItems.reduce((sum, item) => sum + item.behandlungszeit, 0);
  }
}