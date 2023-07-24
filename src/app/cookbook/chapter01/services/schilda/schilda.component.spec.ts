import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchildaComponent } from './schilda.component';

describe('SchildaComponent', () => {
  let component: SchildaComponent;
  let fixture: ComponentFixture<SchildaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchildaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchildaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
