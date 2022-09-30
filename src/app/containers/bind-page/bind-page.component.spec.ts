import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindPageComponent } from './bind-page.component';

describe('BindPageComponent', () => {
  let component: BindPageComponent;
  let fixture: ComponentFixture<BindPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
