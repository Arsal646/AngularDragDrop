import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockSeatComponent } from './block-seat/block-seat/block-seat.component';
import { OpenSeatComponent } from './open-seat/open-seat/open-seat.component';

const routes: Routes = [
  {
    path:'',
    component:OpenSeatComponent
  },
  {
    path:'open-seat',
    component:OpenSeatComponent
  },
  {
    path:'block-seat',
    component:BlockSeatComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatAllocationRoutingModule { }
