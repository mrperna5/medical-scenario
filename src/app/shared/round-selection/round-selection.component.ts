import { Component, inject, input, output } from '@angular/core';
import { MedicalOption } from '../../option.model';
import { Router } from '@angular/router';
import { ScenarioService } from '../../scenario.service';

@Component({
  selector: 'app-round-selection',
  standalone: true,
  imports: [],
  templateUrl: './round-selection.component.html',
  styleUrl: './round-selection.component.css',
})
export class RoundSelectionComponent {
  constructor(private scenarioService: ScenarioService) {}

  selectedItemsMap: { [key: string]: boolean } = {};

  title = input.required();
  items = input.required<MedicalOption[]>();
  selectionChange = output<{ [key: string]: boolean }>();
  roundName = input.required<'medical-history' | 'laboratory' | 'examination' | 'follow-up'>()

  navigateTo = input<string>();
  private router = inject(Router);

  onSelectionChange(item: MedicalOption, event: any): void {
    this.selectedItemsMap[item.code] = event.target.checked;

    this.selectionChange.emit(this.selectedItemsMap);
  }

  onSubmit(): void {
    const selectedItems = this.items().filter(
      (item) => this.selectedItemsMap[item.code]
    );
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

    if (this.navigateTo()) {
      this.router.navigate([this.navigateTo()]);
    }
  }
}
