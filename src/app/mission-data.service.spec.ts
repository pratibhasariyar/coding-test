import { TestBed } from '@angular/core/testing';

import { MissionDataService } from './mission-data.service';

describe('MissionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissionDataService = TestBed.get(MissionDataService);
    expect(service).toBeTruthy();
  });
});
