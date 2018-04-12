import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: Array<any>;
  myProject;
  teams: Array<any>;
  myTeam;
  name;
  group;
  nomProject;
  tokens;

  constructor(private route: ActivatedRoute, private router:Router, private _dataService : DataService, private user: UserService) {
    this.nomProject = this.route.snapshot.paramMap.get('id');
    console.log("Nom projet : " + this.nomProject);
    this._dataService.getProjects().subscribe(response => {
      this.projects = response;
    }      
    );

    this._dataService.getTeams().subscribe(response => {
      this.teams = response;
      for(let team of this.teams) {
        if (team.projet == this.nomProject) {
          this.myTeam = team;
        }
      }
    }      
    );

    // for(let user of this.myTeam.users){
    //   this.tokens = this.tokens + user.token;
    // }

   }

  ngOnInit() {
    this.name = this.user.username;
    this.group = this.user.group;

  	console.log('Is user logged in? ', this.user.getUserLoggedIn())
  }

  getCurrentTokens(){
    var tokens = 0;
    for(let user of this.myTeam.users){
      tokens = tokens + user.token;
    }
    return tokens
  }

}