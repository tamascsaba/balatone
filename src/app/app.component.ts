import {Component, ViewEncapsulation } from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css'),
    `html, body{
      height: 100%;
      background: #F4FAFA;
    }
    button.active{
      background: #fff;
      color: #009688;
    }
    button.active:hover{
      color: #fff;
    }
    .fill{
      flex: 1 1 auto;
    }
    .app-state{
      margin: 15px;
      flex: 1;
    }
    .home{
      flex: 1;
    }
    md-content{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    footer{
      flex: 0 0 60px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
    }`
  ],
  template: `
    <md-content>
      <md-toolbar color="primary">
          <span>{{ name }}</span>
          <span class="fill"></span>
      </md-toolbar>

      <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

      <route-view></route-view>

      <footer>
        Balatone Waves we love Angular2 & TypeScript
      </footer>
      </md-content>
  `
})
export class App {
  loading = false;
  name = 'Balatone';
  url = 'http://balatone.2016.angularattack.io/';

  constructor() {

  }
}
