import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  public getSearch(id: string){
    return this.http.get<any>(`${environment.API_URL}/planets/${id}/`)
  }

  public getPlanets(){
    return this.http.get<any>(`${environment.API_URL}/planets/`)

}
public gethomeworld(addres: string){
  return this.http.get<any>(`${addres}`)
}
}
