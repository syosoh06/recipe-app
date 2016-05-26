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
var recipes_list_component_1 = require('./recipes-list.component');
var add_recipe_component_1 = require('./add-recipe.component');
var recipe_service_1 = require('./recipe.service');
var ingredients_service_1 = require("./ingredients.service");
var recipe_detail_component_1 = require("./recipe-detail.component");
var AppComponent = (function () {
    function AppComponent(recipeService, ingredientService) {
        this.recipeService = recipeService;
        this.ingredientService = ingredientService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getRecipes();
    };
    AppComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipeService.getRecipes()
            .then(function (recipes) { return _this.recipes = recipes; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <recipes-list [recipes]=\"recipes\"></recipes-list>\n    <add-recipe [recipes]=\"recipes\"></add-recipe>\n    ",
            directives: [
                recipes_list_component_1.RecipesList,
                add_recipe_component_1.AddRecipe,
                recipe_detail_component_1.RecipeDetail
            ],
            providers: [
                recipe_service_1.RecipeService,
                ingredients_service_1.IngredientService
            ]
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService, ingredients_service_1.IngredientService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map