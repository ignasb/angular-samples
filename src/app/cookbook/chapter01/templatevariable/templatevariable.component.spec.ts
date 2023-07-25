import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatevariableComponent } from './templatevariable.component';

describe('TemplatevariableComponent', () => {
  let component: TemplatevariableComponent;
  let fixture: ComponentFixture<TemplatevariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatevariableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatevariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
