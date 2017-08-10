import { Component, OnInit } from '@angular/core';
import { Duffade } from "app/duffades/models/user";


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  duffade:Duffade;

  constructor() { }

  ngOnInit() {
    this.duffade = new Duffade();
  }


  onSubmit(){

  }

}
