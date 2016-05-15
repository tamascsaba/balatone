import {FORM_PROVIDERS} from '@angular/common';
import {ROUTER_PROVIDERS} from '@ngrx/router';

export const APPLICATION_PROVIDERS = [
  ...FORM_PROVIDERS,
  ...ROUTER_PROVIDERS
];

export const PROVIDERS = [
  ...APPLICATION_PROVIDERS
];
