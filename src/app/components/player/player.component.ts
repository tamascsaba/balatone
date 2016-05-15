import 'rxjs/add/operator/pluck';
import 'rxjs/add/observable/from';

import {Component, ElementRef, OnInit, Input} from '@angular/core';
import {QueryParams} from '@ngrx/router';
import {paper} from 'paper';

import {Observable} from 'rxjs/Observable';

import {THEMES, Theme} from '../../shared/themes';
import {Points} from '../../shared/points';
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
  theme: Theme = THEMES.blackbird; // Default theme;
  audios: Points<HTMLAudioElement>;
  play: boolean = false;
  displayShape: string;
  shape: paper.Item;
  octagon: paper.Item;

  center: number = 300; // Canvas center x == y
  lineStart: number = 40;
  lineLength: number = 160;
  lineCount: number = 8;

  sliderSpeedValue = 0.04;
  speed: number;
  rotate: number = 0;

  size: number = 1;
  pos: number = 0;

  color = {r: 0, g: 0, b: 0};

  points: Points<any> = {
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
    this.createAudioElements();
    this.setupAudio();
  }

  createAudioElements() {
    let i = 0;
    (<any>this).audios = {};
    for (let point of Object.keys(this.points)) {
      this.audios[point] = new Audio();
      this.audios[point].loop = true;
    }
  }

  setupAudio() {
    let i = 0;
    for (let audio in this.audios) {
      if (this.audios.hasOwnProperty(audio)) {
        this.audios[audio].pause();
        this.audios[audio].setAttribute('src', '/assets/mp3/' + this.theme.items[i++].music);
      }
    }
  }

  onControl() {
    let i = 0;
    for (let audio in this.audios) {
      const active = this.theme.items[i++].active;

      if (this.audios.hasOwnProperty(audio)) {
        if (this.play) {
          this.audios[audio].pause();
        } else if (active) {
          this.audios[audio].play();
        }
      }
    }
    this.play = !this.play;
  }

  onSwitchSoundEffect(index, key) {
    this.theme.items[index].active = !this.theme.items[index].active;

    if (this.play) {
      const audio = this.audios[key];

      if (audio.paused && this.theme.items[index].active) {
        audio.play();
      } else if (!audio.paused && !this.theme.items[index].active) {
        audio.pause();
      }
    }
  }

  ngOnInit() {
    this.setupCanvas();

    this.qp
      .pluck<string>('theme')
      .map((theme) => {
        if (THEMES[theme] && paper.project) {
          this.theme = THEMES[theme];
          this.setupAudio();
          this.play = false;
        }
        this.importSVG();
      }).subscribe();
  }

  setupCanvas() {
    paper.setup('intersection-canvas');
  }

  importSVG() {
    // Reset the project
    paper.project.clear();

    // Import the intersection svg
    paper.project.importSVG(this.theme.shapes[0], (elements) => {
      // Export to use in angular
      const svg = paper.project.exportSVG();

      elements.visible = true;
      elements.fillColor = undefined;
      elements.strokeColor = 'black';

      this.shape = (<any>elements).children.shape;
      this.octagon = (<any>elements).children.octagon;

      this.shape.position = paper.view.center;
      this.octagon.position = paper.view.center;

      this.lineCount = this.octagon.children.length;

      this.rotate = 0;
      this.displayShape = svg.querySelector('#display-shape').getAttribute('d');

      // Set inital intersections
      this.processIntersections();

      paper.view.onFrame = this.onFrame;
    });
  }

  onFrame = () => {
    if (this.play) {
      this.shape.rotate(this.speed);
      this.rotate += this.speed;
      if (this.rotate >= 360) this.rotate = this.rotate - 360;
      this.processIntersections();
    }
  };

  processIntersections() {
    for (let i = 0; i < this.lineCount; ++i) {
      this.setIntersections(this.octagon.children[i], this.shape.children[0]);
    }
  }

  setIntersections(line, shape) {
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
      this.setVolume(name, value);
    }
  }

  setVolume(name, value) {
    if (this.size < 1) {
      value = value * this.size;
      value = value < 0 ? 0 : value > 1 ? 1 : value;
    }
    this.audios[name].volume = value;
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
    const colorValue = Math.round(220 * value); // 255! 220 > darker

    if (name === 'top') {
      this.color.r = colorValue;
    } else if (name === 'right-bottom') {
      this.color.g = colorValue;
    } else if (name === 'bottom-left') {
      this.color.b = colorValue;
    }

    document.body.style.backgroundColor = 'rgb(' + this.color.r + ',' + this.color.g + ',' + this.color.b + ')';
  }

  onChangeVolume(value) {
    this.size = value;
    this.pos = this.center * (1 - value);
  }

  onChangeSpeed(value) {
    this.speed = 2 * value;
  }
}
