import { Component } from '@angular/core';

import { DefaultItemComponent } from '../default-item/default-item.component';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.css']
})
export class GridItemComponent extends DefaultItemComponent {}
