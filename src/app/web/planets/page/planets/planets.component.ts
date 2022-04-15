import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LastSearchService } from 'src/app/web/services/lastSearch/last-search.service';
import { PlanetsService } from 'src/app/web/services/planets/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  planets$?: any;
  public sucription: Subscription;
  constructor(
    private servicePlanets: PlanetsService,
    private router: Router,
    private route: ActivatedRoute,
    private lastSearchService: LastSearchService
  ) {  this.loadPlanets()
    this.sucription = this.lastSearchService.filterSubject.subscribe((text) => {
      const url = window.location.href.split('/');
      if (url[3] === 'planets') {
        this.search(text);
      }
    });}

  ngOnInit(): void {
  }

  loadPlanets(){
    // this.people$ = this.servicePeople.getPeople();
       this.servicePlanets.getPlanets().subscribe(resp =>
         {
           this.planets$ = resp.results
           localStorage.setItem('planets', JSON.stringify(this.planets$));
         })
   }

   details($event: any) {
     const id =$event.url.split('/');
     this.router.navigate(['details', id[id.length -2]], {relativeTo: this.route});
 }

 search(text: string): void {
  let array: any = localStorage.getItem('planets');
  array = JSON.parse(array);
  text = text !== '' ? text.toLocaleLowerCase() : '';
  this.planets$ = array.filter(
    (item: any) =>
      item.name.toLocaleLowerCase().indexOf(text) > -1
  );
}
}
