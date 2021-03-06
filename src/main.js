import 'regenerator-runtime/runtime';
import './static/bootstrap.min.css';
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