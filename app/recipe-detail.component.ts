import { Component } from '@angular/core';
import {IngredientService} from "./ingredients.service";
//import {Ingredient} from "./ingredient";

@Component({
  selector: 'recipe-detail',
    template: `
    <div>
    <h3>Ingredients</h3>
    <div *ngFor="let ing in ingredients">
    <p>{{ing}}</p>
    </div>
    <div>
    <span><button>Delete</button></span>
    <span><button>Edit</button></span>
    </div>
    </div>
    `
})

export class RecipeDetail {

    ingredients: string[];

constructor(private ingService: IngredientService){}


}