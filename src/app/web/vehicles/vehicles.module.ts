import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesDetailsComponent } from './components/vehicles-details/vehicles-details.component';
import { VehiclesTableComponent } from './components/vehicles-table/vehicles-table.component';
import { VehiclesComponent } from './page/vehicles/vehicles.component';
import { VehiclesRoutingModule } from './vehicles-routing.module';

import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule, HttpClient  } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    VehiclesDetailsComponent,
    VehiclesTableComponent,
    VehiclesComponent
  ],
  imports: [
    CommonModule,
    VehiclesRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule
  ]
})
export class VehiclesModule { }
