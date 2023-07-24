import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettergetterComponent } from './settergetter.component';

describe('SettergetterComponent', () => {
  let component: SettergetterComponent;
  let fixture: ComponentFixture<SettergetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettergetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettergetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
