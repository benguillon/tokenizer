import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn;
  public username;
  public group;

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(username, group) {
  	this.isUserLoggedIn = true;
    this.username = username;
    this.group = group;
  }

  getUserLoggedIn() {
  	return this.isUserLoggedIn;
  }

}