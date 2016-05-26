import { Component, Input } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from './ingredient';

@Component({
    selector: 'add-recipe',
    template: `
    <button class="btn btn-info btn-lg" data-toggle="modal" data-target="#addRecipeModal">Add Recipe</button>

    <div class="modal fade" id="addRecipeModal" role="dialog">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h3 class="modal-title">Modal Header</h3>
        </div>
        <div class="modal-body">
        <h4>Recipe Name</h4>
        <input [(ngModel)] = "recipe.name"/>
        <h4>Ingredients</h4>
        <div *ngFor = "let ing of ingredients">
        <input [(ngModel)]="ing.name"/>
        </div>
        <button (click) = "addIngredient()">Add Ingredient</button>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal" (click)="addRecipe()">Save</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
    `
})

export class AddRecipe {

    @Input() recipes: Recipe[];
    recipe: Recipe = {name: ''};
    ingredients: Ingredient[] = [{name: ''}];

    addIngredient(){
        this.ingredients.push({name: ''});
    }

    addRecipe(){
        this.recipe.id=this.recipes.length+1;
        this.recipe.ingredients=this.ingredients;
        this.recipes.push(this.recipe);
    }

}
