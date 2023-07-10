import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaggeredAnimatedListComponent } from './staggered-animated-list.component';

describe('StaggeredAnimatedListComponent', () => {
  let component: StaggeredAnimatedListComponent;
  let fixture: ComponentFixture<StaggeredAnimatedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaggeredAnimatedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaggeredAnimatedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
