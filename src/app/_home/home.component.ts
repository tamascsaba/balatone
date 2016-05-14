import { Component } from '@angular/core';

import { AppState } from '../app.service';

import {paper} from 'paper';

@Component({
  selector: 'home',
  styles: [ require('./home.css') ],
  template: require('./home.html')
})
export class Home {
  constructor(public appState: AppState) {
    console.log(paper.version);
  }

  submitState(value) {
    this.appState.set('value', value);
  }

}
