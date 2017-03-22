import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResortsListComponent } from './resorts-list/resorts-list.component';
import { ResortsWeatherComponent } from './resorts-weather/resorts-weather.component';
import { ResortsDetailsComponent } from './resorts-details/resorts-details.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ResortsListComponent,
    ResortsWeatherComponent,
    ResortsDetailsComponent
  ],
  declarations: [
    ResortsListComponent,
    ResortsWeatherComponent,
    ResortsDetailsComponent
  ]
})
export class ResortsModule { }
