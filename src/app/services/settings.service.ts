import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ViewSetting, FilterSetting } from '../difinitions/setting';

@Injectable()
export class SettingsService {
  public filterBehaviorSubject: BehaviorSubject<FilterSetting> = new BehaviorSubject<FilterSetting>(FilterSetting.All);
  public viewBehaviorSubject: BehaviorSubject<ViewSetting> = new BehaviorSubject<ViewSetting>(ViewSetting.Grid);
  public sidebarVisibilityBehaviorSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  private filter: FilterSetting = FilterSetting.All;
  private view: ViewSetting = ViewSetting.Grid;
  private isFormVisible: boolean = true;

  constructor() { }

  public get filterSetting(): FilterSetting {
    return this.filter;
  }

  public set filterSetting(val: FilterSetting) {
    if (val !== this.filter) {
      this.filter = val;
      this.filterBehaviorSubject.next(val);
    }
  }

  public get viewSetting(): ViewSetting {
    return this.view;
  }

  public set viewSetting(val: ViewSetting) {
    if (val !== this.view) {
      this.view = val;
      this.viewBehaviorSubject.next(val);
    }
  }

  public get sidebarVisibility(): boolean {
    return this.isFormVisible;
  }

  public set sidebarVisibility(val: boolean) {
    if (val !== this.isFormVisible) {
      this.isFormVisible = val;
      this.sidebarVisibilityBehaviorSubject.next(val);
    }
  }

}
