import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from '../control.service';
import { DialogModule } from "primeng/dialog";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { ScenarioService } from "../scenario.service";

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
  private scenarioService = inject(ScenarioService);
  showPasswordDialog = signal(false);
  passwordInput = signal('');
  errorMessage = signal('');
  isAdminLogin = signal(false);

  ngOnInit(): void {
    this.controlService.loadPasswords();
  }

  navigateToIntroductionAndClearLocalStorage(): void {
    this.passwordInput.set('');
    this.errorMessage.set('');
    this.isAdminLogin.set(false);
    this.showPasswordDialog.set(true);
  }

  navigateToAdmin(): void {
    this.passwordInput.set('');
    this.errorMessage.set('');
    this.isAdminLogin.set(true);
    this.showPasswordDialog.set(true);
  }

  verifyPassword(): void {
    const entered = this.passwordInput();
    const correct = this.isAdminLogin() ? this.controlService.getPassword('admin')
      : this.controlService.getPassword('student');

    if (entered === correct) {
      this.showPasswordDialog.set(false);
      if (this.isAdminLogin()) {
        this.router.navigate(['/admin']);
      } else {
        this.scenarioService.resetGame();
        this.router.navigate(['/team-management']);
      }
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
