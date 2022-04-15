import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsDetailsComponent } from './components/planets-details/planets-details.component';
import { PlanetsComponent } from './page/planets/planets.component';

const routes : Routes =[
  {path: '', component: PlanetsComponent},

  {path: 'details/:id', component: PlanetsDetailsComponent,},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
