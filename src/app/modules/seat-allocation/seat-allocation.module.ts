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
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    OpenSeatComponent,
    BlockSeatComponent,
    CustomBackgroundColorDirective
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
    MatIconModule

  ]
  // providers: [
  //   { provide: MAT_DIALOG_DATA, useValue: {} },
  //   { provide: MatDialogRef, useValue: {} }
  // ]
})
export class SeatAllocationModule { }
