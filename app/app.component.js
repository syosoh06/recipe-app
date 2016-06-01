"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//app.component.ts
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var recipes_component_1 = require('./recipes.component');
var login_component_1 = require('./login.component');
var signup_component_1 = require('./signup.component');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<router-outlet></router-outlet>\n",
            directives: [
                router_deprecated_1.ROUTER_DIRECTIVES
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', redirectTo: ['LoginComponent'] },
            { path: '/login', as: 'LoginComponent', component: login_component_1.LoginComponent },
            { path: '/recipes', as: 'RecipesComponent', component: recipes_component_1.RecipesComponent },
            { path: '/signup', as: 'SignupComponent', component: signup_component_1.SignupComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map