
import { Component, OnInit, DoCheck, KeyValueDiffers, Input, OnChanges} from '@angular/core';
import {IngredientService} from "./ingredients.service";
import {Recipe} from './recipe';
import {EditRecipe} from './edit-recipe.component';
import {DeleteRecipe} from './delete-recipe.component';
import {Ingredient} from './ingredient';

@Component({
  selector: 'recipe-detail',
    template: `
    <div>
    <h3>Ingredients</h3>
    <div *ngFor="let ing of selectedRecipe.ingredients">
    <p>{{ing.name}}</p>
    </div>
    <div>
    <delete-recipe [recipes]="recipes" [id]="selectedRecipe.id"></delete-recipe>
    <edit-recipe [ingredients] = "selectedRecipe.ingredients"></edit-recipe>
    </div>
    </div>
    `,
    directives: [
        EditRecipe,
        DeleteRecipe
    ]
})

export class RecipeDetail{

    ingredients: Ingredient[];
    @Input() selectedRecipe: Recipe;
    @Input() recipes: Recipe[];

constructor(private ingService: IngredientService){

}

}