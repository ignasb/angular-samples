import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputoutputComponent } from './inputoutput.component';

describe('InputoutputComponent', () => {
  let component: InputoutputComponent;
  let fixture: ComponentFixture<InputoutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputoutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
