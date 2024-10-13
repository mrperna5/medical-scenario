import { Component } from '@angular/core';
import { MedicalOption } from '../../option.model';
import { ScenarioService } from '../../scenario.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-laboratory-results',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './laboratory-results.component.html',
  styleUrl: './laboratory-results.component.css'
})
export class LaboratoryResultsComponent {
  selectedItems: MedicalOption[] = [];

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.selectedItems = this.scenarioService.getSelectedLaboratories();  // Get selected items
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