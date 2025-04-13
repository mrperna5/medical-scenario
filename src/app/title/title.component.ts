import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {
  
private router = inject(Router);
private passwordService = inject(ControlService);

ngOnInit(): void {
  this.passwordService.loadPasswords();
}

  navigateToIntroductionAndClearLocalStorage(): void {
    localStorage.clear()
    this.router.navigate(['/team-management']);
  }

  navigateToProfessor(): void {
    const password = prompt('Bitte geben Sie das Passwort ein:');
  
    const correctPassword = this.passwordService.getPassword('admin');
  
    if (password === correctPassword) {
      this.router.navigate(['/admin']);
    } else {
      alert('Falsches Passwort!');
    }
  }
}
