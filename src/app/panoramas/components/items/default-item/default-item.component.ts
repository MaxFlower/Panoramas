import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { PanoramaService } from '../../../panorama.service';
import { Panorama } from '../../../../difinitions';

@Component({
  selector: 'app-default-item',
  templateUrl: './default-item.component.html',
  styleUrls: ['./default-item.component.css']
})
export class DefaultItemComponent implements OnInit {
  @Input() public item: Panorama;
  @Output() public favouriteChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  public timestampFormat: string;

  constructor(private panoramaService: PanoramaService) { }

  public ngOnInit(): void {
    this.timestampFormat = this.panoramaService.getTimestampFormat();
  }

  public addToFavorites(id: string): void {
    this.panoramaService.addFavorite(id);
    this.item.isFavorite = true;
    this.favouriteChange.emit(this.item.isFavorite);
  }

  public removeFromFavorites(id: string): void {
    this.panoramaService.removeFavorite(id);
    this.item.isFavorite = false;
    this.favouriteChange.emit(this.item.isFavorite);
  }

}
