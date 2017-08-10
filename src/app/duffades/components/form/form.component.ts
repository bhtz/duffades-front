import { Component, OnInit } from '@angular/core';
import { Duffade } from "app/duffades/models/user";
var Parse = require('parse');


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  duffade: Duffade;

  constructor() { }

  ngOnInit() {
    this.duffade = new Duffade();
  }


  onSubmit() {
    var self = this;
    var duffade = new Parse.Object('Duffade');
    duffade.set("title", this.duffade.title);
    duffade.set("description", this.duffade.description);


    duffade.save().then(() => alert('save'));
  }

}
