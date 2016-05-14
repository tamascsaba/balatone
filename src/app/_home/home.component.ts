import {Component} from '@angular/core';

import {AppState} from '../app.service';

import {Player} from '../components/player';
import {ThemeSelector} from '../components/theme-selector';

@Component({
  selector: 'home',
  directives: [Player, ThemeSelector],
  styles: [require('./home.css')],
  template: require('./home.html')
})
export class Home {
  theme: string = 'star_wars';

  changeTheme(theme) {
    this.theme = theme;
  }

}
