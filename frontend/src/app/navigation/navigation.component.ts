import { Component, OnInit } from '@angular/core';
import {LoggedInCallback} from '../service/cognito.service';
import {UserLoginService} from '../service/user-login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, LoggedInCallback {

  constructor(public userLoginService: UserLoginService) {
    this.userLoginService.isAuthenticated(this);
  }

  ngOnInit() {
  }

  isLoggedIn(message: string, isLoggedIn: boolean) {
  }

}
