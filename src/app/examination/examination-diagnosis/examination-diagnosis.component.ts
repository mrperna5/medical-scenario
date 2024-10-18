import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoundDiagnosisComponent } from '../../shared/round-diagnosis/round-diagnosis.component';

@Component({
  selector: 'app-examination-diagnosis',
  standalone: true,
  imports: [FormsModule, RoundDiagnosisComponent],
  templateUrl: './examination-diagnosis.component.html',
  styleUrl: './examination-diagnosis.component.css',
})
export class ExaminationDiagnosisComponent {
  examinationDiagnosisGuesses: string[] = ['', '', '', '', ''];
}
