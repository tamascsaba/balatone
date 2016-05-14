import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'theme-selector',
  styles: [require('./theme-selector.css')],
  template: require('./theme-selector.html')
})
export class ThemeSelector {
  @Output() onThemeChange = new EventEmitter();

  onClick(event, theme) {
    this.onThemeChange.next(theme);
  }

}
