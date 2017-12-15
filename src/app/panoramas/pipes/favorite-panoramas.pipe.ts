import { Pipe, PipeTransform } from '@angular/core';

import { Panorama, FilterSetting } from '../../difinitions';

@Pipe({
  name: 'favoritePanoramas'
})
export class FavoritePanoramasPipe implements PipeTransform {

  transform(value: Array<Panorama>, filterType: FilterSetting): Array<Panorama> {
    if (filterType === FilterSetting.All) {
      return value;
    } else {
      return value.filter((panorama => {
        return panorama.isFavorite === true;
      }));
    }
  }

}
