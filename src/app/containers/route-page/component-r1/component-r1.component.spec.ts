import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentR1Component } from './component-r1.component';

describe('ComponentR1Component', () => {
  let component: ComponentR1Component;
  let fixture: ComponentFixture<ComponentR1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentR1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentR1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
