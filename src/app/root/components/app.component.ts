import { appRoutes } from './../router';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomeComponent } from '../../home/components/home/home.component';
import { AboutComponent } from '../../home/components/about/about.component';

var Parse = require('parse');

@Component({
  templateUrl: './app.component.html'
})
export class AppComponent {

  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomeComponent;
  pages: Array<any>;
  connectedUsername: string = '';
  isAuthenticated: boolean = false;

  constructor(public platform: Platform) {
    this.pages = appRoutes.filter((item: any)=> item.menu == true );
    this.initializeApp();
  }

  initializeApp() {
    Parse.initialize("duffade");
    Parse.serverURL = 'https://duffades.herokuapp.com/parse';

    if(Parse.User.current()){
      this.isAuthenticated = true;
      this.connectedUsername = Parse.User.current().get('username');
    }

    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: any) {
    this.nav.setRoot(page.component);
  }

  logout() {
    Parse.User.logOut().then(() => {
      alert('you disconnected');
    });
  }
}
