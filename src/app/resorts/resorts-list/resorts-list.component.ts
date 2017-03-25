import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resorts-list',
  templateUrl: './resorts-list.component.html',
  styleUrls: ['./resorts-list.component.scss']
})
export class ResortsListComponent {
  public selectedCountry: string;

  @Input()
  public resortsList: Resort[];

  @Input()
  public selectedResort: Resort;

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
