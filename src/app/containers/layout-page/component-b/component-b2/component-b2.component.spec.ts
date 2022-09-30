import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentB2Component } from './component-b2.component';

describe('ComponentB2Component', () => {
  let component: ComponentB2Component;
  let fixture: ComponentFixture<ComponentB2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentB2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
