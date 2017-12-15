import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public sidebarVisibility: boolean;

  private subscriptions: Array<Subscription> = [];

  constructor(private settingsService: SettingsService) {}

  public ngOnInit(): void {
    this.subscriptions.push(this.settingsService.sidebarVisibilityBehaviorSubject.subscribe((val: boolean) => {
      this.sidebarVisibility = val;
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }
}
