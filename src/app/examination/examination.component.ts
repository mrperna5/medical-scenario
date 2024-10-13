import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalOption } from '../option.model';
import { ScenarioService } from '../scenario.service';

@Component({
  selector: 'app-examination',
  standalone: true,
  imports: [],
  templateUrl: './examination.component.html',
  styleUrl: './examination.component.css'
})
export class ExaminationComponent {
  examinations: MedicalOption[] = [];
  selectedItemsMap: { [key: string]: boolean } = {};  // Track checkbox states
  private router = inject(Router)

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.examinations = this.scenarioService.getExaminations();
  }

  // Handle checkbox changes by updating temporary state
  onSelectionChange(item: MedicalOption, event: any): void {
    this.selectedItemsMap[item.code] = event.target.checked;
  }

  // On form submission, collect the selected items and save them
  onSubmit(): void {
    const selectedItems = this.examinations.filter(item => this.selectedItemsMap[item.code]);
    this.scenarioService.saveSelectedExaminations(selectedItems);
    console.log('Selected items saved:', selectedItems);

    // Navigate to the summary page
    this.router.navigate(['/examination-results']);
  }

  // Get the saved selected items (for display or review)
  getSavedSelections(): MedicalOption[] {
    return this.scenarioService.getSelectedExaminations();
  }
}