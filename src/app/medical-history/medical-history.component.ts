import { Component, inject, OnInit } from '@angular/core';
import { MedicalOption } from '../option.model';
import { ScenarioService } from '../scenario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical-history',
  standalone: true,
  imports: [],
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.css'
})
export class MedicalHistoryComponent implements OnInit {
  medicalHistories: MedicalOption[] = [];
  selectedItemsMap: { [key: string]: boolean } = {};  // Track checkbox states
  private router = inject(Router)

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.medicalHistories = this.scenarioService.getMedicalHistories();
  }

  // Handle checkbox changes by updating temporary state
  onSelectionChange(item: MedicalOption, event: any): void {
    this.selectedItemsMap[item.code] = event.target.checked;
  }

  // On form submission, collect the selected items and save them
  onSubmit(): void {
    const selectedItems = this.medicalHistories.filter(item => this.selectedItemsMap[item.code]);
    this.scenarioService.saveSelectedHistories(selectedItems);
    console.log('Selected items saved:', selectedItems);

    // Navigate to the summary page
    this.router.navigate(['/medical-history-results']);
  }

  // Get the saved selected items (for display or review)
  getSavedSelections(): MedicalOption[] {
    return this.scenarioService.getSelectedHistories();
  }
}
