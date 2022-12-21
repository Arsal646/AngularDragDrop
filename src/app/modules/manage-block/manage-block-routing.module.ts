import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFlexiBlockComponent } from './flexi-block/create-flexi-block/create-flexi-block.component';
import { FlexiBlockListComponent } from './flexi-block/flexi-block-list/flexi-block-list.component';

const routes: Routes = [
  {
    path:'flexi-block-list',
    component:FlexiBlockListComponent
  },
  {
    path:'create-flexi-block',
    component:CreateFlexiBlockComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBlockRoutingModule { }
