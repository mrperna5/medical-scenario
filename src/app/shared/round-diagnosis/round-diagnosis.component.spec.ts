import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundDiagnosisComponent } from './round-diagnosis.component';

describe('RoundDiagnosisComponent', () => {
  let component: RoundDiagnosisComponent;
  let fixture: ComponentFixture<RoundDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoundDiagnosisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoundDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
