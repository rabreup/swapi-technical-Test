import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesDetailsComponent } from './components/vehicles-details/vehicles-details.component';
import { VehiclesComponent } from './page/vehicles/vehicles.component';

const routes : Routes =[
  {path: '', component: VehiclesComponent},

  {path: 'details/:id', component: VehiclesDetailsComponent,},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
