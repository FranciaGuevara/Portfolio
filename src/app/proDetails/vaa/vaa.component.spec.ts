import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VAAComponent } from './vaa.component';

describe('VAAComponent', () => {
  let component: VAAComponent;
  let fixture: ComponentFixture<VAAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VAAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VAAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
