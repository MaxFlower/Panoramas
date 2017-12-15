import {Component, OnDestroy, OnInit} from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit, OnDestroy {
  public title: string = 'Favourite 360';
  public isButtonAvailable: boolean;

  private subscriptions: Array<Subscription> = [];

  constructor(private settingsService: SettingsService) { }

  public ngOnInit(): void {
    this.subscriptions.push(this.settingsService.sidebarVisibilityBehaviorSubject.subscribe((val: boolean) => {
      this.isButtonAvailable = !val;
    }));
  }

  public showSidebar(): void {
    this.settingsService.sidebarVisibility = true;
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

}
