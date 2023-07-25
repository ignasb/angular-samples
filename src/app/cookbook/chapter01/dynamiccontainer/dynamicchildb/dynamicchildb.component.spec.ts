import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicchildbComponent } from './dynamicchildb.component';

describe('DynamicchildbComponent', () => {
  let component: DynamicchildbComponent;
  let fixture: ComponentFixture<DynamicchildbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicchildbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicchildbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
