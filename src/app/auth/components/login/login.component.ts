import { Component, OnInit } from '@angular/core';
var Parse = require('parse');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    Parse.User.logIn(this.username, this.password, {
      success: function (user) {
        alert('welcome: ' + user.get('username'));
      },
      error: function (user, error) {
        alert(error.message);
      }
    });
  }

}
