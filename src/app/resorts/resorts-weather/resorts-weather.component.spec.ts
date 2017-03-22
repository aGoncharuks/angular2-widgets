import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResortsWeatherComponent } from './resorts-weather.component';

describe('ResortsWeatherComponent', () => {
  let component: ResortsWeatherComponent;
  let fixture: ComponentFixture<ResortsWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResortsWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResortsWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
