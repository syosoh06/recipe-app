//login.component.ts
import { Component, OnInit } from '@angular/core';
import { RouteConfig, Router, RouterLink } from '@angular/router-deprecated';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from './headers';
import {UserService} from './user.service';
@Component({
    selector: 'login',
    template: `
    <h2>Please Login</h2>
    <div>
    Enter your username
    <input [(ngModel)]="username"/>
    </div>
    <div>
    Enter your password
    <input [(ngModel)]="password"/>
    </div>
    <button (click)="login(username, password)">submit</button>
    <button (click)="signup()">Sign up</button>
    `,
    directives: [RouterLink],
    providers: [UserService]
})

export class LoginComponent {

    username: string;
    password: string;

    self: any = this;

    constructor(public router: Router, private userService: UserService, private http: Http){
    }
    login(username, password) {
        this.userService.login(username, password).subscribe((result) => {
            if (result) {
                this.router.parent.navigateByUrl('/recipes');
            }
        });
    }

    signup(){
        this.router.parent.navigateByUrl('/signup');
    }
}