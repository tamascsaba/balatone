import {Component} from '@angular/core';

import {AppState} from '../app.service';

import {Player} from '../components/player';
import {ThemeSelector} from '../components/theme-selector';
import {ShapeSelector} from '../components/shape-selector';

@Component({
  selector: 'home',
  directives: [ThemeSelector, ShapeSelector, Player],
  styles: [require('./home.css')],
  template: require('./home.html')
})
export class Home {
  theme: string = 'blackbird';

  changeTheme(theme) {
    this.theme = theme;
  }

}
