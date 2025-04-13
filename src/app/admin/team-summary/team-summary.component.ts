import { Component, inject, OnInit, signal } from '@angular/core';
import { ControlService } from '../../control.service';
import { TeamSummary } from '../../scenario/scenario-data/team-summary.model';

@Component({
  selector: 'app-team-summary',
  standalone: true,
  imports: [],
  templateUrl: './team-summary.component.html',
  styleUrl: './team-summary.component.css'
})
export class TeamSummaryComponent implements OnInit {
  private controlService = inject(ControlService);
  summaries = signal<TeamSummary[]>([]);

  ngOnInit(): void {
    this.controlService.getAllSummaries().subscribe(data => {
      this.summaries.set(data);
    });
  }
}