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
var router_deprecated_1 = require('@angular/router-deprecated');
var recipes_list_component_1 = require('./recipes-list.component');
var add_recipe_component_1 = require('./add-recipe.component');
var recipe_service_1 = require('./recipe.service');
var ingredients_service_1 = require("./ingredients.service");
var recipe_detail_component_1 = require("./recipe-detail.component");
var router_deprecated_2 = require('@angular/router-deprecated');
var user_service_1 = require('./user.service');
var user_service_2 = require('./user.service');
var RecipesComponent = (function () {
    function RecipesComponent(recipeService, ingredientService, userService, router) {
        this.recipeService = recipeService;
        this.ingredientService = ingredientService;
        this.userService = userService;
        this.router = router;
    }
    RecipesComponent.prototype.ngOnInit = function () {
        this.getRecipes();
    };
    RecipesComponent.prototype.getRecipes = function () {
        var _this = this;
        this.recipeService.getRecipes()
            .then(function (recipes) { return _this.recipes = recipes; });
    };
    RecipesComponent.prototype.logout = function () {
        this.userService.logout();
        this.router.parent.navigateByUrl('/login');
    };
    RecipesComponent = __decorate([
        core_1.Component({
            selector: 'recipes',
            template: "\n    <recipes-list [recipes]=\"recipes\"></recipes-list>\n    <add-recipe [recipes]=\"recipes\"></add-recipe>\n    <button (click)=\"logout()\">Logout</button>\n    ",
            directives: [
                recipes_list_component_1.RecipesList,
                add_recipe_component_1.AddRecipe,
                recipe_detail_component_1.RecipeDetail
            ],
            providers: [
                recipe_service_1.RecipeService,
                ingredients_service_1.IngredientService,
                user_service_2.UserService
            ]
        }),
        router_deprecated_2.CanActivate(user_service_1.isLoggedIn), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService, ingredients_service_1.IngredientService, user_service_2.UserService, router_deprecated_1.Router])
    ], RecipesComponent);
    return RecipesComponent;
}());
exports.RecipesComponent = RecipesComponent;
//# sourceMappingURL=recipes.component.js.map