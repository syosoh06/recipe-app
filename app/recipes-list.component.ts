import { Component, Input, OnInit } from '@angular/core';
import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';

@Component({
    selector: 'recipes-list',
    template: `
    <div *ngFor="let recipe of recipes">
    <p (click) = "onSelect(recipe)">{{recipe.name}}</p>
    </div>
    `
})

export class RecipesList implements OnInit{

    recipes: Recipe[];
    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService) { }

    ngOnInit(){
        this.getRecipes();
    }

    getRecipes(){
        this.recipeService.getRecipes()
            .then(recipes => this.recipes = recipes);
    }

    onSelect(recipe: Recipe) {
        this.selectedRecipe = Recipe;
    }

}
