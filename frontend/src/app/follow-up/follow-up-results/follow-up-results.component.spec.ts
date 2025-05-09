import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpResultsComponent } from './follow-up-results.component';

describe('FollowUpResultsComponent', () => {
  let component: FollowUpResultsComponent;
  let fixture: ComponentFixture<FollowUpResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FollowUpResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowUpResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
