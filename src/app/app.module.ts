import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResortsModule } from './resorts/resorts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ResortsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
