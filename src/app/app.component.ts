import {Component, ViewEncapsulation} from '@angular/core';

import {Header} from './components/header';
import {Footer} from './components/footer';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  directives: [Header, Footer],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    `
    body {
      color: #FFF;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Open Sans", "Helvetica Neue", sans-serif;
      font-style: normal;
      font-size: 1rem;
      letter-spacing: 0;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -moz-font-feature-settings: "liga" on;
    }

    *{
      box-sizing: border-box;
    }
    `
  ],
  template: `
    <header></header>
    <route-view></route-view>
    <footer></footer>
  `
})
export class App {
  loading = false;
  url = 'http://balatone.2016.angularattack.io/';

  constructor() {

  }
}
