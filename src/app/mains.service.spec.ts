import { TestBed } from '@angular/core/testing';

import { MainsService } from './mains.service';

describe('MainsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainsService = TestBed.get(MainsService);
    expect(service).toBeTruthy();
  });
});
