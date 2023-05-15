import { TestBed } from '@angular/core/testing';

import { ImportationFilesService } from './importation-files.service';

describe('ImportationFilesService', () => {
  let service: ImportationFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImportationFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
