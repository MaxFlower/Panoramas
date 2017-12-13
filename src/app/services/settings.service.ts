import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ViewSetting, FilterSetting } from '../difinitions/setting';

@Injectable()
export class SettingsService {
  public filterBehaviorSubject: BehaviorSubject<FilterSetting> = new BehaviorSubject<FilterSetting>(FilterSetting.All);
  public viewBehaviorSubject: BehaviorSubject<ViewSetting> = new BehaviorSubject<ViewSetting>(ViewSetting.Grid);

  private filter: FilterSetting = FilterSetting.All;
  private view: ViewSetting = ViewSetting.Grid;

  constructor() { }

  get filterSetting(): FilterSetting {
    return this.filter;
  }

  set filterSetting(val: FilterSetting) {
    if (val !== this.filter) {
      this.filter = val;
      this.filterBehaviorSubject.next(val);
    }
  }

  get viewSetting(): ViewSetting {
    return this.view;
  }

  set viewSetting(val: ViewSetting) {
    if (val !== this.view) {
      this.view = val;
      this.viewBehaviorSubject.next(val);
    }
  }

}
