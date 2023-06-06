import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SMProposalComponent } from './smproposal.component';

describe('SMProposalComponent', () => {
  let component: SMProposalComponent;
  let fixture: ComponentFixture<SMProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SMProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SMProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
