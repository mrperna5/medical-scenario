import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryDiagnosisComponent } from './medical-history-diagnosis.component';

describe('MedicalHistoryDiagnosisComponent', () => {
  let component: MedicalHistoryDiagnosisComponent;
  let fixture: ComponentFixture<MedicalHistoryDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalHistoryDiagnosisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalHistoryDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
