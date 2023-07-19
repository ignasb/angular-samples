import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleButtonAnimationComponent } from './simple-button-animation.component';

describe('SimpleButtonAnimationComponent', () => {
  let component: SimpleButtonAnimationComponent;
  let fixture: ComponentFixture<SimpleButtonAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleButtonAnimationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleButtonAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
