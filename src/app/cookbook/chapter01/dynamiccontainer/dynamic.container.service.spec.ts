import { TestBed } from '@angular/core/testing';

import { DynamicContainerService } from './dynamic.container.service';

describe('DynamicContainerService', () => {
  let service: DynamicContainerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicContainerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
