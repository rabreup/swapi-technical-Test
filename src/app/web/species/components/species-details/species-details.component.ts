import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanetsService } from 'src/app/web/services/planets/planets.service';
import { SpeciesService } from 'src/app/web/services/species/species.service';

@Component({
  selector: 'app-species-details',
  templateUrl: './species-details.component.html',
  styleUrls: ['./species-details.component.css']
})
export class SpeciesDetailsComponent implements OnInit {
  detailsId;
  details: any;
  constructor(
    private route: ActivatedRoute,
    private serviceSpecies: SpeciesService,
    private servicePlanet: PlanetsService,
    private router: Router
  ) {
    this.detailsId = this.route.snapshot.params.id;

  }


  ngOnInit(): void {
    this.loadDetails(this.detailsId)


  }

   loadDetails(idDetails: string){
     this.serviceSpecies.getSearch(idDetails).subscribe(resp =>
      {
        this.details = resp;
        this.servicePlanet.gethomeworld(this.details.homeworld).subscribe((homeworld: any) =>{
          this.details.homeworld = homeworld;


        })

      })
      }
      goBack(){
        this.router.navigate(['species']);
      }

}
