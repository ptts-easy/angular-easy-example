import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookPageComponent } from './hook-page.component';

describe('HookPageComponent', () => {
  let component: HookPageComponent;
  let fixture: ComponentFixture<HookPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
