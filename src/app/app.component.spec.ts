import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PanoramasModule } from './panoramas/panoramas.module';
import { AppConfig } from './app-config';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainSidebarComponent } from './components/main-sidebar/main-sidebar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SettingsService } from './services/settings.service';
import { PanoramaService } from './panoramas/panorama.service';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let settingsService: SettingsService;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainHeaderComponent,
        MainSidebarComponent,
        MainContentComponent
      ],
      imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        PanoramasModule,
        ReactiveFormsModule
      ],
      providers: [ AppConfig, PanoramaService, SettingsService ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    settingsService = fixture.debugElement.injector.get(SettingsService);
    compiled = fixture.debugElement.nativeElement;
  });

  describe('#app components: unit-testing', () => {
    it('should create the app', async(() => {
      expect(app).toBeTruthy();
    }));

    it('should call ngOnInit method', () => {
      expect(app.ngOnInit).toBeTruthy();
    });

    it('should call ngOnDestroy method', () => {
      expect(app.ngOnDestroy).toBeTruthy();
    });

    it('should render app-main-header tag', async(() => {
      expect(compiled.querySelector('app-main-header')).toBeDefined();
    }));

    it('should render app-main-sidebar tag', async(() => {
      expect(compiled.querySelector('app-main-sidebar')).toBeDefined();
      expect(compiled.querySelector('.sidebar-container').getAttribute('class'))
        .toMatch('sidebar-container col-xs-3 col-sm-3 col-md-3 col-lg-3');
    }));

    it('should render app-main-content tag', async(() => {
      expect(compiled.querySelector('app-main-content')).toBeDefined();
      expect(compiled.querySelector('.content-container').getAttribute('class'))
        .toMatch('content-container col-xs-9 col-sm-9 col-md-9 col-lg-9');
    }));

    it('should hide side bar if sidebarVisibility becomes false', async(() => {
      settingsService.sidebarVisibility = false;
      fixture.detectChanges();
      expect(compiled.querySelector('.sidebar-container').getAttribute('class'))
        .toMatch('sidebar-container col-xs-3 col-sm-3 col-md-3 col-lg-3 hide');
    }));
  });
});
