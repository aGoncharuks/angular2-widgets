import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resorts-list',
  templateUrl: './resorts-list.component.html',
  styleUrls: ['./resorts-list.component.css']
})
export class ResortsListComponent {

  @Input()
  public resortsList: [resort];

  @Input()
  public selectedResort: resort;

  @Output()
  public onResortSelect: EventEmitter<{}> = new EventEmitter();

  @Output()
  public onPhotoSelect: EventEmitter<string> = new EventEmitter();

  public selectPhoto(id: number, path: string): void {
    if (id === this.selectedResort.id) {
      this.onPhotoSelect.emit(path);
    }
  }
}
