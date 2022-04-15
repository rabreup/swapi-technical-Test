import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { FilmsService } from 'src/app/web/services/films/films.service';
import { LastSearchService } from 'src/app/web/services/lastSearch/last-search.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films$?: any;
  public sucription: Subscription;

  constructor(
    private serviceFilms: FilmsService,
    private router: Router,
    private route: ActivatedRoute,
    private lastSearchService: LastSearchService
  ) {
    this.loadFilms()
    this.sucription = this.lastSearchService.filterSubject.subscribe((text) => {
      const url = window.location.href.split('/');
      if (url[3] === 'films') {
        this.filter(text);
      }
    });}


  ngOnInit(): void {
  }

  loadFilms(){
    let items= localStorage.historial;
    if(items!=''){
      this.serviceFilms.getFilms().subscribe(resp =>
        {
          this.films$ = resp.results
          localStorage.setItem('films', JSON.stringify(this.films$));
        })
    }else{
      this.films$ = items
    }


   }

   details($event: any) {
     const id =$event.url.split('/');
     this.router.navigate(['details', id[id.length -2]], {relativeTo: this.route});
 }

 filter(text: string): void {
  let array: any = localStorage.getItem('films');
  array = JSON.parse(array);
  text = text !== '' ? text.toLocaleLowerCase() : '';
  this.films$ = array.filter(
    (item: any) =>
      item.title.toLocaleLowerCase().indexOf(text) > -1
  );
}
}
