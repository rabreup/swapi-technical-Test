import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './page/films/films.component';
import { FilmsTableComponent } from './components/films-table/films-table.component';
import { FilmsDetailsComponent } from './components/films-details/films-details.component';
import { FilmsRoutingModule } from './films-routing.module';


import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    FilmsComponent,
    FilmsTableComponent,
    FilmsDetailsComponent,
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule
  ]
})
export class FilmsModule { }
