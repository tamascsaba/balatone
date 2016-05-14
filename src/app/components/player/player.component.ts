import 'rxjs/add/operator/pluck';
import 'rxjs/add/observable/from';

import {Component, ElementRef, OnInit, Input} from '@angular/core';
import {QueryParams} from '@ngrx/router';
import {paper} from 'paper';

import {Observable} from 'rxjs/Observable';

import {THEMES, Theme} from '../../shared/themes';
import {ToFixedPipe} from '../../pipes/toFixed.pipe';

import {Slider} from '../slider';

@Component({
  selector: 'player',
  pipes: [ToFixedPipe],
  directives: [Slider],
  styles: [require('./player.css')],
  template: require('./player.html')
})
export class Player implements OnInit {
  theme: Theme = THEMES.starWars; // Default theme
  canvas: HTMLCanvasElement;
  shape: paper.Item;
  octagon: paper.Item;

  center: number = 300; // Canvas center x == y
  lineStart: number = 40;
  lineLength: number = 160;
  lineCount: number = 8;

  speed: number = 0.2;
  rotate: number = 0;

  size: number = 1;
  pos: number = 0;

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

  constructor(private elementRef: ElementRef, private qp: QueryParams) {
  }

  ngOnInit() {
    this.qp
      .pluck<string>('theme')
      .distinctUntilChanged()
      .map((theme) => {
        if (THEMES[theme]) {
          this.theme = THEMES[theme];
        }
        this.importSVG();
      }).subscribe();

    this.initalizeCanvas();
  }

  initalizeCanvas() {
    const nativeElement = this.elementRef.nativeElement;
    this.canvas = nativeElement.querySelector('#intersection-canvas');
    this.canvas.setAttribute('data-paper-keepalive', 'true');

    paper.setup(this.canvas);

    this.importSVG();

  }

  importSVG() {
    if (paper.project) {
      const nativeElement = this.elementRef.nativeElement;
      const svg = nativeElement.querySelector('#intersection-svg');

      // Reset the project
      this.rotate = 0;
      paper.project.clear();

      // Import the intersection svg
      const elements: paper.Item = paper.project.importSVG(svg);

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

  getPoints() {
    return Object.keys(this.points);
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

  onChangeVolume(value) {
    this.size = value;
    this.pos = 300 * (1 - value);
  }
}
