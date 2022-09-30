import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentR5Component } from './component-r5.component';

describe('ComponentR5Component', () => {
  let component: ComponentR5Component;
  let fixture: ComponentFixture<ComponentR5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentR5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentR5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
