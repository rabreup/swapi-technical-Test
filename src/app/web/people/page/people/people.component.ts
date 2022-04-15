import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LastSearchService } from 'src/app/web/services/lastSearch/last-search.service';
import { People } from './state/people.model';
import { PeopleService } from './state/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  people$?: any;
  public sucription: Subscription;

  constructor(
    private servicePeople: PeopleService,
    private router: Router,
    private route: ActivatedRoute,
    private lastSearchService: LastSearchService
  ) {  this.loadPeople()
    this.sucription = this.lastSearchService.filterSubject.subscribe((text) => {
      const url = window.location.href.split('/');
      if (url[3] === 'people') {
        this.filter(text);
      }
    });}

  ngOnInit(): void {

  }

  loadPeople(){
   // this.people$ = this.servicePeople.getPeople();
      this.servicePeople.getPeople().subscribe(resp =>
        {
          this.people$ = resp.results
          localStorage.setItem('people', JSON.stringify(this.people$));
        })
  }

  details($event: any) {
    const id =$event.url.split('/');
    this.router.navigate(['details', id[id.length -2]], {relativeTo: this.route});
}

filter(text: string): void {
  let array: any = localStorage.getItem('people');
  array = JSON.parse(array);
  text = text !== '' ? text.toLocaleLowerCase() : '';
  this.people$ = array.filter(
    (item: any) =>
      item.name.toLocaleLowerCase().indexOf(text) > -1
  );
}

}
