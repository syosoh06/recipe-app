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
var recipe_detail_component_1 = require('./recipe-detail.component');
var ingredients_service_1 = require('./ingredients.service');
var RecipesList = (function () {
    function RecipesList(recipeService, ingredientService) {
        this.recipeService = recipeService;
        this.ingredientService = ingredientService;
    }
    RecipesList.prototype.ngOnInit = function () {
        this.display = false;
    };
    RecipesList.prototype.onSelect = function (recipe) {
        this.selectedRecipe = recipe;
        this.display = !(this.display);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], RecipesList.prototype, "recipes", void 0);
    RecipesList = __decorate([
        core_1.Component({
            selector: 'recipes-list',
            template: "\n    <div *ngFor=\"let recipe of recipes\">\n    <p (click) = \"onSelect(recipe)\">{{recipe.name}}</p>\n    <recipe-detail *ngIf=\"recipe == selectedRecipe && display\" [selectedRecipe]=\"selectedRecipe\" [recipes]=\"recipes\"></recipe-detail>\n    </div>\n    ",
            directives: [
                recipe_detail_component_1.RecipeDetail
            ]
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService, ingredients_service_1.IngredientService])
    ], RecipesList);
    return RecipesList;
}());
exports.RecipesList = RecipesList;
//# sourceMappingURL=recipes-list.component.js.map