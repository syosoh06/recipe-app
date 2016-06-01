

//app.component.ts
import { Component, OnInit } from '@angular/core';
import {RouteConfig, RouterLink, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {RecipesComponent} from './recipes.component';
import {LoginComponent} from './login.component';
import {SignupComponent} from './signup.component';


@Component({
    selector: 'my-app',
    template:`
<router-outlet></router-outlet>
`,
    directives: [
        ROUTER_DIRECTIVES
    ]
})

@RouteConfig([
    {path: '/', redirectTo: ['LoginComponent']},
    {path: '/login', as: 'LoginComponent', component: LoginComponent},
    {path: '/recipes', as: 'RecipesComponent', component: RecipesComponent},
    {path: '/signup', as: 'SignupComponent', component: SignupComponent}
])

export class AppComponent {

    constructor(public router: Router) {
    }

}





