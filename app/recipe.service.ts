import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';

@Injectable()
export class RecipeService {

    getRecipes() {
        return Promise.resolve(RECIPES);
    }

    getRecipe(id: number) {
        return Promise.resolve(RECIPES).then(
            recipes => recipes.filter(recipe => recipe.id === id)[0]
        );
    }

}