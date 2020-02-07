// regenerator-runtime is to support async/await syntax in ESNext.
// If you don't use async/await, you can remove regenerator-runtime.
import 'regenerator-runtime/runtime';

import 'bootstrap';
import './static/bootstrap.min.css';
// import './static/bootstrap-dark.min.css';
import './static/theme-switch.css';
import './static/style.css';

import { PLATFORM } from 'aurelia-pal';
import * as environment from '../config/environment.json';


export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));
  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

//   aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('pages/login/login-page')));
  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}