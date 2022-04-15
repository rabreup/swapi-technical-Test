import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarshipsDetailsComponent } from './components/starships-details/starships-details.component';
import { StarshipsComponent } from './page/starships/starships.component';
const routes : Routes =[
  {path: '', component: StarshipsComponent},

  {path: 'details/:id', component: StarshipsDetailsComponent,},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarshipsRoutingModule { }
