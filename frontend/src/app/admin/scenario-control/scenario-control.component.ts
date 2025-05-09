import { Component, inject, OnInit, signal } from '@angular/core';
import { ControlService } from '../../control.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-scenario-control',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './scenario-control.component.html',
  styleUrl: './scenario-control.component.css'
})
export class ScenarioControlComponent implements OnInit {
  private controlService = inject(ControlService);
  scenarioStates = signal<{ id: number; unlocked: boolean }[]>([]);
  scenarioLabels = ['Fall 1', 'Fall 2', 'Fall 3', 'Fall 4', 'Fall 5', 'Fall 6',
                    'Fall 7', 'Fall 8', 'Fall 9', 'Fall 10', 'Fall 11', 'Fall 12'];

  ngOnInit(): void {
    this.controlService.getAllControls().subscribe(states => {
      this.scenarioStates.set(states);
    });
  }

  toggleUnlock(id: number, current: boolean): void {
    this.controlService.updateControl(id, !current).subscribe(updated => {
      this.scenarioStates.set(this.scenarioStates().map(s =>
        s.id === updated.id ? updated : s
      ));
    });
  }

  get sortedScenarioStates() {
    return this.scenarioStates().slice().sort((a, b) => a.id - b.id);
  }
}
