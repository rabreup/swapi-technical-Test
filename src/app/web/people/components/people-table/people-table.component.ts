import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { People} from '../../page/people/state/people.model'

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.css']
})
export class PeopleTableComponent implements OnInit {
  @Input() peoples?: any;
  @Output() detailsClick = new EventEmitter();
  displayedColumns: string[] = ['name', 'gender', 'height', 'birth_year', 'manage'];

  dataSource= this.peoples;
  constructor() { }

  ngOnInit(): void {
  }

}
