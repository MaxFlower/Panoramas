import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GridItemComponent } from './components/items/grid-item/grid-item.component';
import { ListItemComponent } from './components/items/list-item/list-item.component';
import { DefaultItemComponent } from './components/items/default-item/default-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridItemComponent,
    ListItemComponent,
    DefaultItemComponent
  ],
  exports: [
    HttpClientModule,
    GridItemComponent,
    ListItemComponent,
    DefaultItemComponent
  ],
  providers: []
})
export class PanoramasModule { }
