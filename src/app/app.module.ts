import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TddAngularService } from './tdd/tdd-angular.service';
import { TddAngularComponent } from './tdd/tdd-angular/tdd-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    TddAngularComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TddAngularService],
  bootstrap: [AppComponent]
})
export class AppModule { }
