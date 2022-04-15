import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  public getSearch(id: string){
    return this.http.get<any>(`${environment.API_URL}/vehicles/${id}/`)
  }

  public getVehicles(){
    return this.http.get<any>(`${environment.API_URL}/vehicles/`)

}
}
