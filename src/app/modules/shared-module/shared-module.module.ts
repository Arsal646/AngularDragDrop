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
import { HeaderComponent } from 'src/pages/home/common/header/header.component';
import { NavigationComponent } from 'src/pages/home/common/navigation/navigation.component';
import { SearchPipe } from 'src/pages/home/common/search.pipe';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/pages/home/common/footer/footer.component';
import { MainComponent } from '../main/main.component';
@NgModule({
  imports: [
    CommonModule,
    DragDropModule,
    MatSelectModule,
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
  ],
  exports:[
    DragDropModule,
    MatSelectModule,
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
    NavigationComponent,
    HeaderComponent,
    SearchPipe,
    FooterComponent,
    MainComponent,

  ],
  declarations: [
    NavigationComponent,
    HeaderComponent,
    SearchPipe,
    FooterComponent,
    MainComponent
  ],
})
export class SharedModuleModule { }
