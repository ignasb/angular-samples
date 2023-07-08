import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjectionMultipleSlotComponent } from './content-projection-multiple-slot.component';

describe('ContentProjectionMultipleSlotComponent', () => {
  let component: ContentProjectionMultipleSlotComponent;
  let fixture: ComponentFixture<ContentProjectionMultipleSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentProjectionMultipleSlotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentProjectionMultipleSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
