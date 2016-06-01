var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//signup.component.ts
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
var user_service_1 = require('./user.service');
var SignupComponent = (function () {
    function SignupComponent(router, userService, http) {
        this.router = router;
        this.userService = userService;
        this.http = http;
        this.self = this;
    }
    SignupComponent.prototype.signup = function (username, password) {
        var _this = this;
        this.userService.signup(username, password).subscribe(function (result) {
            if (result) {
                _this.router.parent.navigateByUrl('/recipes');
            }
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'signup',
            template: "\n    <h2>Please Login</h2>\n    <div>\n    Enter your username\n    <input [(ngModel)]=\"username\"/>\n    </div>\n    <div>\n    Enter your password\n    <input [(ngModel)]=\"password\"/>\n    </div>\n    <button (click)=\"signup(username, password)\">submit</button>\n    ",
            directives: [router_deprecated_1.RouterLink],
            providers: [user_service_1.UserService]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, user_service_1.UserService, http_1.Http])
    ], SignupComponent);
    return SignupComponent;
})();
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map