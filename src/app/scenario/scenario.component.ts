import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scenario',
  standalone: true,
  imports: [],
  templateUrl: './scenario.component.html',
  styleUrl: './scenario.component.css'
})
export class ScenarioComponent {

  constructor(private router: Router) { }

  startScenario(): void {
    this.router.navigate(['/medical-history']);
  }
}