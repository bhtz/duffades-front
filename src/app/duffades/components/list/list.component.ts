import { Component, OnInit, NgZone } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { Duffade } from "app/duffades/models/duffade";
var Parse = require('parse');

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  duffades: Array<any> = [];
  loading: any;

  constructor(private zone: NgZone, private loadingCtrl: LoadingController) {
    
  }

  ngOnInit() {
    this.activate(null);
  }

  activate(refresher) {
    let loading = this.loadingCtrl.create({ content: "Please wait..." });
    loading.present();
    var q = new Parse.Query('Duffade');
    q.find().then((duffades) => {
      this.zone.run(() => { 
        this.duffades = duffades; 
        loading.dismiss();
        if(refresher){ refresher.complete(); }
      });
    });
  }

  ionViewCanEnter() {
    return Parse.User.current() != null;
  }

}
