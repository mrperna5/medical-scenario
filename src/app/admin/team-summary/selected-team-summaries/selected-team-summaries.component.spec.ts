import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedTeamSummariesComponent } from './selected-team-summaries.component';

describe('SelectedTeamSummariesComponent', () => {
  let component: SelectedTeamSummariesComponent;
  let fixture: ComponentFixture<SelectedTeamSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedTeamSummariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedTeamSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
