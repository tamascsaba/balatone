import {Component, EventEmitter, Output} from '@angular/core';
import {QueryParams} from '@ngrx/router';

import {THEMES} from '../../shared/themes';

@Component({
  selector: 'shape-selector',
  styles: [require('./shape-selector.css')],
  template: require('./shape-selector.html')
})
export class ShapeSelector {
  themeName: string;
  shapes: Array<string>;
  constructor(private qp: QueryParams) {
    this.qp
      .map((q) => {
        const query: any = q;

        if (!query.theme) {
          query.theme = 'blackbird';
        }

        this.themeName = query.theme;
        this.shapes = THEMES[this.themeName].shapes;
      }).subscribe();
  }
}
