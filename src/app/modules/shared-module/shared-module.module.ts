import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HomeComponent } from 'src/pages/home/home.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
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
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
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
    FormsModule
  ]
})
export class SharedModuleModule { }
