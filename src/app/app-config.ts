import { Injectable } from '@angular/core';

import { Config } from './difinitions/config';

@Injectable()
export class AppConfig {

  public appConfig: Config = {
    apiUrl: 'http://api3-dev.panono.com/'
  };
}
