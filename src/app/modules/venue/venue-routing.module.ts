import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVenueComponent } from 'src/pages/home/create-venue/create-venue.component';
import { VenueListComponent } from './list/venue-list/venue-list.component';
import { ViewVenueComponent } from './view/view-venue/view-venue.component';

const routes: Routes = [
  {
    path:'',
    component:VenueListComponent
  },
  {
    path:'list',
    component:VenueListComponent
  },
  {
    path:'create',
    component:CreateVenueComponent,
  },
  {
    path:'view',
    component:ViewVenueComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenueRoutingModule { }
