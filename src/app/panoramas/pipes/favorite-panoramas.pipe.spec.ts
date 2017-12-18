import { FavoritePanoramasPipe } from './favorite-panoramas.pipe';
import { Panorama, FilterSetting } from '../../difinitions';

describe('FavoritePanoramasPipe', () => {
  let pipe: FavoritePanoramasPipe;
  let panoramasArray: Array<Panorama> = [
    <Panorama>{
      isFavorite: true
    },
    <Panorama>{
      isFavorite: false
    },
    <Panorama>{
      isFavorite: true
    },
    <Panorama>{
      isFavorite: false
    }
  ];

  beforeEach(() => {
    pipe = new FavoritePanoramasPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should get filtered favorite list', () => {
    expect(pipe.transform(panoramasArray, FilterSetting.All).length).toEqual(4);
    expect(pipe.transform(panoramasArray, FilterSetting.OnlyFavorites).length).toEqual(2);
  });
});
