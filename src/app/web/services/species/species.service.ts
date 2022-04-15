import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  public getSearch(id: string){
    return this.http.get<any>(`${environment.API_URL}/species/${id}/`)
  }

  public getSpecies(){
    return this.http.get<any>(`${environment.API_URL}/species/`)

}
}
