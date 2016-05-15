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
  shapeIndex: number;
  shapes: Array<string>;
  constructor(private qp: QueryParams) {
    this.qp
      .map((q) => {
        const query: any = q;
        this.shapeIndex = parseInt(query.shapeIndex, 10) || 0;
        this.themeName = query.theme || 'blackbird';
        this.shapes = THEMES[this.themeName].shapes;
      }).subscribe();
  }
}
