import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public resortsList: [resort] = [
    {
      id: 0,
      name: 'Bad Gastein',
      country: 'Austria',
      highestPoint: 2300,
      lowestPoint: 	860,
      temperature: -3,
      likes: 233,
      comments: 56,
      photoNames: [
        'resort0-1',
        'resort0-2'
      ]
    },
    {
      id: 1,
      name: 'Arber',
      country: 'Germany',
      highestPoint: 1456,
      lowestPoint: 	1050,
      temperature: -5,
      likes: 554,
      comments: 98,
      photoNames: [
        'resort1-1',
        'resort1-2'
      ]
    },
    {
      id: 2,
      name: 'Alpbachtal Wildschönau',
      country: 'Austria',
      highestPoint: 2025,
      lowestPoint: 	830,
      temperature: -4,
      likes: 455,
      comments: 122,
      photoNames: [
        'resort2-1',
        'resort2-2'
      ]
    },
    {
      id: 3,
      name: 'Racines-Giovo',
      country: 'Italy',
      highestPoint: 2100,
      lowestPoint: 	1300,
      temperature: -3,
      likes: 222,
      comments: 34,
      photoNames: [
        'resort3-1',
        'resort3-2'
      ]
    },
    {
      id: 4,
      name: 'St. Moritz–Corviglia',
      country: 'Switzerland',
      highestPoint: 3057,
      lowestPoint: 	1720,
      temperature: -5,
      likes: 640,
      comments: 234,
      photoNames: [
        'resort4-1',
        'resort4-2'
      ]
    }
  ];
  public selectedResort: resort = this.resortsList[0];
  public resortPhotoPath: string = 'assets/images/' + this.resortsList[0].photoNames[0] + '.jpg';

  public constructor() {
  }
}
