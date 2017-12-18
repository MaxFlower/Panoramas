import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ListItemComponent } from './list-item.component';
import { AppConfig } from '../../../../app-config';
import { PanoramaService } from '../../../panorama.service';
import { Panorama, PanoramaData } from '../../../../difinitions';

describe('ListItemComponent', () => {
  let component: ListItemComponent;
  let fixture: ComponentFixture<ListItemComponent>;
  let panoramaService: PanoramaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ ListItemComponent ],
      providers: [ AppConfig, PanoramaService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemComponent);
    component = fixture.componentInstance;
    component.item = <Panorama>{
      id: 'test1',
      isFavorite: true,
      data: <PanoramaData>{}
    };
    fixture.detectChanges();
    panoramaService = fixture.debugElement.injector.get(PanoramaService);
  });

  describe('#list-item panorama component: unit-testing', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
