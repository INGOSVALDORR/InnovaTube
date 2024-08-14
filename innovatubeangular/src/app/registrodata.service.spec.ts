import { TestBed } from '@angular/core/testing';

import { RegistrodataService } from './registrodata.service';

describe('RegistrodataService', () => {
  let service: RegistrodataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrodataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
