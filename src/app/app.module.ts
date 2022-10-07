import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HomeComponent } from 'src/pages/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
