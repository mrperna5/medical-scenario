import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHistoryResultsComponent } from './medical-history-results.component';

describe('MedicalHistoryResultsComponent', () => {
  let component: MedicalHistoryResultsComponent;
  let fixture: ComponentFixture<MedicalHistoryResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalHistoryResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalHistoryResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
