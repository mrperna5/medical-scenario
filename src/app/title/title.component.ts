import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  
private router = inject(Router);

  navigateToIntroductionAndClearLocalStorage(): void {
    localStorage.clear()
    this.router.navigate(['/team-management']);
  }
}
