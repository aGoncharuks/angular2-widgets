import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resorts-details',
  templateUrl: './resorts-details.component.html',
  styleUrls: ['./resorts-details.component.css']
})
export class ResortsDetailsComponent {

  @Input()
  public selectedResort: resort;
  @Input()
  public resortPhotoPath: string;
}
