import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LastSearchService } from 'src/app/web/services/lastSearch/last-search.service';
import { StarshipsService } from 'src/app/web/services/starships/starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  starships$?: any;
  public sucription: Subscription;
  constructor(
    private serviceStarships: StarshipsService,
    private router: Router,
    private route: ActivatedRoute,
    private lastSearchService: LastSearchService
  ) {
    this.loadPlanets();
    this.sucription = this.lastSearchService.filterSubject.subscribe((text) => {
      const url = window.location.href.split('/');
      if (url[3] === 'starships') {
        this.search(text);
      }
    });}

  ngOnInit(): void {
  }

  loadPlanets(){
    // this.people$ = this.servicePeople.getPeople();
       this.serviceStarships.getStarships().subscribe(resp =>
         {
           this.starships$ = resp.results
           localStorage.setItem('starships', JSON.stringify(this.starships$));
         })
   }

   details($event: any) {
     const id =$event.url.split('/');
     this.router.navigate(['details', id[id.length -2]], {relativeTo: this.route});
 }
 search(text: string): void {
  let array: any = localStorage.getItem('starships');
  array = JSON.parse(array);
  text = text !== '' ? text.toLocaleLowerCase() : '';
  this.starships$ = array.filter(
    (item: any) =>
      item.name.toLocaleLowerCase().indexOf(text) > -1 ||
      item.model.toLocaleLowerCase().indexOf(text) > -1
  );
}
}
