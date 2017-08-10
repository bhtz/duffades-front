import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  templateUrl: './about.component.html'
})
export class AboutComponent {

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  presentLoading() {
    const loader = this.loadingCtrl.create({ content: 'Please wait...', duration: 3000 });
    loader.present();
  }
}
