import { Component } from '@angular/core';

import { DefaultItemComponent } from '../default-item/default-item.component';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent extends DefaultItemComponent {}
