/**
 * Created by schakraborty on 5/25/16.
 */

// Main.ts file
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import '../node_modules/rxjs/add/operator/map';
import { AppComponent } from './app.component';
bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS]);


