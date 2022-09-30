import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentR2Component } from './component-r2.component';

describe('ComponentR2Component', () => {
  let component: ComponentR2Component;
  let fixture: ComponentFixture<ComponentR2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentR2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentR2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
