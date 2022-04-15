import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LastSearchService } from 'src/app/web/services/lastSearch/last-search.service';
import { SpeciesService } from 'src/app/web/services/species/species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  species$?: any;
  public sucription: Subscription;
  constructor(
    private serviceSpecies: SpeciesService,
    private router: Router,
    private route: ActivatedRoute,
    private lastSearchService: LastSearchService
  ) {  this.loadPlanets();
    this.sucription = this.lastSearchService.filterSubject.subscribe((text) => {
      const url = window.location.href.split('/');
      if (url[3] === 'species') {
        this.search(text);
      }
    });}
  ngOnInit(): void {
  }

  loadPlanets(){
    // this.people$ = this.servicePeople.getPeople();
       this.serviceSpecies.getSpecies().subscribe(resp =>
         {
           this.species$ = resp.results
           localStorage.setItem('species', JSON.stringify(this.species$));
         })
   }

   details($event: any) {
     const id =$event.url.split('/');
     this.router.navigate(['details', id[id.length -2]], {relativeTo: this.route});
 }

 search(text: string): void {
  let array: any = localStorage.getItem('species');
  array = JSON.parse(array);
  text = text !== '' ? text.toLocaleLowerCase() : '';
  this.species$ = array.filter(
    (item: any) =>
      item.name.toLocaleLowerCase().indexOf(text) > -1
  );
}
}
