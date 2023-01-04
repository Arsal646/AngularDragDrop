import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageBlockRoutingModule } from './manage-block-routing.module';
import { FixedBlockListComponent } from './fixed-block/fixed-block-list/fixed-block-list.component';
import { CreateFixedBlockComponent } from './fixed-block/create-fixed-block/create-fixed-block.component';
import { CreateFlexiBlockComponent } from './flexi-block/create-flexi-block/create-flexi-block.component';
import { FlexiBlockListComponent } from './flexi-block/flexi-block-list/flexi-block-list.component';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';


@NgModule({
  declarations: [
    FixedBlockListComponent,
    CreateFixedBlockComponent,
    CreateFlexiBlockComponent,
    FlexiBlockListComponent
  ],
  imports: [
    CommonModule,
    ManageBlockRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    SharedModuleModule
  ]
})
export class ManageBlockModule { }
