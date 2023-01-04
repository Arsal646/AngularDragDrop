import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeatAllocationRoutingModule } from './seat-allocation-routing.module';
import { OpenSeatComponent } from './open-seat/open-seat/open-seat.component';
import { BlockSeatComponent } from './block-seat/block-seat/block-seat.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { TooltipModule } from 'ng2-tooltip-directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularSplitModule } from 'angular-split';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomBackgroundColorDirective } from 'src/pages/home/common/custom-background-color.directive';
import { MatIconModule, MatRadioModule, MatSliderModule } from '@angular/material';
import { SearchAlertComponent } from './search-alert/search-alert.component';
import { SearchPipe } from 'src/pages/home/common/search.pipe';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    OpenSeatComponent,
    BlockSeatComponent,
    CustomBackgroundColorDirective,
    SearchAlertComponent,
  ],
  imports: [
    CommonModule,
    SeatAllocationRoutingModule,
    DragDropModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    TooltipModule,
    NgbModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    AngularSplitModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    MatSliderModule,
    SharedModuleModule

  ]
  // providers: [
  //   { provide: MAT_DIALOG_DATA, useValue: {} },
  //   { provide: MatDialogRef, useValue: {} }
  // ]
})
export class SeatAllocationModule { }
