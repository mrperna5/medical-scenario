import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationDiagnosisComponent } from './examination-diagnosis.component';

describe('ExaminationDiagnosisComponent', () => {
  let component: ExaminationDiagnosisComponent;
  let fixture: ComponentFixture<ExaminationDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExaminationDiagnosisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExaminationDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
