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
var recipe_1 = require('./recipe');
var recipe_service_1 = require('./recipe.service');
var RecipesList = (function () {
    function RecipesList(recipeService) {
        this.recipeService = recipeService;
    }
    RecipesList.prototype.ngOnInit = function () {
        this.getRecipes();
    };
    RecipesList.prototype.getRecipes = function () {
        var _this = this;
        this.recipeService.getRecipes()
            .then(function (recipes) { return _this.recipes = recipes; });
    };
    RecipesList.prototype.onSelect = function (recipe) {
        this.selectedRecipe = recipe_1.Recipe;
    };
    RecipesList = __decorate([
        core_1.Component({
            selector: 'recipes-list',
            template: "\n    <div *ngFor=\"let recipe of recipes\">\n    <p (click) = \"onSelect(recipe)\">{{recipe.name}}</p>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [recipe_service_1.RecipeService])
    ], RecipesList);
    return RecipesList;
})();
exports.RecipesList = RecipesList;
//# sourceMappingURL=recipes-list.component.js.map