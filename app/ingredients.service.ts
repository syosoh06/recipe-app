
import {Injectable} from '@angular/core';

import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';
//import {Ingredient} from './ingredient';

@Injectable()
export class IngredientService {

    selectedRecipe: Recipe;
    display: boolean;

    constructor(private recipeService: RecipeService){ }

    setSelectedRecipe(recipe: Recipe){
        this.selectedRecipe = recipe;
    }

    getSelectedRecipe(){
       return this.selectedRecipe;
    }

    setDisplay(display: boolean){
        this.display=display;
    }

    getDisplay(){
        return this.display;
    }

    getIngredients(){
        this.recipeService.getRecipe(this.selectedRecipe.id).then(
            function(recipe){
                return recipe.ingredients;
            }
        )
    }

}
