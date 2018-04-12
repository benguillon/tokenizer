import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../services/user.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  users: Array<any>;

  constructor(private router:Router, private user:UserService, private _dataService : DataService ) { 
    this._dataService.getUsers().subscribe(response => this.users = response);
  }

  ngOnInit() {
    console.log('hit');
  }

  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    
    for(let user of this.users) {
      if (user.mail == username && user.password == password){
        if(user.role == "eleve") {
          this.user.setUserLoggedIn(user.mail, user.group);
          this.router.navigate(['choixProjet']);
        }
        if(user.role == "intervenant") {
          this.user.setUserLoggedIn(user.mail, user.group);
          this.router.navigate(['manageRequest']);
        }
        if(user.role == "responsable") {
          this.user.setUserLoggedIn(user.mail, user.group);
          this.router.navigate(['manageProject']);
        }
         
      }    
    }
  }

}