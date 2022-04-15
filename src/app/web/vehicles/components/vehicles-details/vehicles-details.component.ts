import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService } from 'src/app/web/services/vehicles/vehicles.service';

@Component({
  selector: 'app-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})
export class VehiclesDetailsComponent implements OnInit {

  detailsId;
  details: any;
  constructor(
    private route: ActivatedRoute,
    private serviceVehicles: VehiclesService,
    private router: Router
  ) {
    this.detailsId = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.loadDetails(this.detailsId)


  }

   loadDetails(idDetails: string){
     this.serviceVehicles.getSearch(idDetails).subscribe(resp =>
      {
        this.details = resp;
      })
      }
      goBack(){
        this.router.navigate(['planets']);
      }

}
