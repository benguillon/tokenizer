import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result;
  
  constructor(private _http: Http) {}

  getUsers() {
    return this._http.get('/users').map(result => this.result = result.json().data);
  }

  getProjects() {
    return this._http.get('/projects').map(result => this.result = result.json().data);
  }

  getGroups() {
    return this._http.get('/groups').map(result => this.result = result.json().data);
  }

  getTeams() {
    return this._http.get('/teams').map(result => this.result = result.json().data);
  }

  createProject(nom, tokenmax, group){
    this._http.post('/projects', {
      nom: nom,
      tokenmax: tokenmax,
      group: group
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  deleteProject (id:string) {
    return this._http.delete(`/projects/${id}`)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
    );
  }  
}
