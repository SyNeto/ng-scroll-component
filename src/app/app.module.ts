import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { MdSliderModule } from "@angular/material";

import { AppComponent } from './app.component';
import { ScrollComponent } from './scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
