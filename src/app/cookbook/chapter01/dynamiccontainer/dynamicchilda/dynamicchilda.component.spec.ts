import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicchildaComponent } from './dynamicchilda.component';

describe('DynamicchildaComponent', () => {
  let component: DynamicchildaComponent;
  let fixture: ComponentFixture<DynamicchildaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicchildaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicchildaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
