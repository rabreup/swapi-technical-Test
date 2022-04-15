import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-species-table',
  templateUrl: './species-table.component.html',
  styleUrls: ['./species-table.component.css']
})
export class SpeciesTableComponent implements OnInit {
  @Input() species?: any;
  @Output() detailsClick = new EventEmitter();
  displayedColumns: string[] = ['name', 'classification', 'designation', 'language', 'manage'];

  constructor() { }

  ngOnInit(): void {
  }

}
