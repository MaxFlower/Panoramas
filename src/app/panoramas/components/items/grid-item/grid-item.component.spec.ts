import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { GridItemComponent } from './grid-item.component';
import { AppConfig } from '../../../../app-config';
import { PanoramaService } from '../../../panorama.service';
import { Panorama, PanoramaData } from '../../../../difinitions';

describe('GridItemComponent', () => {
  let component: GridItemComponent;
  let fixture: ComponentFixture<GridItemComponent>;
  let panoramaService: PanoramaService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [ GridItemComponent ],
      providers: [ AppConfig, PanoramaService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    panoramaService = fixture.debugElement.injector.get(PanoramaService);
    component.item = <Panorama>{
      id: 'test1',
      data: <PanoramaData>{}
    };
  });

  describe('#grid-item panorama component: unit-testing', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
