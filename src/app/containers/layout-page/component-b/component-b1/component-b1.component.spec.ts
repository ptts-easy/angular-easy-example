import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentB1Component } from './component-b1.component';

describe('ComponentB1Component', () => {
  let component: ComponentB1Component;
  let fixture: ComponentFixture<ComponentB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentB1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
