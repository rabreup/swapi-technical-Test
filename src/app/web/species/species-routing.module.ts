import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';
import { SpeciesComponent } from './page/species/species.component';

const routes : Routes =[
  {path: '', component: SpeciesComponent},

  {path: 'details/:id', component: SpeciesDetailsComponent,},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
