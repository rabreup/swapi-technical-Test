import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeciesDetailsComponent } from './components/species-details/species-details.component';
import { SpeciesTableComponent } from './components/species-table/species-table.component';
import { SpeciesComponent } from './page/species/species.component';
import { SpeciesRoutingModule } from './species-routing.module';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    SpeciesDetailsComponent,
    SpeciesTableComponent,
    SpeciesComponent
  ],
  imports: [
    CommonModule,
    SpeciesRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule

  ]
})
export class SpeciesModule { }
