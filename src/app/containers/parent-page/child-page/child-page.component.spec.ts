import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPageComponent } from './child-page.component';

describe('ChildPageComponent', () => {
  let component: ChildPageComponent;
  let fixture: ComponentFixture<ChildPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
