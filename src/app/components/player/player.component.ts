import {Component, ElementRef, OnInit} from '@angular/core';

import {paper} from 'paper';

@Component({
  selector: 'player',
  styles: [require('./player.css')],
  template: require('./player.html')
})
export class Player implements OnInit {
  canvas;
  shape;
  octagon;

  center: number = 250; // Canvas center x == y
  lineStart: number = 50;
  lineLength: number = 200;
  lineCount: number = 8;

  speed: number = 0.2;
  rotate: number = 0;

  color = {r: 0, g: 0, b: 0};

  points = {
    'top': '',
    'top-right': '',
    'right': '',
    'right-bottom': '',
    'bottom': '',
    'bottom-left': '',
    'left': '',
    'left-top': ''
  };

  constructor(protected elementRef: ElementRef) {
  }

  ngOnInit() {
    const nativeElement = this.elementRef.nativeElement;
    this.canvas = nativeElement.querySelector('#intersection-canvas');
    this.canvas.setAttribute('data-paper-keepalive', 'true');

    paper.setup(this.canvas);

    // import SVG elements
    const svg = nativeElement.querySelector('#intersection-svg');
    const elements = paper.project.importSVG(svg);
    elements.visible = true;
    elements.fillColor = undefined;
    elements.strokeColor = 'black';

    this.shape = (<any>elements).children.shape;
    this.octagon = (<any>elements).children.octagon;

    this.shape.position = paper.view.center;
    this.octagon.position = paper.view.center;

    this.lineCount = this.octagon.children.length;

    paper.view.onFrame = this.onFrame;
  }

  onFrame = () => {
    this.shape.rotate(this.speed);
    this.rotate += this.speed;
    if (this.rotate >= 360) this.rotate = this.rotate - 360;

    for (let i = 0; i < this.lineCount; ++i) {
      this.processIntersections(this.octagon.children[i], this.shape.children[0]);
    }
  };

  processIntersections(line, shape) {
    const intersections = line.getIntersections(shape);

    for (let i = 0, length = intersections.length; i < length; ++i) {
      const intersection = intersections[i];
      const name = intersection._curve._path._name;
      const point = intersection.point;
      const value = this.processSliderValue(point);

      this.points[name] = {
        x: point.x,
        y: point.y,
        value: value
      };

      this.processColor(name, value);
    }
  }

  processSliderValue(point) {
    const a = point.x - this.center;
    const b = point.y - this.center;
    return (Math.sqrt(a * a + b * b) - this.lineStart) / this.lineLength;
  }

  processColor(name, value) {
    const colorValue = Math.round(255 * value);

    if (name === 'top') {
      this.color.r = colorValue;
    } else if (name === 'right-bottom') {
      this.color.g = colorValue;
    } else if (name === 'bottom-left') {
      this.color.b = colorValue;
    }

    const rgb = 'rgb(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ')';

    document.body.style.backgroundColor = rgb;
  }
}
