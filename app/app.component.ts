import { Component } from '@angular/core';
import { RecipesList } from './recipes-list.component';
import { AddRecipe } from './add-recipe.component';
import { Recipe } from './recipe';
import { RecipeService } from './recipe.service';
import {IngredientService} from "./ingredients.service";

@Component({
    selector: 'my-app',
    template:`
    <recipes-list></recipes-list>
    <add-recipe></add-recipe>
    `,
    directives: [
        RecipesList,
        AddRecipe
    ],
    providers: [
        RecipeService,
    IngredientService
    ]
})

export class AppComponent {

}


