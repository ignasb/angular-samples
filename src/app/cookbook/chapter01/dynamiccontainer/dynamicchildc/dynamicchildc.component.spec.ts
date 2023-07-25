import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicchildcComponent } from './dynamicchildc.component';

describe('DynamicchildcComponent', () => {
  let component: DynamicchildcComponent;
  let fixture: ComponentFixture<DynamicchildcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicchildcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicchildcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
