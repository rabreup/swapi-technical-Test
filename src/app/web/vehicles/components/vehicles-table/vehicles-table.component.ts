import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-vehicles-table',
  templateUrl: './vehicles-table.component.html',
  styleUrls: ['./vehicles-table.component.css']
})
export class VehiclesTableComponent implements OnInit {
  @Input() vehicles?: any;
  @Output() detailsClick = new EventEmitter();
  displayedColumns: string[] = ['name', 'model', 'vehicle_class', 'manufacturer', 'manage'];

  constructor() { }

  ngOnInit(): void {
  }

}
