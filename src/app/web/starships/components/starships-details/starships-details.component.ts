import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarshipsService } from 'src/app/web/services/starships/starships.service';

@Component({
  selector: 'app-starships-details',
  templateUrl: './starships-details.component.html',
  styleUrls: ['./starships-details.component.css']
})
export class StarshipsDetailsComponent implements OnInit {

  detailsId;
  details: any;
  constructor(
    private route: ActivatedRoute,
    private serviceStarships: StarshipsService,
    private router: Router
  ) {
    this.detailsId = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.loadDetails(this.detailsId)


  }

   loadDetails(idDetails: string){
     this.serviceStarships.getSearch(idDetails).subscribe(resp =>
      {
        this.details = resp;
      })
      }
      goBack(){
        this.router.navigate(['starships']);
      }
}


