import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp($event: any) {
    const searchFilter = $event.currentTarget.value;
    this.search.emit(searchFilter);
  }
}
