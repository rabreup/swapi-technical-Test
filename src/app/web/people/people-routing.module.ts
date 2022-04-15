import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PeopleComponent } from './page/people/people.component';

const routes : Routes =[
  {path: '', component: PeopleComponent},

  {path: 'details/:id', component: PeopleDetailsComponent,},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
