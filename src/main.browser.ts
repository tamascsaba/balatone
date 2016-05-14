import {provide} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {provideRouter, Routes} from '@ngrx/router';

import {DIRECTIVES, PIPES, PROVIDERS} from './platform/browser';
import {ENV_PROVIDERS} from './platform/environment';

import {App, APP_PROVIDERS} from './app';

import {Home} from './app/_home';
import {About} from './app/_about';

const routes: Routes = [
  {path: '/', component: Home},
  {path: '/about', component: About}
];

export function main(initialHmrState?: any): Promise<any> {

  return bootstrap(App, [
    ...PROVIDERS,
    ...ENV_PROVIDERS,
    ...DIRECTIVES,
    ...PIPES,
    ...APP_PROVIDERS,
    provideRouter(routes),
    provide(LocationStrategy, {useClass: HashLocationStrategy})
  ])
  .catch(err => console.error(err));

}

/*
 * Hot Module Reload
 * experimental version by @gdi2290
 */
if ('development' === ENV && HMR === true) {
  // activate hot module reload
  let ngHmr = require('angular2-hmr');
  ngHmr.hotModuleReplacement(main, module);
} else {
  // bootstrap when document is ready
  document.addEventListener('DOMContentLoaded', () => main());
}
