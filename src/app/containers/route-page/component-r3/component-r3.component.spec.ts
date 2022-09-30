import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentR3Component } from './component-r3.component';

describe('ComponentR3Component', () => {
  let component: ComponentR3Component;
  let fixture: ComponentFixture<ComponentR3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentR3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentR3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
