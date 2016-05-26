
import { Component, OnInit } from '@angular/core';
import { RecipesList } from './recipes-list.component';
import { AddRecipe } from './add-recipe.component';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';
import {IngredientService} from "./ingredients.service";
import {RecipeDetail} from "./recipe-detail.component";

@Component({
    selector: 'my-app',
    template:`
    <recipes-list [recipes]="recipes"></recipes-list>
    <add-recipe [recipes]="recipes"></add-recipe>
    `,
    directives: [
        RecipesList,
        AddRecipe,
        RecipeDetail
    ],
    providers: [
        RecipeService,
        IngredientService
    ]
})

export class AppComponent implements OnInit{

    recipes: Recipe[];

    constructor(private recipeService: RecipeService, private ingredientService: IngredientService) {
    }

    ngOnInit(){
        this.getRecipes();
    }

    getRecipes(){
        this.recipeService.getRecipes()
            .then(recipes => this.recipes = recipes);
    }

}


