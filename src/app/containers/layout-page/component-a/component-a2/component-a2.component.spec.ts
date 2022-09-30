import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentA2Component } from './component-a2.component';

describe('ComponentA2Component', () => {
  let component: ComponentA2Component;
  let fixture: ComponentFixture<ComponentA2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentA2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
