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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var headers_1 = require('./headers');
function isLoggedIn() {
    return !!localStorage.getItem('jwt');
}
exports.isLoggedIn = isLoggedIn;
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loggedIn = false;
        this.loggedIn = false;
    }
    UserService.prototype.logout = function () {
        localStorage.removeItem('jwt');
        this.loggedIn = false;
    };
    UserService.prototype.setLoggedIn = function (value) {
        this.loggedIn = value;
    };
    UserService.prototype.getLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.login = function (username, password) {
        var body = JSON.stringify({ username: username, password: password });
        return this.http.post('http://localhost:3331/sessions/create', body, { headers: headers_1.contentHeaders })
            .map(function (res) {
            return res.json();
        })
            .map(function (res) {
            if (res.id_token) {
                localStorage.setItem('jwt', res.id_token);
                this.loggedIn = true;
            }
            return res.id_token;
        });
    };
    UserService.prototype.signup = function (username, password) {
        var body = JSON.stringify({ username: username, password: password });
        return this.http.post('http://localhost:3331/users', body, { headers: headers_1.contentHeaders })
            .map(function (res) {
            return res.json();
        })
            .map(function (res) {
            if (res.id_token) {
                localStorage.setItem('jwt', res.id_token);
                this.loggedIn = true;
            }
            return res.id_token;
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map