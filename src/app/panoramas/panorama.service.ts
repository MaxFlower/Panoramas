import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/publishReplay';

import { AppConfig } from '../app-config';
import { Panorama } from '../difinitions/panorama';

@Injectable()
export class PanoramaService {

  constructor(
    private config: AppConfig,
    private http: HttpClient) { }

  private panoramasCache$: Observable<Array<Panorama>> = this.http.get<Array<Panorama>>(`${this.config.serverConfig.apiUrl}/explore`)
    .publishReplay(1)
    .refCount();

  public getPanoramas(): Observable<Array<Panorama>> {
     return this.panoramasCache$;
  }

}
