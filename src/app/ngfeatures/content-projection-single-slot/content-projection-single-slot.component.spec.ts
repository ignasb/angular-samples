import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionSingleSlotComponent } from './content-projection-single-slot.component';

describe('ContentProjectionSingleSlotComponent', () => {
  let component: ContentProjectionSingleSlotComponent;
  let fixture: ComponentFixture<ContentProjectionSingleSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectionSingleSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjectionSingleSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
