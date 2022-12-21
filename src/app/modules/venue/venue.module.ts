import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueRoutingModule } from './venue-routing.module';
import { VenueListComponent } from './list/venue-list/venue-list.component';
import { ViewVenueComponent } from './view/view-venue/view-venue.component';
import { CreateVenueComponent } from 'src/pages/home/create-venue/create-venue.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { TooltipModule } from 'ng2-tooltip-directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularSplitModule } from "angular-split";


@NgModule({
  declarations: [
    VenueListComponent,
    ViewVenueComponent,
    CreateVenueComponent,
  ],
  imports: [
    CommonModule,
    VenueRoutingModule,
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
    FormsModule
  ]
})
export class VenueModule { }
