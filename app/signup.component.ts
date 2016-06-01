//signup.component.ts
import { Component, OnInit } from '@angular/core';
import { RouteConfig, Router, RouterLink } from '@angular/router-deprecated';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from './headers';
import {UserService} from './user.service';
@Component({
    selector: 'signup',
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
    <button (click)="signup(username, password)">submit</button>
    `,
    directives: [RouterLink],
    providers: [UserService]
})

export class SignupComponent {

    username: string;
    password: string;

    self: any = this;

    constructor(public router: Router, private userService: UserService, private http: Http){
    }

    signup(username, password) {
        this.userService.signup(username, password).subscribe((result) => {
            if (result) {
                this.router.parent.navigateByUrl('/recipes');
            }
        });
    }
}