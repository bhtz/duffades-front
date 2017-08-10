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
  pages: Array<{ title: string, component: any }>;
  test: Array<any>;

  constructor(public platform: Platform) {

    this.test = appRoutes;

    this.pages = [
      { title: 'Home', component: HomeComponent },
      { title: 'About', component: AboutComponent }
    ];

    this.initializeApp();
  }

  initializeApp() {
    Parse.initialize("duffade");
    Parse.serverURL = 'https://duffades.herokuapp.com/parse';

    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page: any) {
    this.nav.setRoot(page.component);
  }
}
