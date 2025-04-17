import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from '../control.service';
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [DialogModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {

  private router = inject(Router);
  private controlService = inject(ControlService);
  showPasswordDialog = signal(false);
  passwordInput = signal('');
  errorMessage = signal('');

  ngOnInit(): void {
    this.controlService.loadPasswords();
  }

  navigateToIntroductionAndClearLocalStorage(): void {
    localStorage.clear();
    this.router.navigate(['/team-management']);
  }

  navigateToAdmin(): void {
    this.passwordInput.set('');
    this.errorMessage.set('');
    this.showPasswordDialog.set(true);
  }

  verifyPassword(): void {
    const entered = this.passwordInput();
    const correct = this.controlService.getPassword('admin');

    if (entered === correct) {
      this.showPasswordDialog.set(false);
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage.set('Falsches Passwort!');
    }
  }

  get passwordDialogVisible(): boolean {
    return this.showPasswordDialog();
  }

  set passwordDialogVisible(value: boolean) {
    this.showPasswordDialog.set(value);
  }


}
