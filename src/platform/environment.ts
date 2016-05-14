import {enableProdMode} from '@angular/core';

let PROVIDERS = [];

if ('production' === ENV) {
  // Production
  enableProdMode();

  PROVIDERS = [
    ...PROVIDERS
  ];

} else {
  // Development
  PROVIDERS = [
    ...PROVIDERS
  ];

}

export const ENV_PROVIDERS = [
  ...PROVIDERS
];
