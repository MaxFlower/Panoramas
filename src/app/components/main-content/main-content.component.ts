import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { FilterSetting, ViewSetting, Panorama } from '../../difinitions';
import { PanoramaService } from '../../panoramas/panorama.service';
import { SettingsService } from '../../services/settings.service';
import { FavoritePanoramasPipe } from '../../panoramas/pipes/favorite-panoramas.pipe';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css'],
  providers: [ FavoritePanoramasPipe ]
})
export class MainContentComponent implements OnInit, OnDestroy {
  public filteredPanoramas: Array<Panorama> = [];
  public panoramas: Array<Panorama> = [];
  public filterSetting: FilterSetting;
  public viewSetting: ViewSetting;

  private subscriptions:  Array<Subscription> = [];

  constructor(
    private panoramaService: PanoramaService,
    private settingsService: SettingsService,
    private favoritePanoramasPipe: FavoritePanoramasPipe
  ) { }

  public ngOnInit(): void {
    this.subscriptions.push(this.panoramaService.getPanoramas().subscribe((next: Array<Panorama>) => {
      this.panoramas = this.panoramaService.preparePanoramas(next);
      this.updateFiltredList();
    }));

    this.subscriptions.push(this.settingsService.viewBehaviorSubject.subscribe((next: ViewSetting) => {
      this.viewSetting = next;
    }));

    this.subscriptions.push(this.settingsService.filterBehaviorSubject.subscribe((next: FilterSetting) => {
      this.filterSetting = next;
      this.updateFiltredList();
    }));
  }

  public isGrid(): boolean {
    return this.viewSetting === ViewSetting.Grid;
  }

  public isList(): boolean {
    return this.viewSetting === ViewSetting.List;
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((sub: Subscription) => {
      sub.unsubscribe();
    });
  }

  public favouriteChange(): void {
    this.updateFiltredList();
  }

  private updateFiltredList(): void {
    this.filteredPanoramas = this.favoritePanoramasPipe.transform(this.panoramas, this.filterSetting);
  }
}
