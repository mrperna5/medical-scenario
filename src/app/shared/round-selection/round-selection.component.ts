import { Component, inject, input, OnInit, output } from '@angular/core';
import { MedicalOption } from '../../scenario/scenario-data/medical-option.model';
import { Router } from '@angular/router';
import { ScenarioService } from '../../scenario.service';

@Component({
  selector: 'app-round-selection',
  standalone: true,
  imports: [],
  templateUrl: './round-selection.component.html',
  styleUrl: './round-selection.component.css',
})
export class RoundSelectionComponent implements OnInit {
  constructor(private scenarioService: ScenarioService) {}

  selectedItemsMap: { [key: string]: boolean } = {};

  isLocked = false;

  title = input.required();
  items = input.required<MedicalOption[]>();
  selectionChange = output<{ [key: string]: boolean }>();
  roundName = input.required<'medical-history' | 'laboratory' | 'examination' | 'follow-up'>()

  navigateTo = input<string>();
  private router = inject(Router);

  ngOnInit() {
    this.isLocked = this.scenarioService.isPhaseLocked(this.roundName() + '-selection');

    let previouslySelectedItems: MedicalOption[] = [];
    switch (this.roundName()) {
      case 'medical-history':
        previouslySelectedItems = this.scenarioService.getSelectedHistories();
        break;
      case 'laboratory':
        previouslySelectedItems = this.scenarioService.getSelectedLaboratories();
        break;
      case 'examination':
        previouslySelectedItems = this.scenarioService.getSelectedExaminations();
        break;
      case 'follow-up':
        previouslySelectedItems = this.scenarioService.getSelectedFollowUps();
        break;
    }

    previouslySelectedItems.forEach((item) => {
      this.selectedItemsMap[item.code] = true;
    });
  }

  onSelectionChange(item: MedicalOption, event: any): void {
    if (!this.isLocked) {
      this.selectedItemsMap[item.code] = event.target.checked;
      this.selectionChange.emit(this.selectedItemsMap);
    }
  }

  onSubmit(): void {
    if (this.isLocked) {
      if (this.navigateTo()) {
        this.router.navigate([this.navigateTo()]);
      }
    } else {
      const selectedItems = this.items().filter(
        (item) => this.selectedItemsMap[item.code]
      );

      if (selectedItems.length === 0) {
        alert('Bitte wählen Sie mindestens ein Kästchen aus, bevor Sie fortfahren.');
        return;
      }

      switch (this.roundName()) {
        case 'medical-history':
          this.scenarioService.saveSelectedHistories(selectedItems);
          break;
        case 'laboratory':
          this.scenarioService.saveSelectedLaboratories(selectedItems);
          break;
        case 'examination':
          this.scenarioService.saveSelectedExaminations(selectedItems);
          break;
        case 'follow-up':
          this.scenarioService.saveSelectedFollowUps(selectedItems);
          break;
        default:
          throw new Error('Invalid round name');
      }
  
      this.scenarioService.lockPhase(this.roundName() + '-selection');
      this.isLocked = true;
  
      if (this.navigateTo()) {
        this.router.navigate([this.navigateTo()]);
      }
    }
  }
}
