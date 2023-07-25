import { TestBed } from '@angular/core/testing';

import { ComponentsLoaderService } from './components.loader.service';

describe('ComponentsLoaderService', () => {
  let service: ComponentsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
