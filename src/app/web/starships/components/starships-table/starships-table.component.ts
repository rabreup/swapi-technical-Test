import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-starships-table',
  templateUrl: './starships-table.component.html',
  styleUrls: ['./starships-table.component.css']
})
export class StarshipsTableComponent implements OnInit {
  @Input() starships?: any;
  @Output() detailsClick = new EventEmitter();
  displayedColumns: string[] = ['name', 'model', 'starship_class', 'crew', 'manage'];

  constructor() { }

  ngOnInit(): void {
  }

}
