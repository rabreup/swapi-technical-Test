import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './page/starships/starships.component';
import { StarshipsTableComponent } from './components/starships-table/starships-table.component';
import { StarshipsDetailsComponent } from './components/starships-details/starships-details.component';
import { StarshipsRoutingModule } from './startships-routing.module';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { LengthPipe } from 'src/app/shared/pipe/length.pipe';

@NgModule({
  declarations: [
    StarshipsComponent,
    StarshipsTableComponent,
    StarshipsDetailsComponent,
    LengthPipe
  ],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule
  ]
})
export class StarshipsModule { }
