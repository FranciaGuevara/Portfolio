import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PRPlanComponent } from './prplan.component';

describe('PRPlanComponent', () => {
  let component: PRPlanComponent;
  let fixture: ComponentFixture<PRPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PRPlanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PRPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
