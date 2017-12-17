import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { FilterSetting, ViewSetting } from '../../difinitions/setting';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css']
})
export class MainSidebarComponent implements OnInit, OnDestroy {
  public title: string = 'Sidebar';
  public sidebarForm: FormGroup;
  public filterKeys: Array<string>;
  public viewKeys: Array<string>;

  private filters: any = FilterSetting;
  private views: any = ViewSetting;
  private subscriptions: Array<Subscription> = [];

  constructor(private settingsService: SettingsService) {
    this.filterKeys = Object.keys(this.filters).filter(key => key !== undefined);
    this.viewKeys = Object.keys(this.views).filter(key => key !== undefined);
  }

  public ngOnInit(): void {
    this.sidebarForm = new FormGroup({
      filter: new FormControl(this.settingsService.filterSetting),
      view: new FormControl(this.settingsService.viewSetting)
    });

    this.onChanges();
  }

  public onChanges(): void {
    this.subscriptions.push(this.sidebarForm.get('filter').valueChanges.subscribe((val: FilterSetting) => {
      this.settingsService.filterSetting = val;
    }));

    this.subscriptions.push(this.sidebarForm.get('view').valueChanges.subscribe((val: ViewSetting) => {
      this.settingsService.viewSetting = val;
    }));
  }

  public hideSidebar(): void {
    this.settingsService.sidebarVisibility = false;
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

}
