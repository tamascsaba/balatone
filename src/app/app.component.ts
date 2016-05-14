import {Component, ViewEncapsulation} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    `
    footer {
      margin-top: 20px;
      color: #fff;
      font-weight: bold;
      text-align:center;
    }
    `
  ],
  template: `
    <header >
      <span>{{name}}</span>
    </header>

    <route-view></route-view>

    <footer>
      Balatone Waves we love Angular2 & TypeScript
    </footer>
  `
})
export class App {
  loading = false;
  name = 'Balatone';
  url = 'http://balatone.2016.angularattack.io/';

  constructor() {

  }
}
