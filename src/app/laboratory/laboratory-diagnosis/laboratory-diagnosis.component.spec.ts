import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryDiagnosisComponent } from './laboratory-diagnosis.component';

describe('LaboratoryDiagnosisComponent', () => {
  let component: LaboratoryDiagnosisComponent;
  let fixture: ComponentFixture<LaboratoryDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryDiagnosisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoryDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
