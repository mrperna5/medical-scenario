import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalOption } from '../option.model';
import { ScenarioService } from '../scenario.service';

@Component({
  selector: 'app-laboratory',
  standalone: true,
  imports: [],
  templateUrl: './laboratory.component.html',
  styleUrl: './laboratory.component.css'
})
export class LaboratoryComponent {
  laboratories: MedicalOption[] = [];
  selectedItemsMap: { [key: string]: boolean } = {};  // Track checkbox states
  private router = inject(Router)

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.laboratories = this.scenarioService.getLaboratories();
  }

  // Handle checkbox changes by updating temporary state
  onSelectionChange(item: MedicalOption, event: any): void {
    this.selectedItemsMap[item.code] = event.target.checked;
  }

  // On form submission, collect the selected items and save them
  onSubmit(): void {
    const selectedItems = this.laboratories.filter(item => this.selectedItemsMap[item.code]);
    this.scenarioService.saveSelectedLaboratories(selectedItems);
    console.log('Selected items saved:', selectedItems);

    // Navigate to the summary page
    this.router.navigate(['/laboratory-results']);
  }

  // Get the saved selected items (for display or review)
  getSavedSelections(): MedicalOption[] {
    return this.scenarioService.getSelectedLaboratories();
  }
}