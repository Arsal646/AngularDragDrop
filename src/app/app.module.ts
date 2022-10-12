import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HomeComponent } from 'src/pages/home/home.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
