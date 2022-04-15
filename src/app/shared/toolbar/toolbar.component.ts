import { Component, OnInit } from '@angular/core';
import { LastSearchService } from 'src/app/web/services/lastSearch/last-search.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  _historial: any;

  constructor(
    private searchService:LastSearchService
  ) { }

  ngOnInit(): void {
  }
  SearchFilter(text: string){
    localStorage.setItem('search', JSON.stringify(text));
    const url = window.location.href.split('/');
    this.searchService.setFilterValue(text) ;




  }

}
