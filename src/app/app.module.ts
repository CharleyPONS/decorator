import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DecoratorChangeComponent} from './decorator-change.component';
import {FormsModule} from '@angular/forms';
import {OutsideAngularComponent} from './outside-angular.component';

@NgModule({
  declarations: [
    AppComponent,
    DecoratorChangeComponent,
    OutsideAngularComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
