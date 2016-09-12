import { NgModule, ApplicationRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [ 
    BrowserModule,
    CommonModule
     ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  
})
export class AppModule { }
