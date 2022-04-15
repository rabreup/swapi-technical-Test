import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-films-table',
  templateUrl: './films-table.component.html',
  styleUrls: ['./films-table.component.css']
})
export class FilmsTableComponent implements OnInit {
  @Input() films?: any;
  @Output() detailsClick = new EventEmitter();
  displayedColumns: string[] = ['title', 'episode_id', 'director', 'producer', 'manage'];

  dataSource= this.films;
  constructor() { }

  ngOnInit(): void {
    console.log(this.films)
   // this.films.subscribe((films: any) => this.films = films);

  }

}
