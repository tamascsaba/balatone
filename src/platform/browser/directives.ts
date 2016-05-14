/*
 * These are globally available directives in any template
 */

import {PLATFORM_DIRECTIVES} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@ngrx/router';

export const APPLICATION_DIRECTIVES = [
  ...ROUTER_DIRECTIVES
];

export const DIRECTIVES = [
  {provide: PLATFORM_DIRECTIVES, multi: true, useValue: APPLICATION_DIRECTIVES }
];
