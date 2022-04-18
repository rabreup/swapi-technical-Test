import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  @ViewChild('txtBuscar')  txtBuscar!: ElementRef<HTMLInputElement>;
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp($event: any ) {
    const searchFilter = $event.currentTarget.value;
    this.search.emit(searchFilter);

  }
}
