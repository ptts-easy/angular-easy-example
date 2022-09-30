import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentR4Component } from './component-r4.component';

describe('ComponentR4Component', () => {
  let component: ComponentR4Component;
  let fixture: ComponentFixture<ComponentR4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentR4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentR4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
