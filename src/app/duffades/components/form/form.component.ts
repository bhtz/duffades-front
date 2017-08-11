import { Component, OnInit } from '@angular/core';
import { Duffade } from "app/duffades/models/duffade";
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

  onChangePhoto(event: EventTarget) {
    let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    let files: FileList = target.files;
    this.duffade.picture = files[0];
  }

  onSubmit() {
    var self = this;
    var duffade = new Parse.Object('Duffade');
    duffade.set("title", this.duffade.title);
    duffade.set("description", this.duffade.description);

    if (this.duffade.picture) {
      var parseFile = new Parse.File(this.duffade.picture.name, this.duffade.picture)
      duffade.set("picture", parseFile);
    }
    
    duffade.save().then(() => alert('save'));
  }

}
