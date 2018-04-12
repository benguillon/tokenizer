import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import {UserService} from '../services/user.service';
import {MaterializeAction} from 'angular2-materialize';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-manage-project',
  templateUrl: './manage-project.component.html',
  styleUrls: ['./manage-project.component.css']
})
export class ManageProjectComponent implements OnInit {
  projects: Array<any>;
  name;
  

  constructor(private router:Router, private _dataService : DataService, private user: UserService) {
    this._dataService.getProjects().subscribe(response => this.projects = response);
   }

  ngOnInit() {
    this.name = this.user.username;
  	console.log('Is user logged in? ', this.user.getUserLoggedIn())
  }

  createProject(e){
    e.preventDefault();
  	console.log(e);
  	var nom = e.target.elements[0].value;
    var tokenmax = e.target.elements[1].value;
    var group = e.target.elements[2].value;
    this._dataService.createProject(nom, tokenmax, group);
    this.reloadProjects();
  }

  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }


  editProject(value) {
    this.router.navigate(['editProject', value]);
  }

  reloadProjects(){
    this._dataService.getProjects().subscribe(response => this.projects = response);
  }

  deleteProject(id){
    if(confirm("Voulez-vous supprimer ce projet ?")) {
      this._dataService.deleteProject(id);
      this.reloadProjects();
    }
  }
}
