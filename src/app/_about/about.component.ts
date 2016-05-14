import { Component } from '@angular/core';

@Component({
  selector: 'about',
  styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
    md-card{
      margin: 25px;
    }
  `],
  template: `
  <md-card>
    Balatone is a perfect sound player
  </md-card>
  `
})
export class About {
  constructor() {

  }

}
