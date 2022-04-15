import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsDetailsComponent } from './components/films-details/films-details.component';
import { FilmsComponent } from './page/films/films.component';

const routes : Routes =[
  {path: '', component: FilmsComponent},

  {path: 'details/:id', component: FilmsDetailsComponent,},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
