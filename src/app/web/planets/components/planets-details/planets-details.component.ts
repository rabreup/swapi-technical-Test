import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetsService } from 'src/app/web/services/planets/planets.service';

@Component({
  selector: 'app-planets-details',
  templateUrl: './planets-details.component.html',
  styleUrls: ['./planets-details.component.css']
})
export class PlanetsDetailsComponent implements OnInit {

  detailsId;
  details: any;
  constructor(
    private route: ActivatedRoute,
    private servicePlanets: PlanetsService,
    private router: Router
  ) {
    this.detailsId = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.loadDetails(this.detailsId)


  }

   loadDetails(idDetails: string){
     this.servicePlanets.getSearch(idDetails).subscribe(resp =>
      {
        this.details = resp;
      })
      }
      goBack(){
        this.router.navigate(['planets']);
      }
}
