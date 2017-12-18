import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramasModule } from '../../panoramas/panoramas.module';
import { AppConfig } from '../../app-config';
import { MainContentComponent } from './main-content.component';
import { SettingsService } from '../../services/settings.service';
import { PanoramaService } from '../../panoramas/panorama.service';
import { ViewSetting, FilterSetting, Panorama } from '../../difinitions';

describe('MainContentComponent', () => {
  let component: MainContentComponent;
  let fixture: ComponentFixture<MainContentComponent>;
  let panoramaService: PanoramaService;
  let settingsService: SettingsService;
  let compiled: any;
  let panoramasArray: Array<Panorama> = [
    <Panorama>{},
    <Panorama>{},
    <Panorama>{},
    <Panorama>{}
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainContentComponent,
      ],
      imports: [
        PanoramasModule
      ],
      providers: [ AppConfig, PanoramaService, SettingsService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    settingsService = fixture.debugElement.injector.get(SettingsService);
    panoramaService = fixture.debugElement.injector.get(PanoramaService);
    compiled = fixture.debugElement.nativeElement;
  });

  describe('#main-content components: unit-testing', () => {

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should call ngOnInit method', () => {
      expect(component.ngOnInit).toBeTruthy();
    });

    it('should call ngOnDestroy method', () => {
      expect(component.ngOnDestroy).toBeTruthy();
    });

    it('should call isGrid method',  async(() => {
      component.viewSetting = ViewSetting.Grid;
      expect(component.isGrid()).toBeTruthy();
      component.viewSetting = ViewSetting.List;
      expect(component.isGrid()).toBeFalsy();
    }));

    it('should call isList method',  async(() => {
      component.viewSetting = ViewSetting.Grid;
      expect(component.isList()).toBeFalsy();
      component.viewSetting = ViewSetting.List;
      expect(component.isList()).toBeTruthy();
    }));

  });
});
