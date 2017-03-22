import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resorts-weather',
  templateUrl: './resorts-weather.component.html',
  styleUrls: ['./resorts-weather.component.css']
})

export class ResortsWeatherComponent {
  @Input()
  public resortTemperature: number;
}
