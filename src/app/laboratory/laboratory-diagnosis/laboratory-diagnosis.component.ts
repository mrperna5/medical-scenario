import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoundDiagnosisComponent } from "../../shared/round-diagnosis/round-diagnosis.component";

@Component({
  selector: 'app-laboratory-diagnosis',
  standalone: true,
  imports: [FormsModule, RoundDiagnosisComponent],
  templateUrl: './laboratory-diagnosis.component.html',
  styleUrl: './laboratory-diagnosis.component.css'
})
export class LaboratoryDiagnosisComponent {
  laboratoryDiagnosisGuesses: string[] = ['', '', '', '', ''];  // Array to store guesses
}