
import { Component, OnInit } from '@angular/core';
import { RouteConfig, Router, RouterLink } from '@angular/router-deprecated';
import { RecipesList } from './recipes-list.component';
import { AddRecipe } from './add-recipe.component';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';
import {IngredientService} from "./ingredients.service";
import {RecipeDetail} from "./recipe-detail.component";
import {CanActivate} from '@angular/router-deprecated';
import { isLoggedIn } from './user.service';
import { UserService } from './user.service';

@Component({
    selector: 'recipes',
    template:`
    <recipes-list [recipes]="recipes"></recipes-list>
    <add-recipe [recipes]="recipes"></add-recipe>
    <button (click)="logout()">Logout</button>
    `,
    directives: [
        RecipesList,
        AddRecipe,
        RecipeDetail
    ],
    providers: [
        RecipeService,
        IngredientService,
        UserService
    ]
})

@CanActivate(isLoggedIn)
export class RecipesComponent implements OnInit{

    recipes: Recipe[];

    constructor(private recipeService: RecipeService,
                private ingredientService: IngredientService,
                private userService: UserService,
                private router: Router
    ) {
    }

    ngOnInit(){
        this.getRecipes();
    }

    getRecipes(){
        this.recipeService.getRecipes()
            .then(recipes => this.recipes = recipes);
    }

    logout(){
        this.userService.logout();
        this.router.parent.navigateByUrl('/login');
    }

}


