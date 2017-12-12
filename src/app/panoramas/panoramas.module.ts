import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PanoramaService} from './panorama.service';
import { GridItemComponent } from './components/items/grid-item/grid-item.component';
import { ListItemComponent } from './components/items/list-item/list-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    GridItemComponent,
    ListItemComponent
  ],
  declarations: [],
  providers: [ PanoramaService ]
})
export class PanoramasModule { }
