import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOutputPageComponent } from './input-output-page.component';

describe('InputOutputPageComponent', () => {
  let component: InputOutputPageComponent;
  let fixture: ComponentFixture<InputOutputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputOutputPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputOutputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
