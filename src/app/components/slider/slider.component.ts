import {Component, ElementRef, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'slider',
  host: {'(window:mousemove)': 'mousemove($event)', '(window:mouseup)': 'mouseup($event)'},
  directives: [NgStyle],
  styles: [require('./slider.css')],
  template: require('./slider.html')
})
export class Slider implements OnInit {
  bar: HTMLDivElement;
  line: HTMLDivElement;
  container;
  drag: boolean = false;

  left: number = 0;
  maxWidth: number = 0;

  valueNumber: number = 0;
  valuePercent: string = '100%';

  constructor(protected elementRef: ElementRef) {
  }

  ngOnInit() {
    this.container = this.elementRef.nativeElement;
    this.bar = this.container.querySelector('.slider-bar');
    this.line = this.container.querySelector('.slider-line');
  }

  mousemove(event) {
    if (!this.drag) return;
    this.pos(event);
  }

  mouseup(event) {
    this.drag = false;
  }

  onMousedown(event) {
    this.drag = true;
    this.left = this.bar.offsetLeft;
    this.maxWidth = this.bar.offsetWidth;

    this.pos(event);
  }

  pos(event) {
    let lineWidth = event.pageX - this.left;
    lineWidth = lineWidth < 0 ? 0 : lineWidth > this.maxWidth ? this.maxWidth : lineWidth;
    this.setValue(lineWidth / this.maxWidth);
  }

  setValue(value) {
    this.valueNumber = value;
    this.valuePercent = value * 100 + '%';
    this.change.emit(value);
  }

  @Input() set value(value) {
    this.setValue(value);
  }

  @Output() change = new EventEmitter(false);
}
