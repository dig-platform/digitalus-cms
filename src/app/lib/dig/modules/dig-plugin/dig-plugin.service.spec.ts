import { TestBed } from '@angular/core/testing';

import { DigPluginService } from './dig-plugin.service';

describe('DigPluginService', () => {
  let service: DigPluginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigPluginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
