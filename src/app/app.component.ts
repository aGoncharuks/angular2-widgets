import { Component } from '@angular/core';
import {resortsList} from './resorts/resorts-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public resortsList: Resort[] = resortsList;
  public selectedResort: Resort = this.resortsList[0];
  public resortPhotoPath: string = `assets/images/${this.resortsList[0].photoNames[0]}`;

}
