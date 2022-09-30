import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivePageComponent } from './directive-page.component';

describe('DirectivePageComponent', () => {
  let component: DirectivePageComponent;
  let fixture: ComponentFixture<DirectivePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
