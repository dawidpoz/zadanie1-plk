import { TestBed } from '@angular/core/testing';

import { RemoveDiacriticsService } from './remove-diacritics.service';

describe('RemoveDiacriticsService', () => {
  let service: RemoveDiacriticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveDiacriticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
