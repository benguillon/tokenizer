import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Array<any>;

  constructor(private _dataService : DataService){
    this._dataService.getUsers().subscribe(response => this.users = response);
  }
}
