import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HomeComponent } from 'src/pages/home/home.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatRadioModule, MatSliderModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SeatsManageComponent } from 'src/pages/home/seats/seats-manage/seats-manage.component';
import {MatTableModule} from '@angular/material/table';
import { TooltipModule } from 'ng2-tooltip-directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { BlockComponent } from 'src/pages/home/block/block/block.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from "angular-split";
import { TestComponent } from 'src/pages/home/test/test.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SharedModuleModule } from './modules/shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeatsManageComponent,
    BlockComponent,
    TestComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    TooltipModule,
    NgbModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    AngularSplitModule,
    FormsModule,
    MatExpansionModule,
    MatRadioModule,
    MatSliderModule,
    SharedModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
