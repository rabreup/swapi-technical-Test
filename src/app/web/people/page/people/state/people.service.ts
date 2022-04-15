import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { People } from './people.model';




@Injectable({
    providedIn: 'root'
  })

  export class PeopleService{




    constructor(private http: HttpClient) { }

    public getPeople(){
        return this.http.get<any>(`${environment.API_URL}/people/`)

    }

    public getSearch(id: string){
      return this.http.get<any>(`${environment.API_URL}/people/${id}/`)
    }

    public gethomeworld(addres: string){
      return this.http.get<any>(`${addres}`)
    }


    public getstarships(addresships: string){
      return this.http.get<any>(`${addresships}`)
    }

  }
