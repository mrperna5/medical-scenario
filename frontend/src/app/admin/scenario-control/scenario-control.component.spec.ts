import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioControlComponent } from './scenario-control.component';

describe('ScenarioControlComponent', () => {
  let component: ScenarioControlComponent;
  let fixture: ComponentFixture<ScenarioControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenarioControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenarioControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
