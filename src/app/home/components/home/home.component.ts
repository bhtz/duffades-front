import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RouterLink } from '@angular/router';

@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(public navCtrl: NavController) {
  }
}
