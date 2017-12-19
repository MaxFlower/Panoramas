import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeaderComponent } from './main-header.component';
import { PanoramasModule } from '../../panoramas/panoramas.module';
import { AppConfig } from '../../app-config';
import { PanoramaService } from '../../panoramas/panorama.service';
import { SettingsService } from '../../services/settings.service';

describe('MainHeaderComponent', () => {
  let component: MainHeaderComponent;
  let fixture: ComponentFixture<MainHeaderComponent>;
  let panoramaService: PanoramaService;
  let settingsService: SettingsService;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHeaderComponent ],
      imports: [
        PanoramasModule
      ],
      providers: [ AppConfig, PanoramaService, SettingsService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    settingsService = fixture.debugElement.injector.get(SettingsService);
    panoramaService = fixture.debugElement.injector.get(PanoramaService);
    compiled = fixture.debugElement.nativeElement;
  });

  describe('#main-header component: unit-testing', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should call ngOnInit method', () => {
      expect(component.ngOnInit).toBeTruthy();
    });

    it('should call ngOnDestroy method', () => {
      expect(component.ngOnDestroy).toBeTruthy();
    });

    it('should call showSidebar method',  async(() => {
      component.showSidebar();
      expect(settingsService.sidebarVisibility).toEqual(true);
    }));

    it('should hide/show sidebar-button', async(() => {
      settingsService.sidebarVisibility = false;
      expect(component.isButtonAvailable).toEqual(true);
      expect(compiled.querySelector('.nav-flex').getAttribute('class'))
        .toMatch('nav-flex');

      settingsService.sidebarVisibility = true;
      expect(component.isButtonAvailable).toEqual(false);
      expect(compiled.querySelector('.nav-flex').getAttribute('class'))
        .toMatch('nav-flex hide');
    }));
  });
});
