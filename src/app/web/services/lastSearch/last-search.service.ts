import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LastSearchService {

  public filterSubject = new Subject<string>();
  public SearchSubject = new Subject<string[]>();
  constructor(private http: HttpClient) {

   }


  search(query: string, url: string){
    query = query.trim().toLocaleLowerCase();//todo en  minuscula

    return this.http.get<any>(`${environment.API_URL}/${url}/?search=${query}`)

  }
  setFilterValue(history: any){
    this.filterSubject.next(history);
  }


}
