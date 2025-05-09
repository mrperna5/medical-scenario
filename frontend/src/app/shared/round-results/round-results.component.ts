import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { MedicalOption } from '../../scenario/scenario-data/medical-option.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-round-results',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './round-results.component.html',
  styleUrl: './round-results.component.css',
})
export class RoundResultsComponent {
  title = input.required<string>();
  selectedItems = input.required<MedicalOption[]>();
  navigateTo = input.required<string>();

  getTotalCost(): number {
    return this.selectedItems().reduce(
      (sum, item) => sum + item.behandlungskosten,
      0
    );
  }

  getTotalDoctorTime(): number {
    return this.selectedItems().reduce(
      (sum, item) => sum + item.aerztlicheArbeitszeit,
      0
    );
  }

  getTotalPatientTime(): number {
    return this.selectedItems().reduce(
      (sum, item) => sum + item.behandlungszeit,
      0
    );
  }
}
