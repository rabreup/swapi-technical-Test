import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LastSearchService } from 'src/app/web/services/lastSearch/last-search.service';
import { VehiclesService } from 'src/app/web/services/vehicles/vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles$?: any;
  public sucription: Subscription;
  constructor(
    private serviceVehicles: VehiclesService,
    private router: Router,
    private route: ActivatedRoute,
    private lastSearchService: LastSearchService
  ) {  this.loadPlanets()
    this.sucription = this.lastSearchService.filterSubject.subscribe((text) => {
      const url = window.location.href.split('/');
      if (url[3] === 'vehicles') {
        this.search(text);
      }
    });}

  ngOnInit(): void {
  }

  loadPlanets(){
    // this.people$ = this.servicePeople.getPeople();
       this.serviceVehicles.getVehicles().subscribe(resp =>
         {
           this.vehicles$ = resp.results
           localStorage.setItem('vehicles', JSON.stringify(this.vehicles$));
         })
   }

   details($event: any) {
     const id =$event.url.split('/');
     this.router.navigate(['details', id[id.length -2]], {relativeTo: this.route});
 }

 search(text: string): void {
  let array: any = localStorage.getItem('vehicles');
  array = JSON.parse(array);
  text = text !== '' ? text.toLocaleLowerCase() : '';
  this.vehicles$ = array.filter(
    (item: any) =>
      item.name.toLocaleLowerCase().indexOf(text) > -1 ||
      item.model.toLocaleLowerCase().indexOf(text) > -1
  );
}
}
