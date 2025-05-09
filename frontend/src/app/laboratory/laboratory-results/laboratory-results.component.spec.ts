import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryResultsComponent } from './laboratory-results.component';

describe('LaboratoryResultsComponent', () => {
  let component: LaboratoryResultsComponent;
  let fixture: ComponentFixture<LaboratoryResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaboratoryResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaboratoryResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
