import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmsService } from 'src/app/web/services/films/films.service';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css']
})
export class FilmsDetailsComponent implements OnInit {
  detailsId;
  details: any;
  constructor(
    private route: ActivatedRoute,
    private serviceFilms: FilmsService,
    private router: Router
  ) {
    this.detailsId = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.loadDetails(this.detailsId)
  }

  async loadDetails(idDetails: string){
     this.serviceFilms.getSearch(idDetails).subscribe((resp: any) =>
      {
        this.details = resp;

      })


      }

      goBack(){
        this.router.navigate(['films']);
      }
}
