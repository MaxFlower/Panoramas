import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PanoramaService } from './panorama.service';
import { AppConfig } from '../app-config';
import { Panorama } from '../difinitions/panorama';

describe('PanoramaService', () => {
  let panoramasArray: Array<Panorama> = [
    <Panorama>{
      id: 'first',
      isFavorite: false
    },
    <Panorama>{
      id: 'second',
      isFavorite: false
    },
    <Panorama>{
      id: 'third',
      isFavorite: false
    },
    <Panorama>{
      id: 'forth',
      isFavorite: false
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [ AppConfig, PanoramaService ],
    });
  });

  beforeEach(() => {
    localStorage.clear();
  });

  describe('#panorama service: unit-testing', () => {
    it('should be created', inject([PanoramaService], (service: PanoramaService) => {
      expect(service).toBeTruthy();
    }));

    it('should get favorites array', inject([PanoramaService], (service: PanoramaService) => {
      localStorage.setItem('Favorites', 'first,second,third');
      expect(service.getFavorites()).toEqual(['first', 'second', 'third']);
    }));

    it('should add/remove panorama in/from favorite list', inject([PanoramaService], (service: PanoramaService) => {
      service.addFavorite('test1');
      expect(localStorage.getItem('Favorites')).toEqual('test1');
      expect(service.getFavorites()).toEqual(['test1']);

      service.removeFavorite('test1');
      expect(localStorage.getItem('Favorites')).toEqual('');
      expect(service.getFavorites()).toEqual([]);
    }));

    it('should get timestamp format from config', inject([PanoramaService, AppConfig], (service: PanoramaService) => {
      expect(service.getTimestampFormat()).toEqual('dd-MM-yyyy hh:mm');
    }));

    it('should call preparePanoramas method', inject([PanoramaService], (service: PanoramaService) => {
      localStorage.setItem('Favorites', 'second,third');
      expect(service.getFavorites()).toEqual(['second', 'third']);
      expect(service.preparePanoramas(panoramasArray).length).toEqual(4);
      expect(service.preparePanoramas(panoramasArray)[0].isFavorite).toBe(false);
      expect(service.preparePanoramas(panoramasArray)[1].isFavorite).toBe(true);
      expect(service.preparePanoramas(panoramasArray)[2].isFavorite).toBe(true);
      expect(service.preparePanoramas(panoramasArray)[3].isFavorite).toBe(false);
    }));
  });
});
