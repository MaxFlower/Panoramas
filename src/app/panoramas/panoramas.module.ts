import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { GridItemComponent } from './components/items/grid-item/grid-item.component';
import { ListItemComponent } from './components/items/list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GridItemComponent,
    ListItemComponent
  ],
  exports: [
    HttpClientModule,
    GridItemComponent,
    ListItemComponent
  ],
  providers: []
})
export class PanoramasModule { }
