import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoundDiagnosisComponent } from "../../shared/round-diagnosis/round-diagnosis.component";

@Component({
  selector: 'app-follow-up-diagnosis',
  standalone: true,
  imports: [FormsModule, RoundDiagnosisComponent],
  templateUrl: './follow-up-diagnosis.component.html',
  styleUrl: './follow-up-diagnosis.component.css'
})
export class FollowUpDiagnosisComponent {
  followUpDiagnosisGuesses: string[] = ['', '', '', '', ''];  // Array to store guesses
}