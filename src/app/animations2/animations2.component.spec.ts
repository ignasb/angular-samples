import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animations2Component } from './animations2.component';

describe('Animations2Component', () => {
  let component: Animations2Component;
  let fixture: ComponentFixture<Animations2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Animations2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animations2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
