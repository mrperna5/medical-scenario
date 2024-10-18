import { Component, OnInit } from '@angular/core';
import { MedicalOption } from '../scenario/scenario-data/medical-option.model';
import { ScenarioService } from '../scenario.service';
import { RoundSelectionComponent } from "../shared/round-selection/round-selection.component";

@Component({
  selector: 'app-follow-up',
  standalone: true,
  imports: [RoundSelectionComponent],
  templateUrl: './follow-up.component.html',
  styleUrl: './follow-up.component.css'
})
export class FollowUpComponent implements OnInit{
  followUps: MedicalOption[] = [];

  constructor(private scenarioService: ScenarioService) { }

  ngOnInit(): void {
    this.followUps = this.scenarioService.getFollowUps();
  }
}