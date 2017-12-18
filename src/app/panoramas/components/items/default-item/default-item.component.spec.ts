import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DefaultItemComponent } from './default-item.component';
import { AppConfig } from '../../../../app-config';
import { PanoramaService } from '../../../panorama.service';
import { Panorama } from '../../../../difinitions';


describe('DefaultItemComponent', () => {
  let component: DefaultItemComponent;
  let fixture: ComponentFixture<DefaultItemComponent>;
  let panoramaService: PanoramaService;
  let panoramaServiceSpyAddToFavorite: jasmine.Spy;
  let panoramaServiceSpyRemoveFromFavorites: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ DefaultItemComponent ],
      providers: [ AppConfig, PanoramaService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultItemComponent);
    component = fixture.componentInstance;
    component.item = <Panorama>{
      id: 'test1'
    };
    fixture.detectChanges();

    panoramaService = fixture.debugElement.injector.get(PanoramaService);
    panoramaServiceSpyAddToFavorite = spyOn(panoramaService, 'addFavorite');
    panoramaServiceSpyRemoveFromFavorites = spyOn(panoramaService, 'removeFavorite');
  });

  describe('#default-item panorama components: unit-testing', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should call ngOnInit method', () => {
      expect(component.ngOnInit).toBeTruthy();
    });

    it('should call addToFavorites method', () => {
      component.addToFavorites(component.item.id);
      expect(panoramaServiceSpyAddToFavorite).toHaveBeenCalledWith('test1');
      expect(component.item.isFavorite).toBeTruthy();
    });

    it('should call removeFromFavorites method', () => {
      component.removeFromFavorites(component.item.id);
      expect(panoramaServiceSpyRemoveFromFavorites).toHaveBeenCalledWith('test1');
      expect(component.item.isFavorite).toBeFalsy();
    });
  });
});
