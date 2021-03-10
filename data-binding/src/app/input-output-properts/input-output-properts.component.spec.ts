import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputPropertsComponent } from './input-output-properts.component';

describe('InputOutputPropertsComponent', () => {
  let component: InputOutputPropertsComponent;
  let fixture: ComponentFixture<InputOutputPropertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputPropertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOutputPropertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
