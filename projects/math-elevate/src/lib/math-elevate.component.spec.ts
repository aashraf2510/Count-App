import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathElevateComponent } from './math-elevate.component';

describe('MathElevateComponent', () => {
  let component: MathElevateComponent;
  let fixture: ComponentFixture<MathElevateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathElevateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathElevateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
