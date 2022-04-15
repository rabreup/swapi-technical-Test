import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';

const routes: Routes = [
  {path: '', component: ToolbarComponent,
   children: [
    {
      path: 'films',
      loadChildren: () => import('./web/films/films.module').then(m => m.FilmsModule)
    },
    {
      path: 'people',
      loadChildren: () => import('./web/people/people.module').then(m => m.PeopleModule)
    },
    {
      path: 'planets',
      loadChildren: () => import('./web/planets/planets.module').then(m => m.PlanetsModule)
    },
    {
      path: 'species',
      loadChildren: () => import('./web/species/species.module').then(m => m.SpeciesModule)
    },
    {
      path: 'starships',
      loadChildren: () => import('./web/starships/starships.module').then(m => m.StarshipsModule)
    },
    {
      path: 'vehicles',
      loadChildren: () => import('./web/vehicles/vehicles.module').then(m => m.VehiclesModule)
    },




  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
