"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var recipe_service_1 = require('./recipe.service');
//import {Ingredient} from './ingredient';
var IngredientService = (function () {
    function IngredientService(recipeService) {
        this.recipeService = recipeService;
    }
    IngredientService.prototype.setSelectedRecipe = function (recipe) {
        this.selectedRecipe = recipe;
    };
    IngredientService.prototype.getSelectedRecipe = function () {
        return this.selectedRecipe;
    };
    IngredientService.prototype.setDisplay = function (display) {
        this.display = display;
    };
    IngredientService.prototype.getDisplay = function () {
        return this.display;
    };
    IngredientService.prototype.getIngredients = function () {
        this.recipeService.getRecipe(this.selectedRecipe.id).then(function (recipe) {
            return recipe.ingredients;
        });
    };
    IngredientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], IngredientService);
    return IngredientService;
}());
exports.IngredientService = IngredientService;
//# sourceMappingURL=ingredients.service.js.map