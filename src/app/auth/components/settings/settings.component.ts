import { Component, OnInit, NgZone } from '@angular/core';
var Parse = require('parse');

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  file: any;
  user: any = {};

  constructor(private zone: NgZone) {

  }

  ngOnInit() {
    this.user = Parse.User.current();
  }

  onSave() {
    var parseFile = new Parse.File(this.file.name, this.file);
    var user = Parse.User.current();
    user.set('picture', parseFile);
    user.save().then((user) => {
      this.zone.run(() => { this.user = Parse.User.current(); });
    });
  }

  onChange(event) {
    this.file = event.srcElement.files[0];
    console.log(this.file);
  }

  ionViewCanEnter() {
    return Parse.User.current() != null;
  }

}
