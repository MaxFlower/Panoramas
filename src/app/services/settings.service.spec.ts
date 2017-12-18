import { TestBed, inject } from '@angular/core/testing';

import { SettingsService } from './settings.service';
import { FilterSetting, ViewSetting } from '../difinitions';

describe('SettingsService', () => {
  let filterBehaviorSubjectSpy: jasmine.Spy;
  let viewBehaviorSubjectSpy: jasmine.Spy;
  let visibilityBehaviorSubjectSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SettingsService]
    });
  });

  describe('#setting service: unit-testing', () => {
    it('should be created', inject([SettingsService], (service: SettingsService) => {
      expect(service).toBeTruthy();
    }));

    it('should set filter', inject([SettingsService], (service: SettingsService) => {
      filterBehaviorSubjectSpy = spyOn(service.filterBehaviorSubject, 'next');

      service.filterSetting = FilterSetting.OnlyFavorites;
      expect(filterBehaviorSubjectSpy).toHaveBeenCalledWith(FilterSetting.OnlyFavorites);
      expect(filterBehaviorSubjectSpy).toHaveBeenCalledTimes(1);
      expect(service.filterSetting).toEqual(FilterSetting.OnlyFavorites);

      service.filterSetting = FilterSetting.OnlyFavorites;
      expect(filterBehaviorSubjectSpy).not.toHaveBeenCalledTimes(2);
    }));

    it('should set view', inject([SettingsService], (service: SettingsService) => {
      viewBehaviorSubjectSpy = spyOn(service.viewBehaviorSubject, 'next');

      service.viewSetting = ViewSetting.List;
      expect(viewBehaviorSubjectSpy).toHaveBeenCalledWith(ViewSetting.List);
      expect(viewBehaviorSubjectSpy).toHaveBeenCalledTimes(1);
      expect(service.viewSetting).toEqual(ViewSetting.List);

      service.viewSetting = ViewSetting.List;
      expect(viewBehaviorSubjectSpy).not.toHaveBeenCalledTimes(2);
    }));

    it('should set sidebar visibility', inject([SettingsService], (service: SettingsService) => {
      visibilityBehaviorSubjectSpy = spyOn(service.sidebarVisibilityBehaviorSubject, 'next');

      service.sidebarVisibility = false;
      expect(visibilityBehaviorSubjectSpy).toHaveBeenCalledWith(false);
      expect(visibilityBehaviorSubjectSpy).toHaveBeenCalledTimes(1);
      expect(service.sidebarVisibility).toEqual(false);

      service.sidebarVisibility = false;
      expect(visibilityBehaviorSubjectSpy).not.toHaveBeenCalledTimes(2);
    }));
  });
});
