import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PanoramasModule } from './panoramas/panoramas.module';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SelectorComponent } from './common/components/selector/selector.component';
import { GridItemComponent } from './common/components/items/grid-item/grid-item.component';
import { ListItemComponent } from './common/components/items/list-item/list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainContentComponent,
    SelectorComponent,
    GridItemComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    PanoramasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
