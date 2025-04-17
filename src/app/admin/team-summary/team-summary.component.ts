import { Component, inject, OnInit, signal } from '@angular/core';
import { ControlService } from '../../control.service';
import { TeamSummary } from '../../scenario/scenario-data/team-summary.model';
import { CurrencyPipe } from '@angular/common';
import { TableModule } from "primeng/table";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-team-summary',
  standalone: true,
  imports: [CurrencyPipe, TableModule, RouterLink],
  templateUrl: './team-summary.component.html',
  styleUrl: './team-summary.component.css'
})
export class TeamSummaryComponent implements OnInit {
  private controlService = inject(ControlService);
  private router = inject(Router)
  summaries = signal<TeamSummary[]>([]);
  selectedSummaries = signal<TeamSummary[]>([]);

  ngOnInit(): void {
    this.controlService.getAllSummaries().subscribe(data => {
      this.summaries.set(data);
    });
  }

  goToSelected(): void {
    this.controlService.setSelectedSummaries(this.selectedSummaries());
    this.router.navigate(['/admin/team-summary/selected-team-summaries']);
  }
}
