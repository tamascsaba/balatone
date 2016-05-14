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
  theme: string = 'star_wars';

  changeTheme(theme) {
    this.theme = theme;
  }

}
