import {Component, ElementRef, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'slider',
  host: {'(window:mousemove)': 'mousemove($event)', '(window:mouseup)': 'mouseup()'},
  directives: [NgStyle],
  styles: [require('./slider.css')],
  template: require('./slider.html')
})
export class Slider implements OnInit {
  bar: HTMLDivElement;
  container;
  drag: boolean = false;

  left: number = 0;
  maxWidth: number = 0;

  valueNumber: number = 1;
  valuePercent: string = '100%';

  constructor(protected elementRef: ElementRef) {
  }

  ngOnInit() {
    this.container = this.elementRef.nativeElement;
    this.bar = this.container.querySelector('.slider-bar');
  }

  mousemove(event) {
    if (this.drag) this.pos(event);
  }

  mouseup() {
    this.drag = false;
  }

  onMousedown(event) {
    this.left = this.bar.offsetLeft;
    this.maxWidth = this.bar.offsetWidth;

    this.pos(event);
    this.drag = true;
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
