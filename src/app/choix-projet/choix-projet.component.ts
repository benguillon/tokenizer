import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-choix-projet',
  templateUrl: './choix-projet.component.html',
  styleUrls: ['./choix-projet.component.css']
})
export class ChoixProjetComponent implements OnInit {
  projects: Array<any>;
  teams: Array<any>;
  myProjects : Array<any>;
  myTeam;
  name;
  group;

  constructor(private router:Router, private _dataService : DataService, private user: UserService) {
    this.myProjects = new Array();

    this._dataService.getProjects().subscribe(response => {
      this.projects = response;
      for(let project of this.projects) {
        if (project.group == this.group) {
          this.myProjects.push(project);
        }
      }
    }      
    );
  }

    ngOnInit() {
      this.name = this.user.username;
      this.group = this.user.group;
  
      console.log('Is user logged in? ', this.user.getUserLoggedIn())
    }

    openProject(nomProjet) {
      this.router.navigate(['dashboard', nomProjet]);
    }

}
