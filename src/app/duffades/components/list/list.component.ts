import { Component, OnInit, NgZone } from '@angular/core';
import { Duffade } from "app/duffades/models/duffade";
var Parse = require('parse');

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  duffades: Array<any> = [];

  constructor(private zone: NgZone) { }

  ngOnInit() {
    var q = new Parse.Query('Duffade');
    q.find().then((duffades) => {
      this.zone.run(() => { this.duffades = duffades; });
    });
  }

  goDetail(duffade:any){
  }
  
  ionViewCanEnter() {
    return Parse.User.current() != null;
  }

}
