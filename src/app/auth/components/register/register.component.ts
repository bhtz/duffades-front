import { HomeComponent } from './../../../home/components/home/home.component';
import { NavController } from 'ionic-angular';
import { Component, OnInit } from '@angular/core';
var Parse = require('parse');

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username: string = '';
  email: string = '';
  password: string = '';

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  onRegister() {
    var self = this;
    var user = new Parse.User();
    user.set("username", this.username);
    user.set("email", this.email);
    user.set("password", this.password);

    user.signUp(null, {
      success: function (user) {
        self.navCtrl.setRoot(HomeComponent);
      },
      error: function (user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });

  }
}