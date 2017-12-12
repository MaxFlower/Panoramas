import { TestBed, inject } from '@angular/core/testing';

import { PanoramaService } from './panorama.service';

describe('PanoramaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanoramaService]
    });
  });

  it('should be created', inject([PanoramaService], (service: PanoramaService) => {
    expect(service).toBeTruthy();
  }));
});
