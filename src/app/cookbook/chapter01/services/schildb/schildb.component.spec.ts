import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchildbComponent } from './schildb.component';

describe('SchildbComponent', () => {
  let component: SchildbComponent;
  let fixture: ComponentFixture<SchildbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchildbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchildbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
