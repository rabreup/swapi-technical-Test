import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../page/people/state/people.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  detailsId;
  details: any;
  arrayShip: any[]= [];
  constructor(
    private route: ActivatedRoute,
    private servicePeople: PeopleService,
    private router: Router
  ) {
    this.detailsId = this.route.snapshot.params.id;

  }

  ngOnInit(): void {
    this.loadDetails(this.detailsId)


  }

  async loadDetails(idDetails: string){
await this.servicePeople.getSearch(idDetails).subscribe(resp =>
  {
    this.details = resp;
    this.servicePeople.gethomeworld(this.details.homeworld).subscribe((homeworld: any) =>{
      this.details.homeworld = homeworld;
      this.loadshipt(this.details.starships)


    })


  })


  }

 async  loadshipt(ship: any){
  await  ship.forEach((element: string) => {
      this.servicePeople.getstarships(element).subscribe((starships: any) =>{
        this.arrayShip.push(starships);
        this.details.starships.push(starships);
      })
    }
    );

  }
  goBack(){
    this.router.navigate(['people']);
  }
}
