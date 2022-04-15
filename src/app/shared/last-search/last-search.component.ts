import { Component, OnInit } from '@angular/core';
import { LastSearchService } from 'src/app/web/services/lastSearch/last-search.service';

@Component({
  selector: 'app-last-search',
  templateUrl: './last-search.component.html',
  styleUrls: ['./last-search.component.css']
})
export class LastSearchComponent implements OnInit {


  constructor(
    private search: LastSearchService
  ) { }

  ngOnInit(): void {
  }



}
