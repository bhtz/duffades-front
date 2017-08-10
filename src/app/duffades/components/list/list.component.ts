import { Component, OnInit } from '@angular/core';
import { Duffade } from "app/duffades/models/user";

var Parse = require('parse');

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  duffades: Duffade[] = [];
  isLoading: boolean = true;

  constructor() {


  }

  ngOnInit() {

    let q = new Parse.Query('Duffade');

    q.find().then((response) => {
      console.log(response[0]);

      for (var index = 0; index < response.length; index++) {

        let d: Duffade = new Duffade();
        d.title = response[index].get('title');
        d.description = response[index].get('description');

        this.duffades.push(d);
        console.log(d.description);

      }
      this.isLoading = false;
    });

  }

}
