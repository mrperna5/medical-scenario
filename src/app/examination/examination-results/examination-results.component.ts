import { Component } from '@angular/core';
import { MedicalOption } from '../../option.model';
import { ScenarioService } from '../../scenario.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-examination-results',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './examination-results.component.html',
  styleUrl: './examination-results.component.css'
})
export class ExaminationResultsComponent {
  selectedItems: MedicalOption[] = [];

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.selectedItems = this.scenarioService.getSelectedExaminations();  // Get selected items
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