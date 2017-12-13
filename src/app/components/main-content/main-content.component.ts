import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { Panorama } from '../../difinitions/panorama';
import { PanoramaService } from '../../panoramas/panorama.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit, OnDestroy {
  public panoramas: Array<Panorama> = [];

  private subscription: Subscription;

  constructor(
    private panoramaService: PanoramaService
  ) { }

  public ngOnInit(): void {
    this.subscription = this.panoramaService.getPanoramas().subscribe((next: Array<Panorama>) => {
      this.panoramas = next;
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
