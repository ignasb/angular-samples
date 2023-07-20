import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFiltering2Component } from './list-filtering2.component';

describe('ListFiltering2Component', () => {
  let component: ListFiltering2Component;
  let fixture: ComponentFixture<ListFiltering2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFiltering2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFiltering2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
