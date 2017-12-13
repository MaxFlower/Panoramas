import { Injectable } from '@angular/core';

import { Config } from './difinitions/config';

@Injectable()
export class AppConfig {

  public serverConfig: Config = {
    apiUrl: 'http://api3-dev.panono.com/'
  };
}
