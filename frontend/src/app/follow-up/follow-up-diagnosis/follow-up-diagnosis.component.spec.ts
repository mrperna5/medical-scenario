import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpDiagnosisComponent } from './follow-up-diagnosis.component';

describe('FollowUpDiagnosisComponent', () => {
  let component: FollowUpDiagnosisComponent;
  let fixture: ComponentFixture<FollowUpDiagnosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowUpDiagnosisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowUpDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
