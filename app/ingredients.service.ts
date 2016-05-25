import {Injectable} from '@angular/core';

import {Recipe} from './recipe';
import {RecipeService} from './recipe.service';
//import {Ingredient} from './ingredient';

@Injectable()
export class IngredientService {

    constructor(private recipeService: RecipeService){ }

    getIngredients(id){
        this.recipeService.getRecipe(id).then(
            function(recipe){
                return recipe.ingredients;
            }
        )
    }

}