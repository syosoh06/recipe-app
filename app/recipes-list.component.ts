
import { Component, Input, OnInit } from '@angular/core';
import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';
import {RecipeDetail} from './recipe-detail.component';
import {IngredientService} from './ingredients.service';

@Component({
    selector: 'recipes-list',
    template: `
    <div *ngFor="let recipe of recipes">
    <p (click) = "onSelect(recipe)">{{recipe.name}}</p>
    <recipe-detail *ngIf="recipe == selectedRecipe && display" [selectedRecipe]="selectedRecipe" [recipes]="recipes"></recipe-detail>
    </div>
    `,
    directives: [
        RecipeDetail
    ]
})

export class RecipesList implements OnInit{

    @Input() recipes: Recipe[];
    selectedRecipe: Recipe;
    display: boolean;

    constructor(private recipeService: RecipeService, private ingredientService: IngredientService) {
    }

    ngOnInit(){
        this.display=false;
    }


    onSelect(recipe: Recipe) {
        this.selectedRecipe = recipe;
        this.display=!(this.display);
    }

}

