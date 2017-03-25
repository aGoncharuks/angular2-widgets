import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resorts-details',
  templateUrl: './resorts-details.component.html',
  styleUrls: ['./resorts-details.component.scss']
})
export class ResortsDetailsComponent {

  @Input()
  public selectedResort: Resort;
  @Input()
  public resortPhotoPath: string;
}
