// regenerator-runtime is to support async/await syntax in ESNext.
// If you don't use async/await, you can remove regenerator-runtime.
import 'regenerator-runtime/runtime';

//#region Styling imports
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './static/pesmel.css';
//#endregion

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

    aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
