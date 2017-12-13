import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppConfig } from './app-config';
import { PanoramasModule } from './panoramas/panoramas.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SelectorComponent } from './common/components/selector/selector.component';
import { PanoramaService } from './panoramas/panorama.service';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainContentComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    PanoramasModule
  ],
  providers: [ AppConfig, PanoramaService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
