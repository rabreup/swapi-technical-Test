import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleTableComponent } from './components/people-table/people-table.component';
import { PeopleComponent } from './page/people/people.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PeopleRoutingModule } from './people-routing.module';


import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { HeightPipe } from 'src/app/shared/pipe/height.pipe';


@NgModule({
  declarations: [
    PeopleTableComponent,
    PeopleComponent,
    PeopleDetailsComponent,
    HeightPipe
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,

  ]
})
export class PeopleModule { }
