import { TestBed } from '@angular/core/testing';

import PhotoService from './photo.service';

describe('PhotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoService = TestBed.get(PhotoService);
    expect(service).toBeTruthy();
  });

  it('should return 50 photos', async() => {
    const service: PhotoService = TestBed.get(PhotoService);
    const photos = await service.getPhotos();
    expect(photos.length).toEqual(50);
  });
});
