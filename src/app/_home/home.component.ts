import {Component} from '@angular/core';

import {AppState} from '../app.service';

import {Player} from '../components/player';

@Component({
  selector: 'home',
  directives: [Player],
  styles: [require('./home.css')],
  template: require('./home.html')
})
export class Home {
  constructor(public appState: AppState) {
  }

  submitState(value) {
    this.appState.set('value', value);
  }

}
