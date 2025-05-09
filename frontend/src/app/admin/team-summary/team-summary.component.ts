import { Component, inject, OnInit, signal } from '@angular/core';
import { ControlService } from '../../control.service';
import { TeamSummary } from '../../scenario/scenario-data/team-summary.model';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { TableModule } from "primeng/table";
import { Router, RouterLink } from "@angular/router";
import { Button, ButtonModule } from "primeng/button";
import { Dialog } from "primeng/dialog";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-team-summary',
  standalone: true,
  imports: [CurrencyPipe, TableModule, RouterLink, DatePipe, Button, Dialog, FormsModule, ButtonModule],
  templateUrl: './team-summary.component.html',
  styleUrl: './team-summary.component.css'
})
export class TeamSummaryComponent implements OnInit {
  private controlService = inject(ControlService);
  private router = inject(Router)

  passwordInput = signal('');
  errorMessage = signal('');
  showPasswordDialog = signal(false);



  cols = [
    { field: 'completedDateTime', header: 'Datum' },
    { field: 'scenarioId',        header: 'Fall' },
    { field: 'teamName',          header: 'Team' },
    { field: 'teamMembers',       header: 'Mitglieder' },
    { field: 'finalDiagnosis',    header: 'Diagnose' },
    { field: 'finalTherapy',      header: 'Therapie' },
    { field: 'totalCost',         header: 'Kosten' },
    { field: 'totalDoctorTime',   header: 'Arztzeit' },
    { field: 'totalPatientTime',  header: 'Patientenzeit' },
  ];

  summaries = signal<TeamSummary[]>([]);
  selectedSummaries = signal<TeamSummary[]>([]);

  ngOnInit(): void {
    this.controlService.getAllSummaries().subscribe(data => {
      this.summaries.set(data);
    });
    this.controlService.loadPasswords();
  }

  promptDeletePassword(): void {
    this.passwordInput.set('');
    this.errorMessage.set('');
    this.showPasswordDialog.set(true);
  }

  verifyDeletePassword(): void {
    const entered = this.passwordInput();
    const correct = this.controlService.getPassword('delete')
    if (entered === correct) {
      this.showPasswordDialog.set(false);
      this.deleteSelectedSummaries();
    } else {
      this.errorMessage.set('Falsches Passwort!');
    }
  }


  goToSelected(): void {
    this.controlService.setSelectedSummaries(this.selectedSummaries());
    this.router.navigate(['/admin/team-summary/selected-team-summaries']);
  }

  deleteSelectedSummaries(): void {
    const selected = this.selectedSummaries();

    if (!selected || selected.length === 0) {
      return;
    }

    const ids = selected.map(s => s.id);
    console.log('Deleting summaries with IDs:', ids);

    this.controlService.deleteSummariesByIds(ids).subscribe({
      next: () => {
        const remainingSummaries = this.summaries().filter(
          summary => !selected.some(s => s.id === summary.id)
        );
        this.summaries.set(remainingSummaries);
        this.selectedSummaries.set([]);
      },
      error: err => {
        console.error('Error deleting summaries:', err);
        alert('Fehler beim Löschen der Team-Zusammenfassungen. Bitte versuchen Sie es erneut.');
      }
    });
  }

  get passwordDialogVisible(): boolean {
    return this.showPasswordDialog();
  }

  set passwordDialogVisible(value: boolean) {
    this.showPasswordDialog.set(value);
  }


}
