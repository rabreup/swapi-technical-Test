import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './page/planets/planets.component';
import { PlanetsTableComponent } from './components/planets-table/planets-table.component';
import { PlanetsDetailsComponent } from './components/planets-details/planets-details.component';
import { PlanetsRoutingModule } from './planets-routing.module';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    PlanetsComponent,
    PlanetsTableComponent,
    PlanetsDetailsComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule
  ]
})
export class PlanetsModule { }
