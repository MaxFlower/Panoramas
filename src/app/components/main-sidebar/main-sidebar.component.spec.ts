import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MainSidebarComponent } from './main-sidebar.component';
import { AppConfig } from '../../app-config';
import { SettingsService } from '../../services/settings.service';
import { ViewSetting, FilterSetting } from '../../difinitions';

describe('MainSidebarComponent', () => {
  let component: MainSidebarComponent;
  let fixture: ComponentFixture<MainSidebarComponent>;
  let settingsService: SettingsService;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [ MainSidebarComponent ],
      providers: [ AppConfig, SettingsService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    settingsService = fixture.debugElement.injector.get(SettingsService);
    compiled = fixture.debugElement.nativeElement;
  });

  describe('#main-sidebar component: unit-testing', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should call ngOnInit method', () => {
      expect(component.ngOnInit).toBeTruthy();

      component.ngOnInit();
      expect(component.sidebarForm instanceof FormGroup).toBe(true);
    });

    it('should call ngOnDestroy method', () => {
      expect(component.ngOnDestroy).toBeTruthy();
    });

    it('should set values for controls in sidebarForm', () => {
      component.sidebarForm.controls['view'].setValue(ViewSetting.List);
      expect(settingsService.viewSetting).toEqual(ViewSetting.List);

      component.sidebarForm.controls['filter'].setValue(FilterSetting.OnlyFavorites);
      expect(settingsService.filterSetting).toEqual(FilterSetting.OnlyFavorites);
    });
  });
});
