import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/publishReplay';

import { AppConfig } from '../app-config';
import { Panorama, Response } from '../difinitions';

@Injectable()
export class PanoramaService {
  private favorites: Array<string> = localStorage.getItem('Favorites') ? localStorage.getItem('Favorites').split(',') : [];

  constructor(
    private config: AppConfig,
    private http: HttpClient
  ) { }

  private panoramasCache$: Observable<Array<Panorama>> = this.http.get<Response>(`${this.config.appConfig.apiUrl}/explore`)
    .map(res => res.items)
    .publishReplay(1)
    .refCount();

  public getPanoramas(): Observable<Array<Panorama>> {
    // this.setFavoriteProperty();
    return this.panoramasCache$;
  }

  public getFavorites(): Array<string> {
    this.favorites = localStorage.getItem('Favorites') ? localStorage.getItem('Favorites').split(',') : [];
    return this.favorites;
  }

  public addFavorite(id: string): void {
    this.favorites.push(id);
    localStorage.setItem('Favorites', this.favorites.join(','));
  }

  public removeFavorite(id: string): void {
    const it: number = this.favorites.indexOf(id);
    if (it !== -1) {
      this.favorites.splice(it, 1);
      localStorage.setItem('Favorites', this.favorites.join(','));
    }
  }

  public getTimestampFormat(): string {
    return this.config.appConfig.timestampFormat || 'dd-mm-yyyy';
  }

  private setFavoriteProperty(): void {
    this.getFavorites();
    this.getPanoramas().map((item: any) => {
      item.isFavorite = this.favorites.indexOf(item.id) !== -1;
    });
  }

}
