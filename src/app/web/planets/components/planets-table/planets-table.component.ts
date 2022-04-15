import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.css']
})
export class PlanetsTableComponent implements OnInit {
  @Input() planets?: any;
  @Output() detailsClick = new EventEmitter();
  displayedColumns: string[] = ['name', 'diameter', 'population', 'climate', 'manage'];

  constructor() { }

  ngOnInit(): void {
  }

}
