import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { CreateVenueComponent } from 'src/pages/home/create-venue/create-venue.component';
import { SeatsManageComponent } from 'src/pages/home/seats/seats-manage/seats-manage.component';

const routes: Routes = [
  { path: '', redirectTo: 'venue', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'seat', component: SeatsManageComponent },
  {
    path: 'venue',
    loadChildren: () =>
      import(
        'src/app/modules/venue/venue.module'
      ).then((m) => m.VenueModule),
  },
  {
    path: 'seat',
    loadChildren : () =>  import('src/app/modules/seat-allocation/seat-allocation.module').then((m) => m.SeatAllocationModule)

  },
  {
    path: 'block',
    loadChildren : () =>  import('src/app/modules/manage-block/manage-block.module').then((m) => m.ManageBlockModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
