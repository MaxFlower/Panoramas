import { Component, OnInit, Input } from '@angular/core';

import { PanoramaService } from '../../../panorama.service';
import { Panorama } from '../../../../difinitions';

@Component({
  selector: 'app-default-item',
  templateUrl: './default-item.component.html',
  styleUrls: ['./default-item.component.css']
})
export class DefaultItemComponent implements OnInit {
  @Input() public item: Panorama;

  public timestampFormat: string;

  constructor(private panoramaService: PanoramaService) { }

  ngOnInit() {
    this.timestampFormat = this.panoramaService.getTimestampFormat();
  }

  public addToFavorites(id: string): void {
    this.panoramaService.addFavorite(id);
    this.item.isFavorite = true;
  }

  public removeFromFavorites(id: string): void {
    this.panoramaService.removeFavorite(id);
    this.item.isFavorite = false;
  }

}
