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
var ingredients_service_1 = require("./ingredients.service");
var recipe_1 = require('./recipe');
var edit_recipe_component_1 = require('./edit-recipe.component');
var delete_recipe_component_1 = require('./delete-recipe.component');
var RecipeDetail = (function () {
    function RecipeDetail(ingService) {
        this.ingService = ingService;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', recipe_1.Recipe)
    ], RecipeDetail.prototype, "selectedRecipe", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], RecipeDetail.prototype, "recipes", void 0);
    RecipeDetail = __decorate([
        core_1.Component({
            selector: 'recipe-detail',
            template: "\n    <div>\n    <h3>Ingredients</h3>\n    <div *ngFor=\"let ing of selectedRecipe.ingredients\">\n    <p>{{ing.name}}</p>\n    </div>\n    <div>\n    <delete-recipe [recipes]=\"recipes\" [id]=\"selectedRecipe.id\"></delete-recipe>\n    <edit-recipe [ingredients] = \"selectedRecipe.ingredients\"></edit-recipe>\n    </div>\n    </div>\n    ",
            directives: [
                edit_recipe_component_1.EditRecipe,
                delete_recipe_component_1.DeleteRecipe
            ]
        }), 
        __metadata('design:paramtypes', [ingredients_service_1.IngredientService])
    ], RecipeDetail);
    return RecipeDetail;
}());
exports.RecipeDetail = RecipeDetail;
//# sourceMappingURL=recipe-detail.component.js.map