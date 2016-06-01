/**
 * Created by schakraborty on 5/25/16.
 */
"use strict";
// Main.ts file
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
require('../node_modules/rxjs/add/operator/map');
var app_component_1 = require('./app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [router_deprecated_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map