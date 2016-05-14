import { Component } from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'home',  // <home></home>
  styles: [ require('./home.css') ],
  template: require('./home.html')
})
export class Home {
  // Set our default values
  localState = { value: '' };
  // TypeScript public modifiers
  constructor(public appState: AppState) {

  }

  submitState(value) {
    this.appState.set('value', value);
  }

}
