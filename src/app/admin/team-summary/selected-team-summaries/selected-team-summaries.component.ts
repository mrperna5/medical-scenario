import { Component, inject } from '@angular/core';
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { ControlService } from "../../../control.service";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-selected-team-summaries',
  standalone: true,
  imports: [CommonModule, TableModule, RouterLink],
  templateUrl: './selected-team-summaries.component.html',
  styleUrl: './selected-team-summaries.component.css'
})
export class SelectedTeamSummariesComponent {
  private controlService = inject(ControlService); // shared service
  selectedSummaries = this.controlService.getSelectedSummaries(); // returns signal<TeamSummary[]>
}
