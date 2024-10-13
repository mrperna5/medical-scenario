import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MedicalHistoryComponent } from "./medical-history/medical-history.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MedicalHistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'medical-scenario';
}
