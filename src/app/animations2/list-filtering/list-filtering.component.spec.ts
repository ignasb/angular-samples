import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFilteringComponent } from './list-filtering.component';

describe('ListFilteringComponent', () => {
  let component: ListFilteringComponent;
  let fixture: ComponentFixture<ListFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFilteringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
