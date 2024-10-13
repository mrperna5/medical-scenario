import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MedicalOption } from '../option.model';
import { ScenarioService } from '../scenario.service';

@Component({
  selector: 'app-follow-up',
  standalone: true,
  imports: [],
  templateUrl: './follow-up.component.html',
  styleUrl: './follow-up.component.css'
})
export class FollowUpComponent {
  followUps: MedicalOption[] = [];
  selectedItemsMap: { [key: string]: boolean } = {};  // Track checkbox states
  private router = inject(Router)

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.followUps = this.scenarioService.getFollowUps();
  }

  // Handle checkbox changes by updating temporary state
  onSelectionChange(item: MedicalOption, event: any): void {
    this.selectedItemsMap[item.code] = event.target.checked;
  }

  // On form submission, collect the selected items and save them
  onSubmit(): void {
    const selectedItems = this.followUps.filter(item => this.selectedItemsMap[item.code]);
    this.scenarioService.saveSelectedFollowUps(selectedItems);
    console.log('Selected items saved:', selectedItems);

    // Navigate to the summary page
    this.router.navigate(['/follow-up-results']);
  }

  // Get the saved selected items (for display or review)
  getSavedSelections(): MedicalOption[] {
    return this.scenarioService.getSelectedFollowUps();
  }
}