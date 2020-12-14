import { TestBed } from '@angular/core/testing';

import { RestApiCommunicationService } from './rest-api-communication.service';

describe('RestApiCommunicationService', () => {
  let service: RestApiCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestApiCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
